#### Setup
 * Fork, clone, run yarn install, yarn start, pull request

#### Do
 * Create a Products component that is responsible for filtering and creating the array of ProductDetail components instead of App
 * Create a component called Shop that contains the CategoryMenu, Carousel and Products component
 * Create an About component that has the html of an about page. Be as creative as you have time for
 * Create a Contact component that has some input fields to enter email address and message and a send button
 * Create a Product component that will show the details of one component. It should receive the array of products from props. It should use the route variable /:id to find the specific product it should show.
 * Create another link in the top nav for Shop in the NavBar. It should link to /shop/food
 * In App, use react router BrowserHistory, Route and Switch to create routes for the About, Contact, Product and Shop Components
 * Put the routes in the "middle" content area between the nav bar and footer
 * The route for the Shop component should have a path variable for /:category
 * The route for the Product component should have a path variable for /:id
 * Change the Category component to use the Link component and link to the Shop route giving a value for the category variable according to whatever category it is
 * Change the Products component to get the category value from the route variable instead of state
 * Change the ProductDetail component to have a Link on the product name that will link to the product/:id route

