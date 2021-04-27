import React from 'react';

import {Row, Col, Typography} from 'antd';
import SpellCorrection from "../../components/SpellCorrection";
import DiacriticRestoration from "../../components/DiacriticRestoration";

const { Title } = Typography;

const DemoModelPage = () => {
    return (
        <div style={{padding: 50, textAlign: 'center'}}>
            <Title style={{marginBottom: 50}}> Chuẩn hoá dữ liệu văn bản mạng xã hội  </Title>
            <Row>
                <Col xl={11} md={24}>
                    <SpellCorrection/>
                </Col>
                <Col xl={2} md={24}>

                </Col>
                <Col xl={11} md={24}>
                    <DiacriticRestoration/>
                </Col>
            </Row>
        </div>
    )
}

export default DemoModelPage;
