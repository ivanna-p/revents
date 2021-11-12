import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

export default function NavigationBar({ setFormOpen }) {
    const {authenticated} = useSelector(state => state.auth);


    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item exact as={NavLink} to='/' header>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{ marginRight: 15 }}
                    />
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu />
                ) : (
                    <SignedOutMenu />
                )}
            </Container>
        </Menu>
    );
}
