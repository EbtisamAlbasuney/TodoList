import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViewTaskPopup = ({modal, toggle,  taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

   

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>View Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <p>Task Name:{taskObj.Name}</p>
                    </div>
                    <div className = "form-group">
                        <p>Desc :{taskObj.Description}</p>
                        
                    </div>
                
            </ModalBody>
            <ModalFooter>
           
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default ViewTaskPopup;