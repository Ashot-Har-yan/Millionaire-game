import { useState } from "react";
import { Form, Button, Input,Flex,notification } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase'
import { ROUTE_CONSTANTS } from "../../../util/constant";
import { Link } from "react-router-dom";
import AuthWrapper from "../../../component/sheard/AuthWrapper";


const Login = ({setIsAuth}) => {
    const [loading,setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleLogin = async values => {
    setLoading(true)

    try{
      
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        form.resetFields();
        setIsAuth(true)
    }catch(error){
        notification.error({
            message:'Invalid Login Credentials'
        })
    
}finally{
    setLoading(false)
 }
};

 return(
    <AuthWrapper title = "Login" >
         <Form layout="vertical" form = {form} onFinish = {handleLogin}>
               <Form.Item
                    label = "Email"
                    name = "email"
                    rules = {[
                        {
                            required:true,
                            message:"please input your email"
                        }
                    ]}
                    >
                        <Input type="email" placeholder="Email"/>
                </Form.Item>

                <Form.Item
                    label = "Password"
                    name = "password"
                    tooltip = "Must contain 4-16 characters.."
                    rules = {[
                        {
                            required:true,
                            message:"please input your password"
                        }
                    ]}
                    >
                        <Input.Password placeholder="Password"/>
                </Form.Item>
                <Flex align="flex-end" gap="10px" justify="space-between">
                <Button type = "primary" htmlType="submit" loading = {loading}>
                    Sign in
                </Button>
                
                <Link to = {ROUTE_CONSTANTS.REGISTER}>
                    Create Account
                    </Link>
                    </Flex>
            </Form>
            
            </AuthWrapper>
 )
}
export default Login;