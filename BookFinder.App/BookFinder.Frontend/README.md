BookFinder is a simple app for searching books based on Titles, Ratings, Authors

1. To run this app you need the following installed on your machine

- Latest Node.js version
- Latest .NET 8 SDK installed
- Visual studio code for frontend running
- Visual studio for backend running

2. To run the backend

- Open the project root solution in visual studio
- Via the terminal navigate to BookFinder.Presentation
- Run the following commands one by one in the terminal
- dotnet restore
- dotnet watch run --launch-profile "https"
- Now the app will run and pay attention to what port it started running on, you will need this later for the frontend.

3. To run the frontend

- Open the project folder in visual studio code
- Find the folder named "services" inside the "src" folder, then inside find the api.js file, here you will see the backend route from earlier, replace this route with the one your backend is running on
- Navigate via the terminal to BookFinder.Frontend
- Run the following commands into the terminal one by one
- npm install
- npm run dev
- Now your frontend is running aswell and should make the calls correctly to the backend
- Test the app
