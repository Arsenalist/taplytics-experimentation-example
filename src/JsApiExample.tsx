import * as React from 'react';

class JsApiExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {buttonText: ''}
    }

    componentDidMount() {
        const Taplytics = window.Taplytics;
        Taplytics.codeBlock('callToActionCodeBlock', function() {
            Taplytics.variable('callToAction', 'sign-up', this.showTextBasedOnCtaType);
        });

    }

    showTextBasedOnCtaType(ctaType) {
        switch (ctaType) {
            case 'sign-up': this.setState({buttonText: 'Sign Up Now!'});  break;
            case 'offer-for-you': this.setState({buttonText: 'We made a special offer just for you!'}); break;
            case 'dont-miss-out': this.setState({buttonText: 'Don\'t miss out'}) break;
        }
    }

    buttonClick() {
        const Taplytics = window.Taplytics;
        Taplytics.track('cta_clicked');
    }

    render() {
        return(
            <div></div>
        )

    }
}

export default JsApiExample;
