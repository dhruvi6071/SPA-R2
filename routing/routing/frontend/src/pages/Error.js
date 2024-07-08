import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
    const error = useRouteError();
    // eslint-disable-next-line no-unused-expressions
    // error.status;

    let title = 'An error occured';
    let message = "something may be wrong";
    if(error.status === 500){
        message = error.data.message;
    }
    return <PageContent title="An error occured" >
        
            <p>Something went wrong</p>
    
        </PageContent>;
}

export default ErrorPage;