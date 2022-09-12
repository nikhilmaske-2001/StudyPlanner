# StudyPlanner
Refer to Consideration [here](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#considerations)
# Index
   * [MVP](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#mvp-of-studyplanner)
   * [ScreenShots of the web app](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#screenshots-of-the-web-app)
   * [Features Supported](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#features-supported)
   * [Technologies Used](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#technologies-used)
   * [Tools Used](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#tools-used)
   * [Consideration](https://github.com/nikhilmaske-2001/StudyPlanner/blob/main/README.md#considerations)

# MVP of StudyPlanner

<img width="587" alt="MVP" src="./images/MVP.PNG">

# Screenshots of the web app

1. Login Page <img width="960" alt="Login" src="./images/Login.PNG">
2. Register Page <img width="960" alt="Register" src="./images/Register.PNG">
3. Sessions Page <img width="948" alt="SessionList" src="./images/SessionList.PNG">
4. Create a new session Page <img width="940" alt="NewSession" src="./images/NewSession.PNG">

# Features Supported:
- [x] Login
- [x] Register
- [x] Create a new study session
- [x] See a list of all study session
- [ ] See only upcoming sessions (Skip past session)
- [ ] Sort the sessions by date
- [ ] Register for a session

# Technologies Used:
* MongoDB
* Express
* ReactJS
* NodeJS
* bcryptJS (To excrypt and decrypt user passwords)
* dotenv (To access environment variables)
* mongoose (To connect the MongoDB)
* nodemon (Automatically detect the changes and reload the app)
* MaterialUI (Card, Buttons etc are used)
* Axios (For api requests)
* React-router-dom (For routing)

# Tools used:
* VScode (As a primary code editor)
* Postman (To test the Api)


# Considerations
**1) Database Design**
   Database has two collections:
   * sessions (Stores the data of sessions which includes:
        * Id
        * Title
        * Subject
        * Start Date
        * End Date
        * Start Time
        * End Time
        * Students Limit
        * Students join Session (Array)
   )
   * users (Store the data of users which includes
        * Id
        * Email
        * Password (Encrypted Hashed using bcryptJS)
   )
        
**Relations:** Every session contains a `studentsJoined` array collection which contains the users unique id. This resembles the user which is in array is a member of a session

**2) Security Considersations:**
    1) Encrypted Hashed Password: After every registeration, the user password is encrypted and hashed using bcryptjs and then stored in the database. SO that any         user having Database access cannot see the original passwords directly.
    2) Use of `.env`: To hide the important urls/passwords/keys, they are stored in `.env` file. These file is accessed using `dotenv`.
    
**3) Maintainability:**
    1) Seperated frontend and backend : The frontend and backend of the project is seperated and are independent of each other. User can write new Apis or create           new UI without disturbing each other. This simplifies the maintainability of the project.
    2) Seperated Pages and components: React offers this features that makes code seperated and less clustered. Every page and components are independent of each           other.
    3) Use of context Api: Instead of passing props to its childrens and messing up something, context API is used. A hook is created using context api and all             children are wrapped under its provider. For accessing any props user can easily make use of hook.
    4) Seperated css: For every pages/components, its css file is seperated to avoid overriding of css.
    
**4) Readablitiy:**
    1) All variable names, files names are very related and understable to any new user.
 
**5) Scalability:**
    *
