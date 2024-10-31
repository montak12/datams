document.addEventListener("DOMContentLoaded", () => {
    // URL of the sitemap XML file
    const sitemapUrl = 'https://www.datams.lv/sitemap.xml';

    // Function to fetch and process the sitemap
    async function loadSitemap() {
        try {
            // Fetch the sitemap XML file
            const response = await fetch(sitemapUrl);
            const xmlText = await response.text();

            // Parse the XML content
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

            // Extract all <loc> elements (they contain the URLs)
            const urls = xmlDoc.getElementsByTagName('loc');

            // Container for the hidden links
            const container = document.getElementById('hidden-links');

            // Loop through each <loc> element and create hidden links
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i].textContent;

                // Create an anchor element
                const link = document.createElement('a');
                link.href = url;
                link.textContent = url;
                link.style.display = 'none';  // Make the link hidden

                // Append the link to the container
                container.appendChild(link);
            }

            console.log('Hidden links created successfully.');
        } catch (error) {
            console.error('Error loading sitemap:', error);
        }
    }

    // Call the function to load the sitemap and create hidden links
    loadSitemap();
});
