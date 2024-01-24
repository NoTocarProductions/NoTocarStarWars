import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError();

  console.log('Error object:', error);

  let title = 'An error occurred!';
  let message = 'Could not find resource or page.';

  if (error && error.status) {
    if (error.status === 500) {
      message = error.data ? error.data.message : 'Internal Server Error';
    }

    if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page.';
    }
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;



// import { useRouteError } from 'react-router-dom';
// import MainNavigation from '../components/MainNavigation';

// import PageContent from '../components/PageContent';

// function ErrorPage() {
//   const error = useRouteError();

//   let title = 'An error occurred!';
//   let message = 'Something went wrong!';

//   if (error.status === 500) {
//     message = error.data.message;
//   }

//   if (error.status === 404) {
//     title = 'Not found!';
//     message = 'Could not find resource or page.';
//   }

//   return (
//     <>
//       <MainNavigation />
//       <PageContent title={title}>
//         <p>{message}</p>
//       </PageContent>
//     </>
//   );
// }

// export default ErrorPage;
