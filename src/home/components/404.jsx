
const NotFound = () => {
  return(
    <div className="notFoundMain gradient ">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <h2>404</h2>
          <h3>Oops. Page not found ...</h3>
          <p>You may have mistyped the address or the page may have moved.</p>
          <a href="/" className="goHomeButton">Go Home</a>
        </div>
      </div>
    </div>
  );
}
export default NotFound;