const Chairs = ({ chair }) => {
  console.log(chair);
  return (
    <section>
      {/* {
        chair.map(singleChair =>{
          return(
            <div key={singleChair.id}>
              {singleChair.price}
            </div>
          )
        })
      } */}

      {
        // chair.resu.map(singleChair=> {
        //   return(
        //     <div key={singleChair.id}>
              
        //     </div>
        //   )
        // })
        chair.result.map(cha =>{
          return(
            <div>
             <h2>{cha.price}</h2> 
             <h2>{cha.author}</h2> 
            </div>
          )
        })
      }
    </section>
  );
};

export default Chairs;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%2F%2F%20%20%20price%2C%0A%2F%2F%20%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%2F%2F%20%20%20%20%20key%2C%0A%2F%2F%20%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%2F%2F%20%20%20%20%20categories%0A%2F%2F%20%7D%0A%0A*%5B_type%20%3D%3D%22post%22%26%26%22Chair%22%20in%20categories%5B%5D-%3Etitle%5D%7B%0A%22categories%22%3Acategories%5B%5D-%3Etitle%2C%0A%20%20price%2C%0A%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20author%20-%3E%20%7Bname%7D%0A%20%20%0A%20%20%0A%7D%0A%0A%20%20%0A%20%20"
  );
  const data = await response.json();
    console.log(data);
  return {
    // props: {
    //   chair: data,
    // },
    props: {
      chair: data,
    }
  };
}
