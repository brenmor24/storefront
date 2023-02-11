import styled from 'styled-components';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';
import Select from './Select';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 7;
`;

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 2px;
    z-index: 7;
`;

const Modal = ({ isOpen, toggleModal, gallery, toggleItem, added, id }) => {
    if (!isOpen) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <Overlay onClick={() => toggleModal(false)} />
            <Container>
                <Carousel gallery={gallery} toggleModal={toggleModal} />
                <Select toggleItem={toggleItem} toggleModal={toggleModal} added={added} id={id}></Select>
            </Container>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;
