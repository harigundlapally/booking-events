import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
    /**
     * @function
     * @desc handle modal close
    */
     const closeModal = () => {
        props.onClose();
    }

    /**
     * @function
     * @desc handle modal success
    */
    const successHandler = () => {
        props.onSuccess();
    }

    return (
        <section className={`modal ${props.cssClass ? props.cssClass : ''}`}>
            <div className="modal__dialog">
                <div className="modal__content">
                    <div className="modal__header">
                        <h5 className="title">
                            {props.title}
                            <span className="close" onClick={closeModal}>
                                <img src="/images/plus.svg" alt="plus icon" />    
                            </span>    
                        </h5>
                    </div>
                    <div className="modal__body">
                        {props.children}
                    </div>
                    <div className="modal__footer">
                        <button type="button" className="btn btn--orange" onClick={successHandler}>{props.btn1Text}</button>
                        <button type="button" className="btn btn--orange-whitebg" onClick={closeModal}>{props.btn2Text}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func, 
    onSuccess: PropTypes.func, 
    cssClass: PropTypes.string, 
    title: PropTypes.string, 
    btn1Text: PropTypes.string,
    btn2Text: PropTypes.string,
    children: PropTypes.node
};