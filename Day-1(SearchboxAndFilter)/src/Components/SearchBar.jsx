import React, { useState } from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function SearchBar ({placeholder ,data}) {
const[filterData, setfilterData] =useState([]);
const[wordEntered, setWordEntered] = useState("");

const handleFilter =(event) =>{
  // console.log("e.target.value" +event.target.value);
  const searchWord = event.target.value ;
  setWordEntered(searchWord);
  const newFilter =data.filter((value) =>{
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  })

  if(searchWord === ""){
    setfilterData([]);
  }else{
    setfilterData(newFilter); 
  }
}

const clearInput =() =>{
  setfilterData([]);
  setWordEntered("");
}

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
          {filterData.length ==0 ?<SearchIcon/> : <ClearIcon id="clearBtn" onClick={clearInput}/>}
        </div>
      </div>
      { filterData.length !=0 && (
      <div className="dataResult">
        {filterData.slice(0,15).map((value,key)=>{
          return(
            <a className="dataItem" href={value.link} target="_blank" >
              <p>{value.title}</p>
            </a>
          )
        })}
      </div>
      )}
    </div>
  );
}

export default SearchBar;
