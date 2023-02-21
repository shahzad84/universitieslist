import React, { useState, useEffect } from 'react';

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
//   declaring a state variable called universities and initializing it with an empty array using the useState hook.
  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?name=science')
      .then(response => response.json())
      .then(data => setUniversities(data))
      .catch(error => console.log(error));
  }, []);
//   useEffect hook to fetch data from the API and update the universities state with it.

  return (
    <div>
      <h1>universities list</h1>
      <ul>
        {universities.map(university => (
          <li key={university.name}>
            {university.name} - {university.country}
          </li>
        ))}
        {/* mapping over the universities state array and rendering an li element for each university in the array */}
      </ul>
    </div>
  );
};

export default UniversityList;
