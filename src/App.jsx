import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "juancaceres963",
    name: 'Juan Caceres',
    isFollowing: true
  },
  {
    userName: "danielcaceres963",
    name: 'Daniel Caceres',
    isFollowing: false
  },
  {
    userName: "jorgecaceres9419",
    name: 'Jorge Caceres',
    isFollowing: true
  }
]

export function App() {

  return (
    <section className="app">
      {
        users.map(user => {
          const { userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
            key={userName} 
            userName={userName} 
            initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}
