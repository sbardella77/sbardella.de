import React, { Component } from 'react'
import Mailto from 'react-protected-mailto'

// import { Form, Col } from 'react-bootstrap'

class Contact extends Component {
  render () {
    return (
      // <Form>
      //   <Form.Row>
      //     <Form.Group as={Col} md='3' controlId='validationCustom01'>
      //       <Form.Control
      //         require
      //         type='text'
      //         placeholder='Your Name'
      //       />
      //     </Form.Group>
      //     <Form.Group as={Col} md='3' controlId='validationCustom01'>
      //       <Form.Control
      //         require
      //         type='email'
      //         placeholder='Your Name'
      //       />
      //     </Form.Group>
      //   </Form.Row>
      //   <Form.Row>
      //     <Form.Group as={Col} md='6' controlId='validationCustom01'>
      //       <Form.Control
      //         require
      //         type='text'
      //         placeholder='Your message'
      //       />
      //     </Form.Group>
      //   </Form.Row>
      //   <Form.Row>
      //     <Form.Group as={Col} md='6' controlId='validationCustom01'>
      //       <Form.Control
      //         require
      //         as='textarea'
      //         placeholder='Your message'
      //       />
      //     </Form.Group>
      //   </Form.Row>
      // </Form>
      <p>
        <Mailto
          email='patrizio.sbardella@gmail.com'
          href='obfuscated'
          headers={
            { subject: '' },
            { cc: '' }
          } />

      </p>

    )
  }
}

export default Contact
