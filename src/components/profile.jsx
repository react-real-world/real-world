import '../componentCss/profile.css'

const Profile = ({ name, date }) => {
  

  return (
    <div className="profile-info">
      <img className="profile-image" src={'./public_assets/demo-avatar.png'} alt="profile" />
        <div className="profile-nameDate">
          <p className="profile-name"><a href="">{name}</a></p>
          <p className="profile-date">{date.toISOString()}</p> 
        </div>
    </div>
  );
}

export default Profile;