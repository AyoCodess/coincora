import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Capture() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }

  return (
    <>
      <div>CAPTURE FORM</div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_FORM}
        onChange={onChange}
      />
    </>
  );
}
export default Capture;
