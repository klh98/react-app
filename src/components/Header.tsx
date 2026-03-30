import Button from "./Button";
import HeaderText from "./HeaderText";

interface HeaderProps{
    username : string;

}

const Header = ({username = "user"} : HeaderProps) => {
  return (
    <div>
        <h2>React App</h2>
        <h3>testing</h3>
        <h4>testing again</h4>
        <p>username - {username} </p>
        <HeaderText text="this is from Header component"></HeaderText>
        <Button></Button>
    </div>
   
  )
}

export default Header