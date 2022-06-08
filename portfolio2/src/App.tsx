import { MainHeading } from "./components/Headings/MainHeading";
import { Layout } from "./components/layout/Layout";
import { Project } from "./components/projects/Project";
import "./sass/style.scss";

function App() {
  return (
    <>
      <MainHeading headingType="mainHeading">Portfolio 2 Course Assignment</MainHeading>
      <Layout>
        <Project
          title="Project Exam 2"
          description=" Holidaze is an Accommodation booking website, where users can make enquiries for accommodations, 
          contact the admin via a contact form and search for accommodations. 
          Admin users can see the enquires being made and contact messages and create new accommodations for the site. Written in Next js and Scss."
          website="https://holidazebergen.vercel.app/"
          github="https://github.com/Noroff-FEU-Assignments/project-exam-2-Mindless-dev"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624695/portofolio%202/holidaze_t92jag.jpg"
          alt="a preview of the project exam 2 project"
        />
        <Project
          title="Semester Project 2"
          description="Shoeyverse is an eCommerce Shoe store, where users can add items to the cart, 
          search for products add and remove items from the cart. Admin Users can log in to oversee products, 
          Admin Users can also create, update and delete products. Written with Html, Javascript, and Scss."
          website="https://shoeyverse.netlify.app/index.html"
          github="https://github.com/Mindless-dev/2021-11-22_semester_project_kenny_andre_holmen"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624708/portofolio%202/shoeyverse_gazj8h.jpg"
          alt="a preview of semester project 2"
        />
        <Project
          title="JS Frameworks CA"
          description="Simple Next js project with 4 pages Home page which displays data from an API. 
          Contact form with form validation using react hook form and yup. Log in page sending log-in 
          credentials to rest API when successful returns information to rest API returning a jwt token. Written with Next js and Scss."
          github="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Mindless-dev"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624701/portofolio%202/JSframeworksca_cqypik.jpg"
          alt="a preview of the Js Frameworks CA project"
        />
      </Layout>
    </>
  );
}

export default App;
