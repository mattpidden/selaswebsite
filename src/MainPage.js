import React from "react";
import "./MainPage.css";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Saturday from './Saturday'; // Import the Itinerary component
import Sunday from './Sunday'; // Import the Attire component
import Monday from './Monday'; // Import the ExtraDetails component
import Tuesday from "./Tuesday";
import ExtraDetails from "./ExtraDetails";

const MainPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <div className="main-container">
      <div className="left-column">
      <img src={require('./right-image.jpg')} alt="Right Column Image" />
      </div>
      <div className="middle-column">
        <marquee><h1>Selas visit to Bristol!</h1></marquee>
        <div className="tabs">
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
        >
          <Tab className="tab" label="Saturday" />
          <Tab className="tab" label="Sunday" />
          <Tab className="tab" label="Monday" />
          <Tab className="tab" label="Tuesday" />
          <Tab className="tab" label="Extra Details" />
        </Tabs>
        </div>
        <div className="tabContent">
    {value === 0 && <Saturday />} {/* Display Itinerary component when value is 0 */}
    {value === 1 && <Sunday />} {/* Display Attire component when value is 1 */}
    {value === 2 && <Monday />} {/* Display ExtraDetails component when value is 2 */}
    {value === 3 && <Tuesday />} {/* Display ExtraDetails component when value is 2 */}
    {value === 4 && <ExtraDetails />} {/* Display ExtraDetails component when value is 2 */}
  </div>
      </div>
      <div className="right-column">
        <img src={require('./right-image.jpg')} alt="Right Column Image" />

      </div>
    </div>
    
  </div>
  );
};

export default MainPage;
