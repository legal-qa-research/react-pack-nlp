import React, {useState} from 'react';
import {Button, Card, Input, Typography} from "antd";
import {DownCircleOutlined} from '@ant-design/icons';
import Axios from 'axios';
import {backendHost, diacriticRestorationEndpoint} from "../../constant/server.const";

const {TextArea} = Input;
const {Paragraph} = Typography;

const DiacriticRestoration = () => {

    const [input, setInput] = useState('');

    const [output, setOutput] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onSpellCorrection = () => {
        setIsLoading(true);
        Axios.post(`${backendHost}${diacriticRestorationEndpoint}`, {
            sentence: input
        }).then(
            data => {
                setOutput(data?.data?.correctSent);
                console.log(data)
            }
        ).catch(
            error => {
                console.log(error);
            }
        ).finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <Card title={<h1> Thêm dấu </h1>} style={{width: '100%', textAlign: 'center', padding: 30}}>
            <TextArea
                autoSize={{minRows: 3, maxRows: 10}}
                value={input}
                onChange={onChangeInput}
            />

            <Button style={{marginTop: 20, marginBottom: 20}} type={'primary'} onClick={onSpellCorrection}
                    loading={isLoading}>
                <DownCircleOutlined/> Thêm dấu
            </Button>
            <Paragraph>
                <Paragraph>
                    <pre>{output}</pre>
                </Paragraph>
            </Paragraph>

        </Card>
    )
}

export default DiacriticRestoration;
