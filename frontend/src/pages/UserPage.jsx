import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <div>
      <UserHeader />
      <UserPost
        likes={"752k"}
        replies={"123k"}
        postImg="post1.png"
        postTitle="Let's talk about threads"
      />
      <UserPost
        likes={354}
        replies={481}
        postImg="post2.png"
        postTitle="Nice tutorial"
      />
      <UserPost
        likes={560}
        replies={301}
        postImg="post3.png"
        postTitle="I love this guy"
      />
      <UserPost likes={220} replies={110} postTitle="This is my first thread" />
    </div>
  );
};

export default UserPage;
