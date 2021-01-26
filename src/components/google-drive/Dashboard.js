import React from 'react'
import { Container } from 'react-bootstrap'
import { AddFolderButton } from './AddFolderButton'
import { NavbarComponent } from './NavbarComponent'


export const Dashboard = () => {
    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <AddFolderButton />
            </Container>
        </>
    )
}
