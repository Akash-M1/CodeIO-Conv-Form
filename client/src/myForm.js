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
        'cf-questions': `
<b>Role Summary:\n</b>
        <b>President</b>: Provide overall leadership and direction to the technical club, coordinating activities and fostering an inclusive environment.\n
        <b>Head of Development</b>: Lead software projects, mentor members in programming skills, and stay updated on the latest technologies.\n
        <b>Head of Competitive Coding</b>:Organize coding events, train members in problem-solving, and represent the club in coding competitions.\n
        <b>Head of Research and Development</b>: Promote a culture of research, encourage innovative projects, and collaborate with faculty and industry experts.\n
        <b>Secretary</b>: As the Secretary, you will be responsible for managing documentation and finances, ensuring the smooth administrative functioning of our technical club.\n`,
        'cf-label': '<b>President</b>',
        'value': 'President'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `
<b>Role Summary:\n</b>
        <b>President</b>: Provide overall leadership and direction to the technical club, coordinating activities and fostering an inclusive environment.\n
        <b>Head of Development</b>: Lead software projects, mentor members in programming skills, and stay updated on the latest technologies.\n
        <b>Head of Competitive Coding</b>:Organize coding events, train members in problem-solving, and represent the club in coding competitions.\n
        <b>Head of Research and Development</b>: Promote a culture of research, encourage innovative projects, and collaborate with faculty and industry experts.\n
        <b>Secretary</b>: As the Secretary, you will be responsible for managing documentation and finances, ensuring the smooth administrative functioning of our technical club.\n`,
        'cf-label': '<b>Head of Development</b>',
        'value': 'Development'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `
<b>Role Summary:\n</b>
        <b>President</b>: Provide overall leadership and direction to the technical club, coordinating activities and fostering an inclusive environment.\n
        <b>Head of Development</b>: Lead software projects, mentor members in programming skills, and stay updated on the latest technologies.\n
        <b>Head of Competitive Coding</b>:Organize coding events, train members in problem-solving, and represent the club in coding competitions.\n
        <b>Head of Research and Development</b>: Promote a culture of research, encourage innovative projects, and collaborate with faculty and industry experts.\n
        <b>Secretary</b>: As the Secretary, you will be responsible for managing documentation and finances, ensuring the smooth administrative functioning of our technical club.\n`,
        'cf-label': '<b>Head of Competitive Coding</b>',
        'value': 'CompetitiveCoding'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `
<b>Role Summary:\n</b>
        <b>President</b>: Provide overall leadership and direction to the technical club, coordinating activities and fostering an inclusive environment.\n
        <b>Head of Development</b>: Lead software projects, mentor members in programming skills, and stay updated on the latest technologies.\n
        <b>Head of Competitive Coding</b>:Organize coding events, train members in problem-solving, and represent the club in coding competitions.\n
        <b>Head of Research and Development</b>: Promote a culture of research, encourage innovative projects, and collaborate with faculty and industry experts.\n
        <b>Secretary</b>: As the Secretary, you will be responsible for managing documentation and finances, ensuring the smooth administrative functioning of our technical club.\n`,
        'cf-label': '<b>Head of Research and Development</b>',
        'value': 'RnD'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'roles',
        'cf-questions': `
<b>Role Summary:\n</b>
        <b>President</b>: Provide overall leadership and direction to the technical club, coordinating activities and fostering an inclusive environment.\n
        <b>Head of Development</b>: Lead software projects, mentor members in programming skills, and stay updated on the latest technologies.\n
        <b>Head of Competitive Coding</b>:Organize coding events, train members in problem-solving, and represent the club in coding competitions.\n
        <b>Head of Research and Development</b>: Promote a culture of research, encourage innovative projects, and collaborate with faculty and industry experts.\n
        <b>Secretary</b>: As the Secretary, you will be responsible for managing documentation and finances, ensuring the smooth administrative functioning of our technical club.\n`,
        'cf-label': '<b>Secretary</b>',
        'value': 'Secretary'
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
    const response = await fetch("https://api.codeio.club/register", {
      method: "POST", 
      //mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataSerialized),
    });
    const response1 = await response.json();
    console.log("Formdata, obj:", response1);
    this.cf.addRobotChatResponse(`You are done.\n
Check your mail for the confirmation and Join the WhatsApp group</a>`);
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