import { Form, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import './index.css'

const Question = ({ question, options, onAnswer}) => {
    const [form] = useForm();
    const { Title } = Typography;
    return (
            <Form form={form} className='question_container'>
                <Title level={1} style={{textAlign:'center', color:'black',
                background:'rgba(255,255,255,0.5)',maxHeight:'100px',justifySelf:'center',padding:'12px 24px'
   }}>{question}</Title>
                <Row gutter={16} justify="center" style={{gap:'10px'}}>
                    {options.map((option, index) => (
                        <Col span={10} key={index} style={{marginTop:'15px'}}>
                            <Button  block onClick={() => onAnswer(option)} style={{ backdropFilter: 'blur(10)',
    background: 'rgba(0,0,255,0.5)', color:'white'}}>
                                {option}
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Form>
        
    );
};

export default Question;
