<h1>E-commerce Backend</h1>
<p>This project is a backend for an e-commerce application built using Node.js, Express.js, MongoDB, Mongoose, EJS and Passport library for authentication.</p>

<h2>Features</h2>
<ul>
<li>User authentication with email and password</li>
<li>Creation of new users</li>
<li>User login with email and password</li>
<li>Creation of new products with name and quantity</li>
<li>Retrieval of all products</li>
<li>Deletion of a specific product by ID</li>
<li>Updating the quantity of a specific product by ID</li>
</ul>

<h2>Getting Started</h2>
<ol>
<li>Clone the repository: <br> git clone https://github.com/kevalr
</li>
<li>Install dependencies: <br> npm install</li>
<li>Start the server: npm start<br> </li>
</ol>

<h2>API Endpoints</h2>
<ul>
  <li>
     POST /users/sign-up <br>
     Creates a new user with the provided email, password, and username. The request body should be in JSON format with the following keys: <br>
     {
    "email": "test@gmail.com",
    "password": "12345678",
    "username": "test"
}
  </li>
  <br>
  <li>
     POST /users/sign-in <br>
     Authenticates a user with the provided email and password. The request body should be in JSON format with the following keys: <br>
     {
    "email": "test@gmail.com",
    "password": "12345678"
}
  </li>
  <br>
  <li>
     POST /products/create <br>
     Creates a new product with the provided name and quantity. The request body should be in JSON format with the following keys: <br>
     {
    "name": "phone",
    "quantity": "15"
    }
  </li>
  <br>
  <li> 
  GET /products
  <br />
  Retrieves all products.
  </li>
  <br>
  <li> 
    DELETE /products/:productId
  <br />
    Deletes a product with the specified ID.
  </li>
  <br>
  <li> 
  POST /products/:productId/update_quantity
  <br />
  Updates the quantity of a product with the specified ID. The new quantity is provided as a query parameter with the key "number"
  <br />
  For example :  to increase the quantity of a product with ID "1234" by 5, you would send a request to: <br>
  /products/1234/update_quantity?number=5
  </li>
</ul>
