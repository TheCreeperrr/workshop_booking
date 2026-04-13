# **Workshop Booking**

> This website is for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.


### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    > Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

__NOTE__: Check docs/Getting_Started.md for more info.


# **Changes Made in the UI**

- Revamped the navigation bar with fixed positioning, mobile hamburger menu, and role-based link visibility (instructor vs coordinator)
- Switched styling from plain CSS to Tailwind CSS V3
- Introduced a consistent card-based layout across all pages (white background, rounded corners, light shadow)
- Added subtle fade dividers between table rows for visual separation
- Built tables with clean key-value layouts for detail pages (profile, workshop type details)
- Styled status indicators as color-coded badges (green for Accepted, yellow for Pending)
- Made all pages centered with consistent max-width containers for readability on wide screens
- Added back navigation button on some pages
- Added a persistent footer
- All pages use mock/hardcoded data, decoupled from the Django backend

# **Setup Instructions**

The frontend was designed using the React Javascript Library. To run it:

```
cd frontend
npm install
npm start
```

You will immediately be redirected to http://localhost:3000. If not, you can manually open the link.