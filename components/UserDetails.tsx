import { User } from "@/types/main";
import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDetails = ({ name, email, phone, website, company }: User) => {
  return (
    <div className="rounded-md shadow-lg p-6 w-full grid grid-cols-12 divide-y-[1px] divide-black">
      <div className="col-span-12 flex items-center justify-between mb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-4xl font-bold">{name}</h2>

          {/* Sensitive Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-3 text-black" />
              <p className="text-black">{email}</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-3 text-black" />
              <p className="text-black">{phone}</p>
            </div>
          </div>
        </div>

        <button className="bg-crayola-blue text-white px-6 py-2 rounded-md shadow-lg hover:scale-[105%] transition-all hover:shadow-xl">
          Reveal Details
        </button>
      </div>

      {/* Non-sensitive Info */}
      <div className="flex flex-col col-span-2 pt-3">
        <p className="text-gray-400 text-sm">Website</p>
        <p className="text-black text-lg">{website}</p>
      </div>

      <div className="flex flex-col pt-3 col-span-2">
        <p className="text-gray-400 text-sm">Company Name</p>
        <p className="text-black text-lg">{company.name}</p>
      </div>

      <div className="flex flex-col pt-3 col-span-4">
        <p className="text-gray-400 text-sm">Company Catchphrase</p>
        <p className="text-black text-lg">{company.catchPhrase}</p>
      </div>

      <div className="flex flex-col pt-3 col-span-4">
        <p className="text-gray-400 text-sm">Company BS</p>
        <p className="text-black text-lg">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserDetails;
