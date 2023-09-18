import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset_password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred.');
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Password Reset</h1>
              <form onSubmit={handleResetPassword}>
                <div className="form-group">
                  <label>Email: </label>
                    <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                 
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: 'blue', color: 'white' }}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              {message && (
                <p className="mt-3 text-center" style={{ color: 'black' }}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
