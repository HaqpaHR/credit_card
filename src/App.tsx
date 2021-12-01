import React,{ChangeEvent,FormEvent} from "react";
import './App.scss';

type State = {
  cardNumber: string,
  expired: string,
  cvc: string,
  typeOfCard: string,
}

export class App extends React.Component<{}, State> {
  state = {
    cardNumber: '',
    expired: '',
    cvc: '',
    typeOfCard: '',
  }

  cardNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = new RegExp('^[0-9 ]*$')
      event.target.value = event.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();

      if (reg.test(event.target.value) ) {
        this.setState({
          cardNumber: event.target.value,
        })
      };

      if (this.state.cardNumber[0] === '4' && this.state.cardNumber[1] === '9') {
        this.setState(state => ({
          ...state,
          typeOfCard: 'https://logosklad.ru/photo/logos/290/1494134204.jpg#.YaY4hnOwdhg.link',
        }))
      }
      if (this.state.cardNumber[0] === '5' && this.state.cardNumber[1] === '1') {
        this.setState(state => ({
          ...state,
          typeOfCard: 'https://logosklad.ru/photo/logos/520/1468563734.jpg#.YaZb9vMkDIw.link',
        }))
      }

  };

    expiredHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

      function makeNumber(val = "") {
        return val.replace(/\D+/g, "");
      }

      function expirationDate(value: string) {
        const clearValue = makeNumber(value);
        let month = clearValue.slice(0, 2);
        if (Number(month) > 12) {
          month = String(12)
        }
        if(clearValue.length >= 3) {
          return `${month}/${clearValue.slice(2, 4)}`
        }
        return clearValue;
      }

      this.setState({
        expired: expirationDate(value),
      })
  };

  cvcHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const reg = new RegExp('^[0-9]*$');

    if(value.match(reg)) {
      this.setState({
        cvc: value,
      })
    }
  }

  clearHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({
      cardNumber: '',
      expired: '',
      cvc: '',
      typeOfCard: '',
    })
  }


  render() {
    return (
      <div className="container">
        <p>Pay with your credit card via PayPal Website Payments Pro.</p>
        <form
          className="input"
          onSubmit={this.clearHandler}
        >
          <label className="input__label" htmlFor='input-cardNumber'>
            Card Number:
          </label>
            <input
                className="input input__label--numCard"
                type='text'
                id="input-cardNumber"
                name="cardNumber"
                maxLength="19"
                placeholder="•••• •••• •••• ••••"
                value={this.state.cardNumber}
                onChange={this.cardNumberHandler}
            />

          { this.state.typeOfCard &&(
              <div className="image"><img src={`${this.state.typeOfCard}`} className="picture" /></div>
          )}
          <div className="input__bottom">
            <div className="input__bottom-container">
              <label className="input__label" htmlFor='input-expired'>
                Expiry (MM/YY):
              </label>
                <input
                    className="input input__label--expired"
                    type='string'
                    id="input-expired"
                    name="expired"
                    placeholder="MM/YY"
                    value={this.state.expired}
                    onChange={this.expiredHandler}
                />
            </div>
            <div className="input__bottom-container">
              <label className="input__label" htmlFor='input-cvc'>
                Card Code:
              </label>
                <input
                    className="input input__label--cvc"
                    type='string'
                    id="input-cvc"
                    name="cvc"
                    maxLength="3"
                    placeholder="CVC"
                    value={this.state.cvc}
                    onChange={this.cvcHandler}
                />
            </div>
          </div>
          <button
              className="button"
              type="submit"
          >
            Clear
          </button>
        </form>
      </div>
    )
  }
}
