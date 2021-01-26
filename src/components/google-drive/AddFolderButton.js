import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'

export const AddFolderButton = ({ currentFolder }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState("")
    const { currentUser } = useAuth()
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (currentUser == null) return
        database.folders.add({
            name: name,
            userId: currentUser.uid,
            parentId: currentFolder.id,
            createdAt: database.getCurrentTimestamp()
        })



        setName("")
        closeModal()
    }


    return (
        <>
            <Button variant="outline-success" size="sm"
                onClick={openModal}>
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>
            <Modal show={isOpen} onHide={closeModal} >
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal} >Close</Button>
                        <Button variant="success" type="submit"> Add Folder</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
