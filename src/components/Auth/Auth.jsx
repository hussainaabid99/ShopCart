import React, { useEffect, useImperativeHandle, useState } from "react";

function Auth({ onSubmit }, ref) {

     const [formDetials, setFormDetails] = useState({ email: '', password: '', username: '', isLoading: false });

     function updateEmail(updatedEmail) {
          setFormDetails({ ...formDetials, email: updatedEmail });
     }

     function updatePassword(updatedPassword) {
          setFormDetails({ ...formDetials, password: updatedPassword });
     }

     function updateUsername(updatedUsername) {
          setFormDetails({ ...formDetials, username: updatedUsername });
     }

     function onFormSubmit() {
          setFormDetails({ ...formDetials, isLoading: true });
          onSubmit(formDetials, resetForm);
     }

     function resetForm() {
          setFormDetails({ email: '', password: '', username: '', isLoading: false });
     }


     useImperativeHandle(ref, () => {
          return {
               resetFormData: resetForm
          }
     }, [])

     useEffect(() => {
          setFormDetails({ email: '', password: '', username: '', isLoading: false });
     }, []);

     return (
          <>
               <div className="input-group">
                    <input type="text" onChange={(e) => updateUsername(e.target.value)} value={formDetials.username} className="form-control" placeholder="Username" id="loginUsername" />
               </div>
               <div className="input-group">
                    <input type="email" onChange={(e) => updateEmail(e.target.value)} value={formDetials.email} className="form-control" id="loginUserEmail" placeholder="Email" />
               </div>
               <div className="input-group">
                    <input type="password" onChange={(e) => updatePassword(e.target.value)} value={formDetials.password} className="form-control" placeholder="Password" id="loginPassword" />
               </div>
               <div className="input-group">
                    <button onClick={onFormSubmit} className="btn btn-primary form-control" type="button" disabled={formDetials.isLoading}>
                         {(formDetials.isLoading) && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                         {(formDetials.isLoading) ? 'Loading...' : 'Submit'}
                    </button>
               </div>
          </>
     )
}

export default React.forwardRef(Auth);