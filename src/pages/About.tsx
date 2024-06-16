import { NavLink } from "react-router-dom"
import { ROUTES } from "../routes/routes"

const About = () => {
  return (
    <>
      <div className="card col-6 mx-auto mt-3" >
        <img className="card-img-top mt-3" src="https://placehold.co/200x100" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">React Playground</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam doloribus odit obcaecati blanditiis quo aut ullam inventore eius cumque iste quaerat omnis quam, eum ratione reprehenderit! Eveniet, nostrum provident.</p>
          <NavLink to={ROUTES.home} className="btn btn-primary">Back Home</NavLink >
        </div>
      </div>
    </>
  )
}

export default About
