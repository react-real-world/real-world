import '../componentCss/userPost.css'

const UserPost = ({title, mainText}) => {
  return (
    <div>  
        <h2 className="user-Title">{title}</h2>
        <div className="user-MainText">{mainText}</div>
    </div>
   
  );
}

export default UserPost;