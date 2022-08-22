import React from 'react';
import ReactDOM from 'react-dom/client';

function ListSelectionHeader() {
  return (
    <>
      <h1>List selection form</h1>
      <p>Select one list from below:</p>
    </>
  );
}

function ListSelectionItem(props) {
  const onItemOpenClick = () => {
    root.render(<TasksForm id={props.id}/>)
  }

  const onItemDeleteClick = () => {
    alert('Item delete clicked!');
  }

  const tableStyle =  {
    border: "1px solid white",
    borderCollapse: "collapse",
    width: "30%"
  };

  const tdTextStyle = {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
    width: "70%"
  }

  const tdButtonStyle = {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
    width: "15%"
  }
  return (
    <>
      <table style={tableStyle}>
        <td style={tdTextStyle}><p>{props.text}</p></td>
        <td style={tdButtonStyle}><button onClick={onItemOpenClick}>Open</button></td>
        <td style={tdButtonStyle}><button onClick={onItemDeleteClick}>Delete</button></td>
      </table>
    </>
  );
}

function ListSelectionFooter() {
  return (
    <>
      <h2>That's all, folks!</h2>
    </>
  );
}

function ListSelectionForm() {
  let items = [];
  for (let i=0; i<5; i++) {
    items.push("List " + (i+1));
  }

  return (
    <>
      <ListSelectionHeader />
      {items.map((item) => <ListSelectionItem text={item} id={item} />)}
      <ListSelectionFooter />
    </>
  );
}

function TasksHeader(props) {
  return (
    <>
      <h1>Tasks form</h1>
      <p>What do to next?</p>
      <p>Task list id: {props.id}</p>
    </>
  );
}

function TasksItem(props) {
  const onTaskEditClick = () => {
    alert('Item edit clicked!');
  }

  const onTaskDeleteClick = () => {
    alert('Item delete clicked!');
  }

  const onTaskUpClick = () => {
    alert('Item up clicked!');
  }

  const onTaskDownClick = () => {
    alert('Item down clicked!');
  }

  const tableStyle =  {
    border: "1px solid white",
    borderCollapse: "collapse",
    width: "30%"
  };

  const tdTextStyle = {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
    width: "70%"
  }

  const tdButtonStyle = {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
    width: "15%"
  }
  return (
    <>
      <table style={tableStyle}>
        <td style={tdTextStyle}><p>{props.text}</p></td>
        <td style={tdButtonStyle}><button onClick={onTaskEditClick}>Edit</button></td>
        <td style={tdButtonStyle}><button onClick={onTaskDeleteClick}>Delete</button></td>
        <td style={tdButtonStyle}><button onClick={onTaskUpClick}>Up</button></td>
        <td style={tdButtonStyle}><button onClick={onTaskDownClick}>Down</button></td>
      </table>
    </>
  );
}

function TasksFooter() {
  return (
    <>
      <h2>That's all, folks!</h2>
    </>
  );
}

function TasksForm(props) {
  let items = [];
  for (let i=0; i<5; i++) {
    items.push("Task " + (i+1));
  }

  return (
    <>
      <TasksHeader id={props.id} />
      {items.map((item) => <TasksItem text={item} />)}
      <TasksFooter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListSelectionForm />);
