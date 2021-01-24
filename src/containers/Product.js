import React, { Component } from 'react';
import '../App.css';
import {Container, Row, Col } from 'react-bootstrap';

export default class Product extends Component {

    state={
        product: [],
    }

    componentDidMount(){
        const product = JSON.parse(localStorage.getItem('item'));
        this.setState({product})
    }

    render() {
        const { product } = this.state;
        return (
            <div className="productList">
                <Container className="product-container">
                    <Row className="list-base">
                        <Col className="product_base" xs={12} md={7} >
                            <img src={product.image} alt={product.name} />
                            <div className="product_title">{product.name}</div>
                            <div className="product_description">{product.description}</div>
                            <div className="product-bottom">
                                <div className="product_price">Rs. {product.price}</div>
                            </div>
                            <div className="product_Categories">Categories</div>
                            <ul>
                                {
                                    product.categories && product.categories.map(item => {
                                        return(
                                            <li className="item_category">
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
