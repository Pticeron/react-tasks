// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Painting from './components/Painting'
// import paintings from './paintings.json';

import TodoList from './components/TodoList';
import { Component } from 'react';

// export default function App() {
//     return <div>
//     <Painting
//         url={paintings[0].url}
//         title={paintings[0].title} 
//         author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity} 
//         />
//     <Painting
//         url={paintings[1].url}
//         title={paintings[1].title} 
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity} 
//         />
//         <Painting
//         url={paintings[2].url}
//         title={paintings[2].title} 
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity} 
//         />
//     </div>;
// }
export default class App extends Component {
    state = {
        todos: [{id: 'id-1', text: 'Вивчити основи React', completed: false },
        {id: 'id-2', text: 'Розібратись з React Router', completed: false },
        {id: 'id-3', text: 'Пережити Redux', completed: false },
        ],
    };

    deleteTodo = (todoId) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        } ))
    }

    render() {
        const { todos } = this.state;
        return (
            <>
            <h1>Стан компонента</h1>
    
            <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </> 
        );
    }
}



