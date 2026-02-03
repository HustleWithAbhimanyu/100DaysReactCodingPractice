import { useState } from "react";
import useDataUser from "./Components/UseDataUser";

const App = () => {
  const { data, loading, error } = useDataUser();

  const[filteredData, setFilteredData] =useState([data])

  // console.log("Posts data:", data);
  // console.log("Loading:", loading);
  // console.log("Error:", error);

  const handleFilter= (event) =>{
    const searchWord = event.target.value;
    //  setFilteredData([searchWord]);
     const newFilter =data.filter((value) =>{
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  })
  // if(searchWord === ""){
  //   setFilteredData([]);
  // }else{
  //   setFilteredData(newFilter); 
  // }
  setFilteredData(newFilter); 
  }

  return (
    <div>
      <h1>React Custom Hook Practice</h1>
      <h1>Post Titles</h1>

      <div>
        <input type="text" placeholder="Enter a Title" onChange={handleFilter} />
        <div>
         <div className="dataResult">
        {filteredData.slice(0,15).map((value,key)=>{
          return(
            <div className="dataItem" href={value.link} target="_blank" >
              <p>{value.title}</p>
            </div>
          )
        })}
      </div>
        </div>
      </div>

      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
