import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import '../App.css';
import {Container, Row, Col } from 'react-bootstrap';
import star from '../assets/star.svg';
import { getProduct, clearData } from '../reducers/productSlice';

class List extends Component {

    state={
        productData: [],
        loading: true,
        page: 0,
    }

    componentDidMount(){
        this.getData(this.state.page);
    }

    componentWillUnmount(){
        this.setState({
            page: 0,
        })
        this.props.clearData();
    }

    increasePage = () => {                         //function to increase the value of page number to call new data
        this.setState(prevState => ({
            page: prevState.page + 1
        }) , () => this.getData(this.state.page))
    }

    getData = (page) => {                           //function to call API 
        Axios.get(`https://gorest.co.in/public-api/products?page=${page}`)
        .then(response => {
            console.log("response from API--->", response);
            this.props.getProduct(response.data);
        })
        .catch(error => {
            console.log("error from API--->", error);
        })
    }

    getRandomArbitrary = (max, min) => {                    //function to generate random whole number
        return Math.ceil(Math.random() * (max - min) + min);
    } 
    
    pageRedirect = (item) => {
        console.log("item--->", item)
        localStorage.setItem('item', JSON.stringify(item));                    
        this.props.history.push('/product')
    } 

    render() {
        const { products } = this.props;

        if(products.loading === true){
            return null;
        }

        console.log("products--->", products)
        return (
            <div className="productList">
                <Container className="product-container">
                    <Row className="list-base">
                    {
                        products.data.map(item => {
                            return(
                                <Col className="product-base" xs={1} md={3} onClick={() => this.pageRedirect(item)}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="product-title">{item.name}</div>
                                    <div className="product-description">{item.description}</div>
                                    <div className="product-bottom">
                                        <div className="product-price">Rs. {item.price}</div>
                                        <div className="product-rating">
                                            <div className="rating-value">{this.getRandomArbitrary(5, 1)}</div>
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    </Row>
                    <div className="button-container">
                        <button className="more-button" onClick={this.increasePage}>LOAD MORE</button>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { products } = state;
    return { products };
};

const mapDispatchToProps = {
	getProduct, clearData
};

export default connect(mapStateToProps, mapDispatchToProps)(List);