import React, { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState("");
    const [status, setStatus] = useState("");
    const [errError, setError] = useState("");

    useEffect(loadData,[]);

    function loadData() {
        let url = 'https://dog.ceo/api/breeds/image/random';
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setStatus(data.status);
                setDogImage(data.message);
            })
            .catch((err)=>{
                setError(err);
            });
    }
  return (
      (status === 'success') ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading ...</p>
  );
}

export default App;
