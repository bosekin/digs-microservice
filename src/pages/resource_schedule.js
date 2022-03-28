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
					<h2>Resource Schedule Message</h2>
				</header>
        		
        <label>
          Input ISRC:{" "}
          <input
            type="text"
            placeholder="Enter ISRC"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Submit"/>
      </form>

     <div> 
       
    
      
     
       JSON - V2 Message (Resource Snapshot) for ISRC : <b>&nbsp;{query}</b>
       
       <pre><code>

       {JSON.stringify(data, "", 2)}
</code></pre>
       
       </div>

      </div>
  );
}