import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8
       max-w-6xl mx-auto "
      >
        <div>
          <h2 className="font-bold text-[18px] mb-6 text-white">About</h2>
          <p className="font-semibold text-[14px] tracking-widest">
            Music School is a prmier institution dedicated to teaching the art
            and science of music. We nature talent from the ground up, fostering
            a vibrant community of musicians
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[18px] mb-6 text-white">Quick Links</h2>
          <ul>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">About</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Courses</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[18px] mb-6 text-white">Follow Us</h2>
          <ul>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Facebook</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Twitter</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[18px] mb-6 text-white">Contact Us</h2>
          <ul>
            <li className="font-semibold text-[14px] mb-2">
              Karachi, Pakistan
            </li>
            <li className="font-semibold text-[14px] mb-2">Karachi 200000</li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Email:faisaljawed2000@gmail.com</a>
            </li>
            <li className="font-semibold text-[14px] mb-2">
              <a href="#">Phone:(+92) 342 827 3803</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Music School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
