# Eagleson 650 Car Wash & Detailing: website

Website for the car wash at **650a Eagleson Rd, Kanata, ON K2M 1H4**. It focuses on detailing (two packages), covers the 24/7 self-serve wash, and invites independent detailers to partner with us.

Everything is in `docs/`. It's plain HTML, CSS and JS, so there's no build step and no server.

| File | What it is |
| --- | --- |
| `docs/index.html` | The whole site (one page) |
| `docs/styles.css` | Styling |
| `docs/main.js` | Booking form (opens the visitor's email app with the request filled in) |
| `docs/favicon.svg` | Browser tab icon |

To preview, open `docs/index.html` in a browser.

## Publish it (free)

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/docs`, and save.
3. After a minute the site is live at **https://studykeepyell.github.io/carwash/**.

A custom domain such as `eagleson650.ca` (about $15–25 a year) looks more professional. If you get one, add a `docs/CNAME` file containing the domain, then update the URL in three places in `index.html`: `canonical`, `og:url` and `"url"` in the structured data.

## Before going live

- [ ] **Email:** set `BOOKING_EMAIL` at the top of `docs/main.js`. While it's empty, the site shows "Call to book" instead of the booking form and hides the email links.
- [ ] **Phone:** confirm `(343) 777-9666`. It came from a public directory listing for this location.
- [ ] **Name:** Google Maps currently lists the site as *Eagleson 650 Coin Wash*, and this website uses *Eagleson 650 Car Wash & Detailing*. Google requires the listing name to match the real-world signage, so pick one name and use it everywhere.
- [ ] **Packages and prices:** the two tiers, add-ons and prices are a proposal. Local mobile detailers charge roughly $89–$200 for a basic or full detail. Edit the `#detailing` section in `index.html` and the prices in the structured data at the top.
- [ ] **Wash bay details:** confirm payment methods (coins and card?), the cycles offered, and whether bays are usable for detailing in winter. The site says detailing runs year-round.
- [ ] **Photos:** add real photos of the bay and before/after shots. These help more than anything else on a detailing site.

## Put it on Google Maps

The listing already exists on Google Maps as *Eagleson 650 Coin Wash*.

1. The business owner signs in at **business.google.com** and claims or verifies the listing. If the owner already manages it, they can add you as a manager.
2. **Edit profile → Contact → Website:** paste the site URL.
3. **Booking link:** use the site URL ending in `#book`.
4. **Categories:** keep *Car wash* as the primary category and add *Car detailing service* as a secondary one. If detailing becomes the main business, make it the primary category.
5. **Services:** add *Essential Detail* and *Premium Detail* with their prices.
6. **Hours:** 24 hours for the wash. Note that detailing is by appointment.
7. **Photos and reviews:** upload photos and reply to existing reviews, especially the ones about broken machines. The site's "Leave a Google review" button links straight to the review form.
