import React from 'react';

import {Row, Col} from 'antd';
import SpellCorrection from "../../components/SpellCorrection";
import DiacriticRestoration from "../../components/DiacriticRestoration";

const DemoModelPage = () => {
    return (
        <div style={{padding: 50}}>
            <Row>
                <Col span={11}>
                    <SpellCorrection/>
                </Col>
                <Col span={2}/>
                <Col span={11}>
                    <DiacriticRestoration/>
                </Col>
            </Row>
        </div>
    )
}

export default DemoModelPage;
