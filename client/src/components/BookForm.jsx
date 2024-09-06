import React from 'react'
const BookForm = ({title, btn}) => {
return (
<>
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="scrollableModalLabel">{title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form name="contactForm" id='contact_form' class="form-border" method="post">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Name :</label>
                            <input type='text' name='name' id='name' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Contact Number :</label>
                            <input type='tel' maxLength={10} name='contact' id='contact' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="field-set">
                            <label>Address :</label>
                            <textarea rows={4} name='address' id='address' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>From :</label>
                            <input type='text' name='from' id='from' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>To :</label>
                            <input type='text' name='to' id='to' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Date :</label>
                            <input type='date' name='date' id='date' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Time :</label>
                            <input type='time' name='time' id='time' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div id='submit' class="pull-left">
                            <input type='submit' id='send_message' value='Register Now' class="btn-main color-2"/>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-main" data-bs-dismiss="modal">{btn}</button>
                {/* <button type="button" class="btn-main">{btn2}</button> */}
            </div>
        </div>
    </div>
</>
)
}
export default BookForm