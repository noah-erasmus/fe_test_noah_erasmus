import ContentWrap from "@/components/ContentWrap";
import { User } from "@/types/main";
import {
  faArrowLeft,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface DetailsPageProps {
  params: { userId: string };
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  // Extract the userId from the dynamic route
  const { userId } = params;

  // Fetch user details using the dynamic userId
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!userRes.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = await userRes.json();

  return (
    <div className="bg-white min-h-screen">
      <ContentWrap className="py-12">
        <div className="flex items-center gap-8">
          {/* Back button */}
          <Link
            href={"/"}
            className="w-14 h-14 p-3 flex items-center justify-center rounded-full hover:shadow-lg transition-all cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className=" text-black" />
          </Link>
        </div>

        {/* User Details */}
        <div className="rounded-md shadow-lg p-6 w-full grid grid-cols-12 divide-y-[1px] divide-black">
          <div className="col-span-12 flex items-center justify-between mb-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-4xl font-bold">{user.name}</h2>

              {/* Sensitive Contact Info */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-3 text-black"
                  />
                  <p className="text-black">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="h-3 text-black" />
                  <p className="text-black">{user.phone}</p>
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
            <p className="text-black text-lg">{user.website}</p>
          </div>

          <div className="flex flex-col pt-3 col-span-2">
            <p className="text-gray-400 text-sm">Company Name</p>
            <p className="text-black text-lg">{user.company.name}</p>
          </div>

          <div className="flex flex-col pt-3 col-span-4">
            <p className="text-gray-400 text-sm">Company Catchphrase</p>
            <p className="text-black text-lg">{user.company.catchPhrase}</p>
          </div>

          <div className="flex flex-col pt-3 col-span-4">
            <p className="text-gray-400 text-sm">Company BS</p>
            <p className="text-black text-lg">{user.company.bs}</p>
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default DetailsPage;
