import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <div className="text-center">
        <Navbar />
        <p className="fw-bold fs-4">My Experience</p>
        <div className="card-group d-flex m-5">
          <div className="card bg-warning">
            <img src="/o.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Music</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card bg-info">
            <img src="/po.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Video Editor</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card bg-warning">
            <img src="/FTC.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">FTC Thailand</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
