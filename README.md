# Dynamic Product Listing Assessment

## Instructions:

Based on the wireframes in the src/example-final-layouts folder and the data.json provided, please implement layouts for mobile, tablet, and desktop screens using a combination of Javascript and Sass.

You have 2 hours to submit your solution.

Start by clicking "Fork" in the upper right hand side. When you are finished, click on the menu in the upper left hand side and select File > Export to ZIP. Please include your name in the zip file name when you save. Email this zip file back to the person who provided you this assessment.

## Goals:

1. On the first page load only 8 products should be rendered.

2. The layout must follow a mobile first approach. Mobile first means that we always style for mobile first, then tablet, then finally dekstop. We've provided a breakpoint mixin to help target the different screens.

Requirements for Mobile first

- Mobile view should display 1 product per row
- Tablet view (640px and up), should display at least two products per row.
- Desktop view (1024px and up) should display two rows with at least four products on each row.
- Between 640px and 1024px, should display at least three products per row.

3. There needs to be a “Show More” feature. This feature should be a button on the bottom of the page, that when the user clicks on the "Show More" button, page will render the next set of 8 products available. Once all products available in the data.json have been rendered, the “Show More” button should not be displayed.

## Guidelines & Advice:

1. Begin by talking through your plan. In what phases will you approach the exercise?

2. You can open the sandbox console from the bottom left of the preview frame on the right side of the screen.

3. Please use whatever resources are helpful to you (Google, MDN, Stack Overflow, etc.)

4. Please do not modify the data.json or the breakpoint mixin.

5. Please follow the provided wireframes as best as you can. These are guidelines for you. If something is not specifically called out in the wireframes, feel free to be creative with styling.
