import React, {useEffect} from 'react';
import axios from "axios";

function App() {
  // proxy 사용 x
  const getApi = async () => {
    axios.get("http://localhost:5000/api")
      .then(
        (res) => console.log(res.data)
      );
  };

  // proxy 사용 o - 안됨
  // const getApi = async () => {
  //   axios.get("/api")
  //     .then(
  //       (res) => console.log(res.data)
  //     );
  // };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      프론트 페이지
    </div>
  );
}

export default App;
