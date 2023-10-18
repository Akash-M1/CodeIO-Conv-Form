import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `<b>Recruitment process:\n</b>
        <b>Technical</b> team: general workshop + technical workshop + interview\n
        <b>Design/Creative</b> team: general workshop (optional) + task + interview\n
        <b>Technical Aspirant</b> team: general workshop + interview\n
        
<b>Role Summary:\n</b>
        <b>Technical</b> team:I want to join the technical team, and I have technical skills.\n
        <b>Design/Creative</b> team:I want to join the design/creative team.\n
        <b>Technical Aspirant</b> team: I want to join the technical team eventually, but I do not have much technical skills currently <b>(ONLY FOR 1st and 3rd sem)</b>.\n`,
        'cf-label': '<b>Technical</b> team',
        'value': 'Technical'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `<b>Recruitment process:\n</b>
        <b>Technical</b> team: general workshop + technical workshop + interview\n
        <b>Design/Creative</b> team: general workshop (optional) + task + interview\n
        <b>Technical Aspirant</b> team: general workshop + interview\n
        
<b>Role Summary:\n</b>
        <b>Technical</b> team:I want to join the technical team, and I have technical skills.\n
        <b>Design/Creative</b> team:I want to join the design/creative team\n.
        <b>Technical Aspirant</b> team: I want to join the technical team eventually, but I do not have much technical skills currently <b>(ONLY FOR 1st and 3rd sem)</b>.\n`,
        'cf-label': "<b>Technical Aspirant</b>",
        'value': 'Technical Aspirantl'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `<b>Recruitment process:\n</b>
        <b>Technical</b> team: general workshop + technical workshop + interview\n
        <b>Design/Creative</b> team: general workshop (optional) + task + interview\n
        <b>Technical Aspirant</b> team: general workshop + interview\n
        
<b>Role Summary:\n</b>
        <b>Technical</b> team:I want to join the technical team, and I have technical skills.\n
        <b>Design/Creative</b> team:I want to join the design/creative team.\n
        <b>Technical Aspirant</b> team: I want to join the technical team eventually, but I do not have much technical skills currently <b>(ONLY FOR 1st and 3rd sem).</b>\n`,
        'cf-label': "<b>Design/Creative</b> team",
        'value': 'Design'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'firstname',
        'cf-questions': 'What is your <b>First Name?</b>',
        'cf-input-placeholder': 'Enter your First Name'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your <b>Last Name</b>?',
        'cf-input-placeholder': 'Enter your Last Name'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'usn',
        'cf-questions': 'What is your <b>USN</b>?',
        'cf-input-placeholder': 'Enter your USN'
      },
      {
        'tag': 'input',
        'type': 'number',
        'name': 'phone',
        'cf-questions': 'What is your <b>Phone Number</b>?',
        'cf-input-placeholder': 'Enter your Phone Number'
      },
      {
        'tag': 'input',
        'type': 'email',
        'name': 'email',
        'cf-questions': 'What is your <b>College Email</b>?',
        'cf-input-placeholder': 'Enter your college mail Id'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'purple',
        robotImage:"https://resumeandprojectsbucket.s3.amazonaws.com/CodeIO+Logo.png",
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        showProgressBar:true,
        loadExternalStyleSheet:true,
      },
      tags: this.formFields,
    });
    this.elem.appendChild(this.cf.el);
  }
  
  async submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    const response = await fetch("http://localhost:8855/register", {
      method: "POST", 
      //mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataSerialized),
    });
    const response1 = await response.json();
    console.log("Formdata, obj:", response1);
    this.cf.addRobotChatResponse("You are done. Check you mail for the whatsapp group link and Join!!.")
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}