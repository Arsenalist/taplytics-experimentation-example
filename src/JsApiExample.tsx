import * as React from 'react';

class JsApiExample extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = {buttonText: ''};
    }

    componentDidMount() {
        const w:any = window;
        const Taplytics = w.Taplytics;
        Taplytics.codeBlock('callToActionCodeBlock', () => {
            Taplytics.variable('callToAction', 'sign-up', this.showTextBasedOnCtaType.bind(this));
        });

    }

    showTextBasedOnCtaType(ctaType: string): void {
        switch (ctaType) {
            case 'sign-up': this.setState({buttonText: 'Sign Up Now!'});  break;
            case 'offer-for-you': this.setState({buttonText: 'We made a special offer just for you!'}); break;
            case 'dont-miss-out': this.setState({buttonText: 'Don\'t miss out'}); break;
        }
    }

    buttonClick() {
        const w:any = window;
        w.Taplytics.track('cta_clicked');
        alert("worked")
    }

    render() {
        return (
            <div>
                <h1>JS API Example</h1>
                <p>There's a big promotion happening which you'll love!</p>
                <button className={`btn btn-primary`} onClick={ this.buttonClick }>{this.state.buttonText}</button>
            </div>
        );

    }
}

export default JsApiExample;
