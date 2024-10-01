import React from "react";
import Image from "next/image";
import Student from "./students";
import './globals.css'; 

function page() {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-100 w-100"
    style={{
      backgroundImage: "url('https://wallpaper.dog/large/10844664.png')",
    }}
    >
      <div >
      <br />
      <br />
      <h1 className="text-white text-center text-lg">
        Students Registration Cards
      </h1>
      <br />
      <br />
      <div className=" px-10  my-15  shadow-x4 font-thin grid grid-cols-2 gap-5 place-content-around h-200 ...">
        {/* first card */}

        <div className="bg-purple-700 border-double border-4 border-black  text-white first-line:..text-center text-1x2 text-xs font-thin p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <br />
          <br />
          <br />
          <br />
          <Student
            name="Anaya"
            age={20}
            rollno={"00042309"}
            Distancelearning={"No"}
            city={"karachi"}
            campus={"Main"}
            center={"Governor House Karachi"}
            Day={"Tuesday-2:00pm-05:00pm"}
          />
          <br />
        </div>
        <img 
          className="w-20 h-20 object-cover" 
          src="https://i.pinimg.com/736x/a3/24/fc/a324fc78b051a18ba0c4129d0bf04b72.jpg" 
          alt="Descriptive Alt Text" 
        />
        </div>
        </div>

        {/* second card */}
        
    <div className="bg-blue-500 border-double border-4 border-black text-white first-line:..text-center text-1x2 text-xs font-thin p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <br />
          <br />
          <br />
          <br />
          <Student
            name="Neha"
            age={18}
            rollno={"00062355"}
            Distancelearning={"No"}
            city={"Karachi"}
            campus={"Main"}
            center={"Governor House Karachi"}
            Day={"Monday-2:00pm-05:00pm"}
          />
          <br />
        </div>
        <img 
          className="w-20 h-20 object-cover" 
          src="https://watermark.lovepik.com/photo/20220316/large/lovepik-professional-business-woman-office-likes-picture_502367524.jpg" 
          alt="Descriptive Alt Text" 
        />
      </div>
    </div>
  



        {/* third card
         */}

        
        <div className="bg-orange-500 border-double border-4 border-black text-white first-line:..text-center text-1x2 text-xs font-thin p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <br />
          <br />
          <br />
          <br />
          <Student
            name="Nida"
            age={17}
            rollno={"0001256"}
            Distancelearning={"No"}
            city={"karachi"}
            campus={"Main"}
            center={"Governor House Karachi"}
            Day={"Sunday-2:00pm-05:00pm"}
          />
        </div>
        <img 
          className="w-20 h-20 object-cover" 
          src="https://www.shutterstock.com/image-photo/asian-businesswoman-gets-stressed-while-260nw-2161792433.jpg" 
          alt="Descriptive Alt Text" 
        />
        </div>
        </div>

        {/* fourth*/}

        <div className="bg-pink-500 border-double border-4 border-black text-white first-line: ..text-center text-1x2 text-xs font-thin p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <br />
          <br />
          <br />
          <br />

          <Student
            name="Warisha"
            age={19}
            rollno={"0093487"}
            Distancelearning={"No"}
            city={"karachi"}
            campus={"Main"}
            center={"Governor House Karachi"}
            Day={"Friday-2:00pm-05:00pm"}
          />
          <br />
        </div>
        <img 
          className="w-20 h-20 object-cover" 
          src="https://thumbs.dreamstime.com/b/business-woman-working-laptop-computer-office-63543303.jpg" 
          alt="Descriptive Alt Text" 
        />
        </div>
        </div>
        <br />
        <br />
        
      </div>
    </div>
    </div>
  );
}

export default page;
