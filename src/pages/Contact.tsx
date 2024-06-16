import { NavLink } from "react-router-dom"
import { ROUTES } from "../routes/routes"

const Contact = () => {
  return (
    <>
      <div className="card text-center col-8 mx-auto mt-3">
        <div className="card-header">
          Reach out to us
        </div>
        <div className="card-body">
          <h5 className="card-title">Special React Playground</h5>
          <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minus hic eaque pariatur, autem minima mollitia laudantium aut saepe vel dicta totam iste inventore enim dolore accusantium. Dignissimos, commodi suscipit.</p>
          <NavLink to={ROUTES.home} className="btn btn-primary">Back To Home Page</NavLink >
        </div>
        <div className="card-footer text-muted">
          React is awesome!
        </div>
      </div>
    </>
  )
}

export default Contact
