import React, { useState } from "react";
import { Button, Card, DatePicker, Form, Input } from "antd";

function TaskForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [mobile, setMobile] = useState();

  const handleActionChange = (event, id) => {
    if (id === "fullname") {
      setName(event.target.value);
    } else if (id === "email") {
      setEmail(event.target.value);
    } else if (id === "dob") {
      setDob(event.target.value);
    } else if (id === "mobilenumber") {
      setMobile(event.target.value);
    }
  };
  const handleSubmit = () => {
    alert("Sucess");
  };
  return (
    <div>
      <Card
        title="Admission Form"
        style={{ borderColor: "black", backgroundColor: "gray" }}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="fullName"
            label="Name"
            rules={[
              {
                required: true,
                message: "please enter your name",
              },
            ]}
          >
            <Input
              placeholder="Enter Your Fullname"
              onChange={(event) => handleActionChange(event, "name")}
            ></Input>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "please enter a valid mail",
              },
            ]}
          >
            <Input
              placeholder="Enter your Email"
              onChange={(event) => handleActionChange(event, "email")}
            ></Input>
          </Form.Item>
          <Form.Item
            name="dob"
            label="DOB"
            rules={[
              {
                required: true,
                type: "date",
                message: "please enter a valid date",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Date Of Birth"
              onChange={(event) => handleActionChange(event, "dob")}
            ></DatePicker>
          </Form.Item>

          <Form.Item
            name="mobilenumber"
            label="Mobile"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/),
                message: "please enter a valid number",
              },
            ]}
          >
            <Input
              placeholder="Please enter your number"
              onChange={(event) => handleActionChange(event, "mobilenumber")}
            ></Input>
          </Form.Item>

          <Form.Item style={{ marginLeft: 200 }}>
            <Button htmlType="submit" type="primary" onClick={handleSubmit}>
              submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default TaskForm;
