import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h4 className="mb-4">Oops!</h4>
      <p>Looks like an error occured.</p>
      <Link to="/contact">
        <button className="border rounded-md px-6 py-2 mt-8 bg-green38 text-white text-md">Go Back Home</button>
      </Link>
    </div>
  )
};

export default ErrorPage;