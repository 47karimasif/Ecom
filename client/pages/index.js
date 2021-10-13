// import buildClient from '../api/build-client';

const LandingPage = () => {
  return <h1>Landing Page</h1>;
};

// export async function getServerSideProps(context) {
//   console.log("from index serverside")
//   const client = buildClient(context);
//   const { data } = await client.get('/api/users/currentuser');
//   return {
//     props: {currentUser:data}
//   }
// }


export default LandingPage;
