## ✔ 3 features of this project

-   Dynamic data load from api.
-   Student can't take same course twice.
-   Students are limited to a maximum of 20 credit hours of course.

## ✔ State Management of this project

In the development of this project, state management plays a crucial role in maintaining the application's data and ensuring a seamless user experience. Here, I'll provide an overview of how state management is implemented in this project.

### 📄 App.jsx

At the top level of the project, in the `App.jsx` component, I've utilized state management to handle various aspects of the application. Three main states are employed:

1. **selectedCourses**: This state keeps track of the courses that the user has selected. When a user chooses a course, it gets added to this state.

2. **totalCredits**: The `totalCredits` state is responsible for calculating and displaying the total number of credits accumulated from the selected courses. It ensures that students don't exceed the maximum allowed credits, which is 20 in this case.

3. **totalPrice**: Similar to `totalCredits`, the `totalPrice` state is used to calculate and display the total price of the selected courses. This feature aids students in budgeting for their course selections.

### 📄 Courses.jsx

In the `Courses.jsx` component, I've also employed state management techniques. Here, I make API calls to retrieve data related to various courses and store this data within the `courses` state. This state is then used to populate the course listings on the user interface.

### ⚡ Interaction between Components

When a user selects a course, the interaction between components comes into play. The selected course data is passed from `Courses.jsx` to `App.jsx`, where it is added to the `selectedCourses` state. This action triggers updates to the `totalCredits` and `totalPrice` states in real-time.

By managing state in this manner, I've effectively implemented logic to prevent students from selecting the same course multiple times and ensure that they do not exceed the maximum credit limit of 20 credits.

In summary, state management in this project is essential for tracking course selections, calculating total credits and prices, and maintaining a user-friendly experience. It enhances the application's functionality by allowing users to make informed decisions while adhering to course credit limitations.
