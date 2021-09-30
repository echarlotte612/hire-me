## Famly Hire-Me | Daycare Attendance App

This **Daycare Attendance App** displays a list of children and allows you to check them into or out of a daycare. It was created in response to [Famly's](https://www.famly.co/)  Hire-Me coding challenge.

## Installation
1. Clone the repository
	`git clone`
2. Install the dependencies 
	`npm install` or `yarn install`
3. Start the application (http://localhost:3000/) 
	`npm start` or `yarn start`

## Design Notes
*Styling was not the focus of this app, however I wanted to keep it relatively user-friendly so did add a small amount to help with this.*
 - Created with CSS Flexbox to ensure the app is reactive for iPads and tablets.
 - Used colors and font from the Famly brand to keep in-line with [company image](https://www.famly.co/media)
 - Kept a simple interface with check-in and check-out buttons that change depending on the status of the child. This helps staff keep a track of each child's attendance with a visual prompt.
 - Infinite scrolling option was chosen to keep user experience simple.
 - I used Axios rather than Fetch for my API handling as Axios has wider browser support.

## Technologies Used

 - [create-react-app](https://create-react-app.dev/)
 - [axios](https://www.npmjs.com/package/axios)
 - [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
 - [time-stamp](https://www.npmjs.com/package/time-stamp)

## Project Requirements


| Original Requirement |Achieved By  |
|--|--|
|List children with some form of pagination/lazy-loading/infinite-scroll  | Using the `map` function within a react-infinite-scroll-component. |
|Check-in a child | Using axios and time-stamp to post to the API that the selected child has checked-in and the time that this happened |
|Check-out a child  | Similar to the check-in, using axios to post to the API that the selected child has checked out |
