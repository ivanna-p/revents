import React from "react";
import { Image, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedInMenu({signOut}) {
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Ivana'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' icon='plus'/>
                    <Dropdown.Item text='My profile' icon='user'/>
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}
