import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {

  return (
    <section className="app">
      <TwitterFollowCard userName="juancaceres963">
          Juan Caceres
      </TwitterFollowCard>
      <TwitterFollowCard userName="danielcaceres963">
          Daniel Caceres
        </TwitterFollowCard>
      <TwitterFollowCard userName="jorgecaceres9419">
          Jorge Caceres
      </TwitterFollowCard>
    </section>
  );
}
