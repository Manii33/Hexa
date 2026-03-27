import React from "react";
import hubspot from "../Components/Images/hubspot.png";
import sales from "../Components/Images/sales.png";
import airtable from "../Components/Images/airtable.png";
import calendly from "../Components/Images/calendly.png";
import slack from "../Components/Images/slack.png";
import googledrive from "../Components/Images/googledrive.png";
import googlesheet from "../Components/Images/googlesheet.png";
import gmail from "../Components/Images/gmail.png";

const HowItWorks = () => {
  
  const scatteredIcons = [
    { id: 1, pos: "top-[18%] left-[20%]", img: googlesheet, group: "first-four" },  
    { id: 2, pos: "top-[35%] left-[50%]", img: slack, group: "first-four" },       
    { id: 3, pos: "top-[50%] left-[80%]", img: googledrive, group: "first-four" }, 
    { id: 4, pos: "top-[83%] left-[20%]", img: hubspot, group: "first-four" },     

    { id: 5, pos: "top-[18%] left-[80%]", img: gmail, group: "second-four" },     
    { id: 6, pos: "top-[50%] left-[20%]", img: calendly, group: "second-four" },    
    { id: 7, pos: "top-[83%] left-[80%]", img: airtable, group: "second-four" },  
    { id: 8, pos: "top-[65%] left-[50%]", img: sales, group: "second-four" },      
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      <div className="w-full max-w-6xl px-6">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-24">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col">
            <div className="relative w-full aspect-square rounded-[2.5rem] mb-8 overflow-hidden bg-gradient-to-br from-[#FDF2F8] via-[#E0F2FE] to-[#F1F5F9] flex items-center justify-center p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 w-[85%]">
                  <span className="text-purple-500 text-lg">⚡</span>
                  <span className="text-sm font-medium text-gray-600">When this happens...</span>
                </div>
                <div className="h-10 w-[2px] bg-gray-300 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300"></div>
                </div>
                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 w-[85%]">
                  <span className="text-blue-400 text-lg">🖱️</span>
                  <span className="text-sm font-medium text-gray-600">Do this</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 px-2">Select a trigger</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">A trigger is an event kicking off your AI agent.</p>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full aspect-square rounded-[2.5rem] mb-8 overflow-hidden bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] shadow-sm border border-gray-100">
              <div className="absolute inset-0 w-full h-full">
                {scatteredIcons.map((icon) => (
                  <div 
                    key={icon.id}
                    className={`absolute ${icon.pos} -translate-x-1/2 -translate-y-1/2 ${
                      icon.group === "first-four" ? "animate-cinematic-1" : "animate-cinematic-2"
                    }`}
                  >
                    <div className="animate-icon-bounce">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 border border-white/60">
                        <img src={icon.img} alt="app" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 px-2">Connect your apps</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">Hundreds of integrations available.</p>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full aspect-square rounded-[2.5rem] mb-8 bg-gradient-to-br from-[#FFF1F2] via-[#FEE2E2] to-[#FFF7ED] flex items-center justify-center shadow-sm border border-gray-100 p-8">
              <div className="w-full flex flex-col gap-4">
                <span className="text-[14px] font-bold text-gray-400 mb-1 ml-4 uppercase tracking-wider">Email body</span>
                <div className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-50 text-[13px] text-gray-700 font-medium">Write a personalized email to the</div>
                <div className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 text-[13px] text-gray-700 font-medium">lead, using the info you found</div>
                <div className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-50 text-[13px] text-gray-700 font-medium">about them.</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 px-2">Let AI do the work</h3>
            <p className="text-gray-500 text-sm px-2">Give custom instructions to your agent.</p>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* Cinematic Spring Bounce entry */
        @keyframes g1 {
          0%, 5% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          12% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          15%, 85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          95%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes g2 {
          0%, 45% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          52% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          55%, 85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          95%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Subtle continuous floating for icons */
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .animate-cinematic-1 {
          animation: g1 8s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-cinematic-2 {
          animation: g2 8s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-icon-bounce {
          animation: iconBounce 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;