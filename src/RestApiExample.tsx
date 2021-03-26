import * as React from 'react';

class RestApiExample extends React.Component<{}, any> {

    token = 'INSERT YOUR OWN TAPLYTICS KEY HERE';

    constructor(props: any) {
        super(props);
        this.state = {buttonText: '', userId: 'bill'};
    }

    componentDidMount(): void {
        this.setUserId()
    }

    private userIdChanged(event: any) {
        this.setState({userId: event.target.value});
    }

    private setUserId() {
        const url = 'https://decision.taplytics.com/v1/bucketing?token=' + this.token + '&user_id=' + this.state.userId  + '&verbose=true';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    const experiment = data["ctaExperiment"];
                    Object.keys(experiment).forEach((key)  => {
                        if (experiment[key].callToActionCodeBlock) {
                            this.showTextBasedOnCtaType(experiment[key].callToAction)
                        }
                    });
                }
            );
    }

    private showTextBasedOnCtaType(ctaType: string): void {
        switch (ctaType) {
            case 'sign-up': this.setState({buttonText: 'Sign Up Now!'});  break;
            case 'offer-for-you': this.setState({buttonText: 'We made a special offer just for you!'}); break;
            case 'dont-miss-out': this.setState({buttonText: 'Don\'t miss out'}); break;
        }
    }

    private buttonClick() {
        // write code which sends some event to whatever your analytic software is
        // ga.send("UA-834875487548", {eventName: 'clicked_cta_with_sign_up'})
    }

    render() {
        return (
            <div>
                User ID <input onKeyUp={this.setUserId.bind(this)} type={"text"} value={this.state.userId} onChange={this.userIdChanged.bind(this)}/>

                <h1>REST API Example</h1>
                <p>There's a big promotion happening which you'll love!</p>
                <button className={`btn btn-primary`} onClick={ this.buttonClick }>{this.state.buttonText}</button>
            </div>
        );
    }


}


export default RestApiExample
