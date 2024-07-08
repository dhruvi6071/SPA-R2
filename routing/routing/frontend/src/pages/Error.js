import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();
  // eslint-disable-next-line no-unused-expressions
  // error.status;

  let title = "An error occured";
  let message = "something may be wrong";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "could not find resource or page";
  }
  return (
    <>
    <MainNavigation/> 
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
