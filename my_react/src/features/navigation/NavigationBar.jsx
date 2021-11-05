import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'

export default function NavigationBar({setFormOpen}) {
    return (
        <Menu inverted ficed='top'>
            <Container>
                <Menu.Item exact as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt='logo' style={{marginRight: 15}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'/>
                <Menu.Item  as={NavLink} to='/createEvent'>
                    <Button positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}