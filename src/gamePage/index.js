import { Form, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';

const Question = ({ question, options, onAnswer }) => {
    const [form] = useForm();
    const { Title } = Typography;

    return (
        <div className='question_container'>
            <Form form={form}>
                <Title level={2} style={{textAlign:'center'}}>{question}</Title>
                <Row gutter={16} justify="center" style={{gap:'15px'}}>
                    {options.map((option, index) => (
                        <Col span={10} key={index}>
                            <Button  block onClick={() => onAnswer(option)} >
                                {option}
                            </Button>
                        </Col>
                    ))}
                </Row>
                
             
            </Form>
        </div>
    );
};

export default Question;
