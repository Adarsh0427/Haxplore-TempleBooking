'use client'
import { UserButton } from "@clerk/nextjs";
import Container  from "../container";

const NavBar = () => {
    return (  
        <div>
           <Container>
            <UserButton afterSignOutUrl="/"/>
            </Container>
        </div>
    );
}
 
export default NavBar;
