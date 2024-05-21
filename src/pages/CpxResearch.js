import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CpxResearch() {
  const [surveyURL, setSurveyURL] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Set loading to true initially
  const appID = '18483';
  const secureHash = 'Fi8IGbyceVTM9mbob09f1BvrZiB5IYiL';

  useEffect(() => {
    // Check if the user ID exists in local storage; if not, create one
    if (!localStorage.getItem('unique_user_id')) {
      const uniqueUserID = uuidv4();
      localStorage.setItem('unique_user_id', uniqueUserID);
    }

    // Generate or retrieve user data
    const uniqueUserID = localStorage.getItem('unique_user_id');
    const userName = localStorage.getItem('userName') || 'defaultUserName'; // Replace with actual logic
    const userEmail = localStorage.getItem('userEmail') || 'defaultEmail@example.com'; // Replace with actual logic

    // Construct the survey URL
    const surveyURL = `https://offers.cpx-research.com/index.php?app_id=${appID}&ext_user_id=${uniqueUserID}&secure_hash=${secureHash}&username=${userName}&email=${userEmail}&subid_1=&subid_2`;

    // Update state to display the survey in an iframe
    setSurveyURL(surveyURL);
  }, []);

  const handleIframeLoad = () => {
    // Set loading state to false when iframe has loaded
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading survey...</p>
        </div> }
      {surveyURL && (
        <iframe
          width="100%"
          height="1000px"
          src={surveyURL}
          title="Survey"
          onLoad={handleIframeLoad}
          style={{ display: isLoading ? 'none' : 'block' , border: 'none'}}
        ></iframe>
      )}
    </div>
  );
}

export default CpxResearch;
