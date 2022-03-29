import React, { useEffect, useState } from "react";

export default function ReleaseSchedule() {
  const [data, setData] = useState("{}");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    async function fetchDiGSReleaseScheduleMessage() {
      const response = await fetch(
        `/dsched/sws/microservice/digs-microservice/releaseschedule/${query}`
      );
      const data = await response.json();
      const results = data;
      console.table(data);
      console.log(data);
      setData(results);
    }
    fetchDiGSReleaseScheduleMessage();
  };

  return (
    <div
      className="home"
    >
      <form onSubmit={handleSubmit}>
        <br />
        <header class="major">
					<h2>Release Schedule Message</h2>
				</header>

      
        		
        <label>
          Input UPC:{" "}
          <input
            type="text"
            placeholder="Enter UPC"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Submit"/>
      </form>

     <div> 
       
    
      
     
       JSON - V2 Message (Release Snapshot) for UPC : <b>&nbsp;{query}</b>
      
       <pre>
          <code>
           <b>{JSON.stringify(data, "", 2)}</b>
          </code></pre>
       </div>
       
      </div>
  );
}