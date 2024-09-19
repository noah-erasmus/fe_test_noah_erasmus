"use client";

import { User } from "@/types/main";
import React, { useEffect, useState } from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDetails = ({ name, email, phone, website, company, id }: User) => {
  const [detailsRevealed, setDetailsRevealed] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [userInput, setUserInput] = useState<number | undefined>(undefined);
  const [detailsLocked, setDetailsLocked] = useState(false);
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);

  useEffect(() => {
    // Generate two random two-digit numbers for the sum
    setNum1(Math.floor(Math.random() * 90 + 10));
    setNum2(Math.floor(Math.random() * 90 + 10));

    // Get total failed attempts from local storage
    const totalFailedAttempts = localStorage.getItem("totalFailedAttempts");
    if (totalFailedAttempts && parseInt(totalFailedAttempts) >= 2) {
      setDetailsLocked(true);
    }
  }, []);

  const handleReveal = () => {
    if (num1 === null || num2 === null) return;
    // Show input for user
    setShowInput(true);
    // Store correct answer in state
    setCorrectAnswer(num1 + num2);
  };

  const handleSubmit = () => {
    if (userInput === correctAnswer) {
      // Reveal details if the answer is correct
      setDetailsRevealed(true);
      setShowInput(false);
    } else {
      // Increment total failed attempts and store in local storage if incorrect
      let totalFailedAttempts = localStorage.getItem("totalFailedAttempts");
      totalFailedAttempts = totalFailedAttempts
        ? (parseInt(totalFailedAttempts) + 1).toString()
        : "1";

      localStorage.setItem("totalFailedAttempts", totalFailedAttempts);

      // Lock details if there are 2 or more failed attempts
      if (parseInt(totalFailedAttempts) >= 2) {
        setDetailsLocked(true);
      } else {
        // Generate new numbers if they haven't reached the limit yet
        const newNum1 = Math.floor(Math.random() * 90 + 10);
        const newNum2 = Math.floor(Math.random() * 90 + 10);
        setNum1(newNum1);
        setNum2(newNum2);
        setCorrectAnswer(newNum1 + newNum2);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(parseInt(e.target.value));
  };

  return (
    <div className="rounded-md bg-white shadow-lg p-6 w-full grid grid-cols-1 md:grid-cols-12 divide-y-[1px] divide-black">
      <div className="md:col-span-12 flex flex-col md:flex-row items-start lg:items-center justify-between mb-4 w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-4xl font-bold">{name}</h2>

          {/* Sensitive Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-3 text-black" />
              {!detailsRevealed ? (
                <p className={`text-black transition-all duration-300`}>
                  {email.split("@")[0]}
                  <span className="blur-sm unselectable pointer-events-none">
                    fakemail.com
                  </span>
                </p>
              ) : (
                <a
                  href={`mailto:${email}`}
                  className={`text-black ${
                    !detailsRevealed
                      ? "blur-sm unselectable pointer-events-none"
                      : "blur-none"
                  } transition-all duration-300`}
                >
                  {email}
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-3 text-black" />
              {!detailsRevealed ? (
                <p className={`text-black transition-all duration-300`}>
                  {phone.split("-")[0]}-{phone.split("-")[1]}
                  <span className="blur-sm unselectable pointer-events-none">
                    -fake-num
                  </span>
                </p>
              ) : (
                <a
                  href={`tel:${phone}`}
                  className={`text-black ${
                    !detailsRevealed
                      ? "blur-sm unselectable pointer-events-none"
                      : "blur-none"
                  } transition-all duration-300`}
                >
                  {phone}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-8 mt-2 md:mt-0">
          {detailsLocked && (
            <p className="text-red-400">
              Too many attempts!
              <br />
              Contact details locked!
            </p>
          )}

          {!detailsRevealed && showInput && (
            <div className="flex items-center gap-2 relative mb-2 md:mb-0 mt-8 md:mt-0 min-w-48">
              {!detailsLocked && (
                <p className="text-xs text-gray-400 absolute -top-4">
                  Solve to reveal
                </p>
              )}

              {!detailsLocked && (
                <>
                  <p className="text-black font-bold text-2xl">{`${num1} + ${num2} = `}</p>
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="userInput"
                    id="userInput"
                    value={userInput}
                    className="bg-off-white border-[2px] border-gray-300 rounded-md w-20 p-1 text-black font-bold text-xl"
                  />
                </>
              )}
            </div>
          )}

          {!detailsRevealed && !detailsLocked && (
            <button
              onClick={
                !detailsRevealed && showInput ? handleSubmit : handleReveal
              }
              className="bg-crayola-blue text-white px-6 py-2 w-full rounded-md shadow-lg hover:scale-[105%] transition-all hover:shadow-xl mt-4 md:mt-0"
            >
              {!detailsRevealed && showInput
                ? "Submit Answer"
                : "Reveal Details"}
            </button>
          )}
        </div>
      </div>

      {/* Non-sensitive Info */}
      <div className="flex flex-col md:col-span-2 pt-3">
        <p className="text-gray-400 text-sm">Website</p>
        <p className="text-black lg:text-lg">{website}</p>
      </div>

      <div className="flex flex-col pt-3 md:col-span-2">
        <p className="text-gray-400 text-sm">Company Name</p>
        <p className="text-black lg:text-lg">{company.name}</p>
      </div>

      <div className="flex flex-col pt-3 md:col-span-4">
        <p className="text-gray-400 text-sm">Company Catchphrase</p>
        <p className="text-black lg:text-lg">{company.catchPhrase}</p>
      </div>

      <div className="flex flex-col pt-3 md:col-span-4">
        <p className="text-gray-400 text-sm">Company BS</p>
        <p className="text-black lg:text-lg">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserDetails;
