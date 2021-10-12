import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return {
    props: {currentUser:data}
  }
}


export default LandingPage;
