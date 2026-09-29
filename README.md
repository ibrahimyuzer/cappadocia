# Cappadocia Turkish Cuisine — GitHub Pages

Static site for `cappadociaturkishcuisine.id`. No build process or paid hosting is required for the basic site.

## Publish

1. Upload the **contents** of this folder to the root of your Cappadocia repository. Keep `index.html`, `CNAME`, `styles.css`, `script.js`, `config.js`, and the `assets` and `menu` folders together.
2. In the repository, open **Settings → Pages** and select **Deploy from a branch → main → /(root)**.
3. In **Custom domain**, enter `cappadociaturkishcuisine.id`. The included `CNAME` file contains the same domain. Once DNS and certificate provisioning complete, enable **Enforce HTTPS**.
4. Your existing Hostinger records should remain: four GitHub Pages A records for `@`, and `www` CNAME → `ibrahimyuzer.github.io`.

The repository name does not have to match `ibrahimyuzer.github.io`. For this separate restaurant project, `cappadocia.github.io` is a project site on the `ibrahimyuzer` account; the custom domain points to this repository's Pages deployment after it is set in that repository's Pages settings.

## Add the PDF menu

Upload your PDF as **`menu/menu.pdf`** (exact lowercase name). The menu button automatically detects a valid PDF and opens it. Until then it asks for the menu via WhatsApp. The PDF is not included because it was not supplied.

## Show live Google reviews and visitor photos on the site

Without Google Maps Platform configuration, the section links visitors to the restaurant's genuine Google Maps reviews and photos. The map itself is embedded at the bottom.

To display review cards and photo thumbnails directly on the page:

1. In Google Cloud, create a Maps Platform project, enable billing and the **Maps JavaScript API** with **Places API (New)** support. Google bills Places requests according to its current pricing.
2. Find the **Place ID for this exact Bintaro restaurant** using Google's Place ID Finder. Check the business name and address carefully; there are unrelated restaurants named Cappadocia.
3. Restrict the browser API key to the website referrers `https://cappadociaturkishcuisine.id/*` and `https://www.cappadociaturkishcuisine.id/*` (and any GitHub Pages preview URL you want to use), and restrict API usage to the needed Google APIs. A browser key is public by design, so referrer and API restrictions are necessary.
4. In `config.js`, fill in `googleMapsApiKey` and `googlePlaceId`. The page will request Google's current reviews and photos with required author credit and source links. If Google is unavailable, visitors still see the Google Maps links.

Google's Places API provides a limited selection of reviews and up to ten photos rather than the full profile. Do not download or cache returned Google photos. If you would rather avoid API billing, leave `config.js` blank and send us a few review excerpts and photos you own or have permission to publish for a curated static section.

## Content notes

- Default language is Indonesian. The site checks the browser language for Indonesian, Turkish, English or Arabic, and remembers a manual selection. Arabic is right-to-left.
- The hero photo is a generated illustration of Turkish food, explicitly labelled as such; it is not presented as a photo of the restaurant's dishes.
- To update the WhatsApp number, change the `wa.me/6281381783730` links in `index.html`.
- The embedded map searches the restaurant name in Bintaro; the directions button uses the exact Google Maps link supplied by the restaurant.
