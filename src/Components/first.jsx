import React, { useRef, useEffect, useState } from "react";
import Vector from "../Components/Images/Vector.png";
import zaiper from "../Components/Images/zaiper.png";
import n8n from "../Components/Images/n8n.png";
import make from "../Components/Images/make.png";
import hubspot from "../Components/Images/hubspot.png";
import sales from "../Components/Images/sales.png";
import airtable from "../Components/Images/airtable.png";
import calendly from "../Components/Images/calendly.png";
import slack from "../Components/Images/slack.png";
import googledrive from "../Components/Images/googledrive.png";
import googlesheet from "../Components/Images/googlesheet.png";
import gmail from "../Components/Images/gmail.png";
import "../index.css"; 

function First() {
  // State ko top level par define kiya hai taake niche use ho sakay
  const [selectedCategory, setSelectedCategory] = useState("Most Popular");

  const originalCategories = [
    "Retail", "Scheduling & Communication", "Telephony", 
    "Automation", "CRM", "Customer Support & CX", 
    "Data", "Marketing",
  ];

  const categories = [...originalCategories, ...originalCategories, ...originalCategories];
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft = container.scrollWidth / 3;
    }
  }, []);

  const handleInfiniteScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const sectionWidth = scrollWidth / 3;
    if (scrollLeft >= sectionWidth * 2) scrollRef.current.scrollLeft = scrollLeft - sectionWidth;
    else if (scrollLeft <= 0) scrollRef.current.scrollLeft = sectionWidth;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-start pt-20 pb-20 px-4">
      
      <div className="mb-4">
        <div className="w-18 h-16 flex items-center justify-center shadow-lg overflow-hidden border border-gray-100">
          <img 
            src={Vector}
            alt="Logo" 
            className="w-full h-full object-contain p-2 mix-blend-multiply" 
          />
        </div>
      </div>
      
      <h1 className="text-4xl font-semibold text-gray-900 mb-2">Integrations</h1>
      <p className="text-gray-500 text-center max-w-md mb-8">
        Build AI agents in seconds to automate workflows, save time, and grow your business.
      </p>

      {/* Search Box */}
      <div className="w-full max-w-md mb-10">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Here"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition-all"
          />
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-5xl flex items-center group mb-16">
        <button onClick={() => scroll('left')} className="absolute -left-4 z-20 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div ref={scrollRef} onScroll={handleInfiniteScroll} className="w-full overflow-x-auto scrollbar-hide flex gap-3 px-4 py-2 scroll-smooth">
          <div className="flex gap-4">
            {categories.map((item, index) => (
              <div key={index} className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold cursor-pointer transition-all border ${item === "Automation" ? "bg-blue-100 text-blue-700 border-blue-300" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 shadow-sm"}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scroll('right')} className="absolute -right-4 z-20 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Automation Section */}
      <div className="w-full max-w-5xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Automation</h2>
          <p className="text-gray-500 max-w-lg">
            Automate repetitive tasks and streamline workflows with pre-built integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-5 hover:shadow-md transition duration-300">
            <img src={zaiper} className="w-auto h-auto object-contain" alt="Zapier" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Zapier</h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-5 hover:shadow-md transition duration-300">
            <img src={n8n} className="w-auto h-auto object-contain" alt="n8n" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">n8n</h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-5 hover:shadow-md transition duration-300">
            <img src={make} className="w-auto h-auto object-contain" alt="Make" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Make</h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Sidebar & Content Container */}
      <div className="w-full max-w-6xl mt-20 px-4 flex flex-col md:flex-row gap-12 pb-10">
        
        {/* Left Side: Sidebar */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
          <div className="flex flex-col gap-1">
            {["Most Popular", "Personal Assistant", "Sales", "Marketing", "Customer Support"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)} 
                className={`text-left px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border group ${
                  selectedCategory === cat 
                  ? "bg-white text-blue-600 shadow-md border-gray-100" 
                  : "text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-800" 
                }`}
              >
                <span className={`${selectedCategory === cat ? "translate-x-1" : "group-hover:translate-x-1"} transition-transform inline-block`}>
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{selectedCategory}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Google Sheets", desc: "Integrate Google Sheets with your AI Workflows", img: googlesheet },
              { name: "Gmail", desc: "Integrate Gmail with your AI Workflows", img: gmail },
              { name: "Slack", desc: "Integrate Slack with your AI Workflows", img: slack },
              { name: "Google Drive", desc: "Integrate Google Drive with your AI Workflows", img: googledrive },
              { name: "HubSpot", desc: "Integrate HubSpot with your AI Workflows", img: hubspot },
              { name: "Calendly", desc: "Integrate Calendly with your AI Workflows", img: calendly },
              { name: "Airtable", desc: "Integrate Airtable with your AI Workflows", img: airtable },
              { name: "Salesforce", desc: "Integrate Salesforce with your AI Workflows", img: sales }
            ].map((app) => (
              <div key={app.name} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition cursor-pointer group">
                <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-xl p-2 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <img src={app.img} alt={app.name} className="w-full h-full object-contain" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors">{app.name}</h3>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-white border border-gray-100 shadow-sm rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
              See More
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default First;