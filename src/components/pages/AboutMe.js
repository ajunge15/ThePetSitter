import "./../../styles.css";
import Carousel from "./Carousel";
import "./../../styles.css";

export default function AboutMe({ slides }) {
  return (
    <>
      <br></br>
      <h1>Amelia Junge</h1>
      <br></br>
      <p>
        <h3>Hi there! In case you don't already know me...</h3> <br></br>I have
        always had a love for animals ever since I was a girl.<br></br> I almost
        decided to be a vet until I stumbled on software development in college.{" "}
        <br></br>I like to spend most of my time outdoors or playing games. My
        hobbies include:
        <br></br>
        <br></br>
        <ul style={{ textAlign: "center" }}>
          <li>Hiking</li>
          <li>Indoor/outdoor soccer</li>
          <li>PS5</li>
          <li>Yoga</li>
          <li>Biking</li>
          <li>Skiing</li>
          <li>Baking</li>
          <li>Reading/Audiobooks</li>
        </ul>
      </p>
      <div className="AboutMe">
        <br></br>
        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>Here's a couple pictures of me!</h3>
        <Carousel data={slides} />
      </div>
    </>
  );
}