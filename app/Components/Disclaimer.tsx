"use client"
import React, { useState } from "react";

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleDecline = () => {
      console.log("User declined the disclaimer.");
    setIsVisible(false);
      
  };

  if (!isVisible) return null; 

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-black p-6 rounded-lg shadow-lg transition-all duration-500">
      <h1 className="text-2xl text-white font-semibold">Disclaimer</h1>
      
      <div className="h-[118px] my-3 overflow-y-scroll text-gray-300 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        This website has been designed only for the purposes of dissemination of basic information on NCR Law Associate; information which is otherwise available on the internet, various public platforms and social media. Careful attention has been given to ensure that the information provided herein is accurate and up-to-date. However, NCR Law Associate is not responsible for any reliance that a reader places on such information and shall not be liable for any loss or damage caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof. Reader is advised to confirm the veracity of the same from independent and expert sources.
<br/>
This website is not an attempt to advertise or solicit clients, and does not seek to create or invite any lawyer-client relationship. The links provided on this website are to facilitate access to basic information on NCR Law Associate, and, to share the various thought leadership initiatives undertaken by it. The content herein or on such links should not be construed as a legal reference or legal advice. Readers are advised not to act on any information contained herein or on the links and should refer to legal counsels and experts in their respective jurisdictions for further information and to determine its impact.
<br/>
NCR Law Associate advises against the use of the communication platform provided on this website for exchange of any confidential, business or politically sensitive information. User is requested to use his or her judgment and exchange of any such information shall be solely at the user’s risk.
<br/>
NCR Law Associate uses cookies on its website to improve its usability. This helps us in providing a good user experience and to also help in improving our website. By continuing to use our website without changing your privacy settings, you agree to use our cookies.
      </div>

      <div className="flex justify-end mt-4 space-x-4">
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all"
        >
          ACCEPT
        </button>
        <button
          onClick={handleDecline}
          className="border-2 border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition-all"
        >
          DECLINE
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
