import OptionsVote from "./OptionsVote";
import "./voting.css";
import { AppProvider, useGlobalContext } from "./contex";
import { useEffect } from "react";
const Voting = (currentUser) => {
  const name: string = currentUser.currentUser[0].name;
  const vote: string = currentUser.currentUser[0].vote;
  console.log(vote);
  let message: string = "pending for vote";
  if (["cat", "dog", "cow", "lion"].includes(vote)) {
    message = `you have voted for ${vote}`;
  }

  return (
    <div className="voterInterface">
      <h1> welcome {name} to our voting system</h1>
      <h1>your voting status is:{message}</h1>
      <OptionsVote />
    </div>
  );
};

export default Voting;
