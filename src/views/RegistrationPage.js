import React from 'react';
import InputField from "../components/beansApp/InputField";
import Button from "../components/beansApp/Button";
import '../beansApp.css'

const RegistrationPage = () => {
    return (
        <div className="container">
            <div className="registration_page">
                <img className="top_circle" src="../assets/background_circle.svg" alt="half_circle_background"/>
                <InputField label="Username" fieldType="text" placeholder="Enter your username"/>
                <InputField label="First Name" fieldType="text" placeholder="Enter your First Name"/>
                <InputField label="Last Name" fieldType="text" placeholder="Enter your Last Name"/>
                <InputField label="Password" fieldType="password" placeholder="Enter your Password"/>
                <Button className="registration_btn" buttonName="Register"/>
            </div>
        </div>
    );
};

export default RegistrationPage;