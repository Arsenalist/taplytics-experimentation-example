import React from 'react';
import './App.css';
import RestApiExample from './RestApiExample'

function App() {
    const Taplytics = window.Taplytics;

    let buttonText = 'Experiment is Off';

    function showTextBasedOnCtaType(ctaType) {
        switch (ctaType) {
            case 'sign-up': buttonText = 'Sign Up Now!'; break;
            case 'offer-for-you': buttonText = 'We made a special offer just for you!'; break;
            case 'dont-miss-out': buttonText = 'Don\'t miss out'; break;
        }
    }

    Taplytics.codeBlock('callToActionCodeBlock', function() {
        Taplytics.variable('callToAction', 'sign-up', showTextBasedOnCtaType);
    });

    function buttonClick() {
        Taplytics.track('cta_clicked');
    }

    return (
      <div>
          <h1>JS Script Example</h1>
          <p>There's a big promotion happening which you'll love!</p>
        <button className={`btn btn-primary`} onClick={ buttonClick }>{buttonText}</button>
          <hr/>
          <RestApiExample/>
      </div>
  );
}

export default App;
