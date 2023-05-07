const Chairs = ({prop}) => {
  return <h1>Hello World</h1>;
};

export default Chairs;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20price%2C%0A%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20%20%20key%2C%0A%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%0A%7D%0A"
  );
  const data = await response.json();

  return {
    props: {
      prop: data,
    },
  };
}
