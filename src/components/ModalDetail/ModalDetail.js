import React, { useState } from "react";
import Modal from "react-modal";
import css from "./modalDetail.module.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export default function ModalDetail({ openModal, closeModal, selectedTransaction }) {

    var subtitle;
    const [transactiont, setTransaction] = useState(selectedTransaction);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    return (
        <div className={css.container}>
            <Modal
                isOpen={openModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Transaction Details"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Transaction</h2>
                <div className="row">
                    <form className="col s12">

                        <div className="row">
                            <div className="input-field col s6">
                                <label>
                                    <input name="typeRadio" type="radio" value="-" />
                                    <span>Debit</span>
                                </label>
                            </div>
                            <div className="input-field col s6">
                                <label>
                                    <input name="typeRadio" type="radio" value="+" />
                                    <span>Credit</span>
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" placeholder="Description" value={transactiont.description} onChange={(env) => setTransaction(env.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" placeholder="Category" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input type="number" placeholder="Value" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" placeholder="Data" />
                            </div>
                        </div>

                        <button className="btn waves-effect waves-light red" onClick={closeModal}>Cancel</button>

                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>

            </Modal>
        </div>
    )
}
