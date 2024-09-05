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
                <form name="contactForm" id='contact_form' class="form-border" method="post" action='blank.php'>
                    <div class="row">
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Name:</label>
                            <input type='text' name='name' id='name' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Email Address:</label>
                            <input type='text' name='email' id='email' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Choose a Username:</label>
                            <input type='text' name='username' id='username' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Phone:</label>
                            <input type='text' name='phone' id='phone' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Password:</label>
                            <input type='text' name='password' id='password' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="field-set">
                            <label>Re-enter Password:</label>
                            <input type='text' name='re-password' id='re-password' class="form-control"/>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div id='submit' class="pull-left">
                            <input type='submit' id='send_message' value='Register Now' class="btn-main color-2"/>
                        </div>
                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                        <div class="clearfix"></div>
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