import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import '../style/header.css';
// import Button from '@material-ui/core/Button';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UNHeader extends Component { 

    render() {
        return (
            <div>
                <Row className="headerSection" vertical='center' wrap style={{paddingBottom: '10px'}}>
                    <Column flexBasis='0%' style={{paddingTop: '15px', paddingBottom: '15px', paddingLeft: '15px'}}><img alt='un_logo' src='../static/un_logo.png' width="175" height="auto"/></Column>
                    <Column horizontal='center' flexGrow={1} className="mainTitle">{this.props.title}</Column>
                    <Column>
                        {this.props.link != '' ? <Link style={{ textDecoration: 'none' }} to={this.props.link}><button className='navBtn'>{this.props.linkTitle}</button></Link> : <div style={{width: '150px'}}></div>}
                    </Column>
                </Row>
            </div>
        );
    }
}

export default UNHeader;
