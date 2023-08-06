import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-5">
      <div>
        <h2>You can contact us directly at:</h2>
        <p>contact_next@user.com</p>
        <p>
          Or you write us via the connect from. We answer as quick as possible
        </p>
        <ul className="flex gap-3">
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <form action="">
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea type="text" placeholder="Massage" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
