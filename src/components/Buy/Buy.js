import React from 'react';
import Style from './buy.module.scss';
import Counter from '../../styledComponents/counterInput';
import { getStockData } from "../../data";
import { NavLink } from "react-router-dom";
import Price from "../../styledComponents/Price";

class Buy extends React.Component {
    state = {
        price: 0,
        amount: 1,
    }
    componentDidMount() {
        getStockData(this.props.code)
            .then(result => { this.setState({ price: result.profile.price }) })
    }

    // 'add' and 'sub' allow us to choose the amount of purchasing stocks 
    add = () => {
        if (this.state.amount < 20)
            this.setState({ amount: this.state.amount + 1 });
    }
    sub = () => {
        if (this.state.amount > 1)
            this.setState({ amount: this.state.amount - 1 });
    }

    render() {
        const { price, amount } = this.state;
        const counter = { add: this.add, sub: this.sub, value: amount };
        const purchasePrice = price * amount;
        const stock = { code: this.props.code, amount, purchasePrice }
        return <div className={Style.buyContainer}>
            <div className={Style.price}><Price price={price} /></div>
            <Counter {...counter} />
            <div className={Style.amount}>
                Buy for &nbsp; <Price price={purchasePrice.toFixed(2)} />
            </div>
            <NavLink to="/stock">
                <button onClick={() => this.props.onClick(stock)} className={Style.buy}>Buy</button>
            </NavLink>
        </div>
    }
}

export default Buy;