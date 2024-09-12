import { Link } from "react-router-dom";

export function ToDoRegister(){
    return(
        <div className="bg-light p-3">
            <h2>Register User</h2>
            <form>

            </form>
            <p>
                <Link to="/login">Existing User Login</Link>
            </p>
        </div>
    )
}