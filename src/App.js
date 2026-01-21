
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookListComponent from './component/booklistComponent';
import BookDetails from './component/bookdetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/booklist" element={<BookListComponent />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
