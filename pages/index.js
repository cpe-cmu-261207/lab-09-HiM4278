import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text rounded-3 d-flex justify-content-center gap-4">
        <img
          src="/ver.jpg"
          className="rounded-circle"
          style={{ object: "cover", width: "300px" }}
        />
        <p>
          <span className="fw-bold fs-4">Pasakorn Sintao</span>
          <br />
          <br />
          <span className="fw-light">
            {" "}
            Hi. My name is Pasakorn.I graduated from Saraburiwitthayakhom.{" "}
          </span>
          <br />
          <span className="fw-light">
            I'm interested in computer programming.
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="/c.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">C++ </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/java-1.jpeg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Java </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/drum_.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Drum </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <br />
      <p className="fw-light text-center">&copy; 2022 Pasakorn.auttoz</p>
    </div>
  );
}
