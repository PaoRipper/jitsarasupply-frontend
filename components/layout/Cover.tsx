import Link from "next/link";
import React from "react";

const Cover = () => {
  return (
    <div className="container">
      <div className="cover-text">
        <h6 className="mb-4">Jitsara Supply & Service</h6>
        <h2 className="mb-5">
          กิจการและธุรกิจ <br /> ต่างๆที่เราให้บริการ
        </h2>
        <p>
          ธุรกิจและกิจการต่างๆที่อยู่ในเกณฑ์การพิจารณาของเรา <br />
          เราให้บริการสินเชื่อเพื่อเสริมสภาพคล่องทางธุรกิจและ <br />
          กิจการของท่านให้แข็งแรง และเฟื่องฟูไปได้ในอนาคต
        </p>
        <Link href="/contact" className="btn btn-warning btn-contact-cover text-dark rounded">สนใจติดต่อ</Link>
      </div>
    </div>
  );
};

export default Cover;
