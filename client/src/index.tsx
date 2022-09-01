import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function ListSelectionHeader() {
  return (
    <>
      <h1>List selection form</h1>
      <p>Select one list from below:</p>
    </>
  );
}

function ListSelectionItem(props: any) {
  const onItemOpenClick = () => {
    // This needs to go!
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

function useGetList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url: string = 'http://localhost:8000/api/lists/?timestamp=' + (Math.floor(Date.now() / 1000));
        const response = await fetch(url);
        const data = await response.json();
        const rv: any = [];
        for (let i=0; i<data.retrieve.length; ++i) {
          rv[i] = data.retrieve[i].name;
        }
        setItems(rv);
      }
      catch (error) {
        alert("Error: " + error);
      }
    };

    fetchItems();

  /*
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const rv: any = [];
        for (let i=0; i<data.retrieve.length; ++i) {
          rv[i] = data.retrieve[i].name;
        }
        setItems(rv);
      })
      .catch(error => alert("Error: " + error));
      */
  }, [items]);

  return items;
}

function ListSelectionForm() {
  const items = useGetList();

  return (
    <>
      <ListSelectionHeader />
      {items.map((item) => <ListSelectionItem text={item} id={item} />)}
      <ListSelectionFooter />
    </>
  );
}

function TasksHeader(props: any) {
  return (
    <>
      <h1>Tasks form</h1>
      <p>What do to next?</p>
      <p>Task list id: {props.id}</p>
    </>
  );
}

function TasksItem(props: any) {
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

function TasksForm(props: any) {
  let items: string[] = [];

  return (
    <>
      <TasksHeader id={props.id} />
      {items.map((item) => <TasksItem text={item} />)}
      <TasksFooter />
    </>
  );
}

// const root: any = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ListSelectionForm />);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<ListSelectionForm />);
