#### Setup
Fork, clone, run yarn install, yarn start, pull request

#### Do
 * Create a Products component that is responsible for filtering and creating the array of ProductDetail components instead of App
 * Create a component called Shop that contains the CategoryMenu, Carousel and Products component
 * Create an About component that has the html of an about page. Be as creative as you have time for
 * Create a Contact component that has some input fields to enter email address and message and a send button
 * Create another link in the top nav for Shop
 * Use react router BrowserHistory to create routes for the About, Contact and Shop Components
 * The route for the Shop component should have a path variable for /:category
 * Change the Category component to use the Link component and link to the Shop route giving a value for the category variable according to whatever category it is
 * Change the Product component to get the category value from the route variable instead of state