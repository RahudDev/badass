import React, { useEffect, useState } from 'react';

function Bitlabs() {
  const [surveyURL, setSurveyURL] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const uniqueUserID = localStorage.getItem('unique_user_id');
    const surveyURL = `https://web.bitlabs.ai/?uid=${uniqueUserID}&token=d912310f-627a-4d0b-b698-c84bbbe06fca`;
    setSurveyURL(surveyURL);
  }, []);

  const handleIframeLoad = () => {
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
          style={{ display: isLoading ? 'none' : 'block', border: 'none' }}
        ></iframe>
      )}
    </div>
  );
}

export default Bitlabs;
