// const API_KEY = "Rxous5uqeAdDmEQw0KTTq0xRmOo2";
// // get all the upcoming  matches
//
//
// export const getMatches=()=>{
//   const url='https://cricapi.com/api/matches/?apikey=${ API_KEY }';
//   return fetch(url).then((response)=>response.json())
//   .catch((error)=>console.log("ERROR:",error));
//
//
//
// };
const API_KEY = "Rxous5uqeAdDmEQw0KTTq0xRmOo2";

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};


// load match Details
export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
