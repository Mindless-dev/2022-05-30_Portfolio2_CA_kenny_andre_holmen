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
          description=" A Accomodation booking website, where users can make enquiries for accomodations, contact the admin via a contact form
           and search for accomodations. Admin users can see the enquires being made and contact messages and create new accomodations for the site."
          website="https://holidazebergen.vercel.app/"
          github="https://github.com/Noroff-FEU-Assignments/project-exam-2-Mindless-dev"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624695/portofolio%202/holidaze_t92jag.jpg"
          alt="a preview of the project exam 2 project"
        />
        <Project
          title="Semester Project 2"
          description="Shoeyverse is an ecommerce Shoe store, created for an exam in my studies to become a front-end dev.
          Users can add items to the cart, search for products and remove items from the cart.
          Admin Users can log in and create, update and delete products of the page."
          website="https://shoeyverse.netlify.app/index.html"
          github="https://github.com/Mindless-dev/2021-11-22_semester_project_kenny_andre_holmen"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624708/portofolio%202/shoeyverse_gazj8h.jpg"
          alt="a preview of semester project 2"
        />
        <Project
          title="JS Frameworks CA"
          description="Simple Next js project with 4 pages Home page which displays data from an api.
          contact form with form validation using react hook form and yup.
          Log in page sending log in credentials to rest api when sucessfull returns information to rest api returning a jwt token."
          github="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Mindless-dev"
          image="https://res.cloudinary.com/dmypm1x6b/image/upload/v1654624701/portofolio%202/JSframeworksca_cqypik.jpg"
          alt="a preview of the Js Frameworks CA project"
        />
      </Layout>
    </>
  );
}

export default App;
