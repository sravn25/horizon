import { useRouteError } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id="error-page" className="m-12 p-12 flex flex-col h-80">
        <h1 className="text-3xl font-serif">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
