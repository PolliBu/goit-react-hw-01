import userData from "../data/userData.json";
import friends from "../data/friends.json";
import { Profile } from "../components/Profile/Profile";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};


