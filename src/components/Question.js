import { Form,Button,Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react'


const Question = ({ question, options, onAnswer }) => {
    const [form] = useForm();
    const { Title } = Typography;
  return (
    <Form layout='vertical' form ={form}>
      <Title level = {2}>
                    {question}
                </Title>
      {options.map((option, index) => (
        <Button htmlType='submit' key={index} onClick={() => onAnswer(option)}>
          {option}
        </Button>
      ))}
      <Button htmlType='submit'>
        50/50
        </Button>
      <Button htmlType='submit'>
        ask for help
        </Button>
      
    </Form>
  );
};

export default Question;