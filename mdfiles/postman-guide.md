# How to Run the Backend and Test APIs with Postman

As a frontend developer, you are used to seeing your components visually in the browser. However, a backend API doesn't have a user interface. To interact with it and make sure it works before you connect it to your React code, we use a tool called **Postman** (or similar tools like Insomnia).

---

## Part 1: How to Run the Backend

Before you can test the APIs, your Node.js server must be running.

1. Open a terminal in VS Code.
2. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
3. Start the server using the `dev` script we set up in `package.json`. This uses `nodemon`, which will automatically restart your server whenever you save a change to a file.
   ```bash
   npm run dev
   ```
4. If it's successful, you should see this message in your terminal:
   ```text
   Server is running on http://localhost:5000
   ```
   **Important:** Leave this terminal open and running! If you close it, your backend goes offline.

---

## Part 2: How to Test APIs in Postman

Postman allows you to act like a React Frontend. You can send `GET` requests to fetch data, or `POST` requests to send form data.

### 1. Testing `GET` All Students

This simulates what happens when your React app loads a page and fetches the student list.

1. Open **Postman**.
2. Click the **New** button or the **+** tab to create a new Request.
3. Set the HTTP Method dropdown to **GET** (it usually defaults to GET).
4. In the URL bar next to it, paste your local server address:
   `http://localhost:5000/api/students`
5. Click the blue **Send** button.
6. Look at the bottom half of the Postman window (the **Response** section). You should see a JSON array of your students:
   ```json
   [
       {
           "id": 1,
           "name": "John Doe",
           "grade": "10th",
           "age": 15
       },
       {
           "id": 2,
           "name": "Jane Smith",
           "grade": "11th",
           "age": 16
       }
   ]
   ```

### 2. Testing `GET` a Single Student

1. In Postman, open a new tab.
2. Set the Method to **GET**.
3. Enter the URL with an ID at the end (e.g., ID 1):
   `http://localhost:5000/api/students/1`
4. Click **Send**.
5. The Response should show just one student object:
   ```json
   {
       "id": 1,
       "name": "John Doe",
       "grade": "10th",
       "age": 15
   }
   ```

### 3. Testing `POST` (Creating a New Student)

This simulates submitting a form from your React frontend.

1. In Postman, open a new tab.
2. Change the HTTP Method dropdown to **POST**.
3. Enter the URL:
   `http://localhost:5000/api/students`
4. Now, we need to attach the "Form Data" (the JSON body). 
   - Below the URL bar, click on the **Body** tab.
   - Select the **raw** radio button.
   - On the far right of that same row, change the dropdown from **Text** to **JSON**.
5. Paste the following JSON inside the text box (this acts as your `req.body`):
   ```json
   {
       "name": "Alex Johnson",
       "grade": "9th",
       "age": 14
   }
   ```
6. Click **Send**.
7. In the Response section below, you should see status `201 Created` and the new student object returned with its newly generated ID:
   ```json
   {
       "id": 3,
       "name": "Alex Johnson",
       "grade": "9th",
       "age": 14
   }
   ```
8. **Verify:** Go back to your first `GET /api/students` tab and click **Send** again. You should now see Alex included in the array!

---

## Troubleshooting

- **Error: "Could not get any response" or "ECONNREFUSED"**
  Your Node server is likely not running. Go back to Part 1 and ensure the terminal is running `npm run dev` and isn't crashed or stopped.
- **Error: "Cannot POST /api/students"**
  Double-check the URL for typos. Make sure you don't have an extra slash or a missing letter.
- **My array reset and Alex is gone!**
  Remember, right now the data is just stored in an array inside `studentController.js`. Any time you save a file and nodemon restarts the server, that array is wiped clean and re-created from scratch. That is exactly why you'll eventually want to attach a permanent database like MongoDB!
