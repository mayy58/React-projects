import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="may"
        name="Mayra"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={false}
        userName="manu"
        name="Manuel"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="midudev"
        name="midudev"
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="pheralb"
        name="Pher"
      />
    </section>
  );
}
