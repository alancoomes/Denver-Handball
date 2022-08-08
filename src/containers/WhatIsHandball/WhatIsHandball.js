import YouTubeEmbed from "../../components/YouTubeEmbed/YouTubeEmbed";
import { render } from "react-dom";

const WhatIsHandball = () => {
  let something = "this";
  debugger;
  return (
    <>
      <h1>Huh? Whats Handball?${something}</h1>
      <p>
        Handball brings together a combination of soccer, basketball and
        waterpolo minus the water. The game is contested by two teams of seven
        players and involves one team invading another teams territory with the
        aim of throwing a ball into their opponents goal. The game is very fast,
        skilful and competitive and requires a range of physical attributes in
        defence and attack. Handball is very exciting for spectators and a
        typical game can generate scores of up to 35 goals each. /n
        <a href="https://www.bbc.co.uk/bitesize/guides/zp3ybk7/revision/1#:~:text=Handball%20brings%20together%20a%20combination,ball%20into%20their%20opponent's%20goal.">
          Citation
        </a>
      </p>
      <YouTubeEmbed embedId="69Ap8WsenXc"></YouTubeEmbed>
    </>
  );
};

// export default WhatIsHandball;
render(<WhatIsHandball />, document.getElementById("root"));
