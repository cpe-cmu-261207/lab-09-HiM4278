import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconMan,
  IconRecordMail,
} from "@tabler/icons";
import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <p className="fw-bold fs-4 text-center">Contact</p>

      <div className="d-flex justify-content-center gap-3">
        <img
          src="/My.jpg"
          className="rounded-circle"
          style={{ object: "cover" }}
        />
        <p>
          <br /> <br />
          <strong>
            <IconMan /> Name :
          </strong>
          <span> Pasakorn Sintao</span> <br /> <br />
          <strong>
            <IconMan /> NickName :
          </strong>
          <span> Auto</span> <br /> <br />
          <strong>
            <IconBrandFacebook /> Facebook :{" "}
          </strong>{" "}
          <a
            href="https://www.facebook.com/nattaphong.makmee.3/"
            rel="noreferrer"
            target="_blank"
          >
            Pasakorn Sintao
          </a>{" "}
          <br /> <br />
          <strong>
            <IconRecordMail /> Email :{" "}
          </strong>{" "}
          <a
            href="https://outlook.office365.com/"
            rel="noreferrer"
            target="_blank"
          >
            pasakorn_sintao@cmu.ac.th
          </a>{" "}
          <br /> <br />
        </p>
      </div>
      <br />
      <p className="fw-light text-center">&copy; 2022 Pasakorn.auttoz</p>
    </div>
  );
}
