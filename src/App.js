import './App.css';
import SearchBar from './components/searchBar';
import NewsItem from './components/newsItem';

function App() {
  return (
    <div className="App">
        <p className="main-title">Uplifted Echoes</p>
        <p className="main-subtitle">Your Daily Dose of Serotonin</p>
        <SearchBar />
      <div className="news-container">
        <div className="news-group">
          <NewsItem />
          <NewsItem />
        </div>
        <div className='news-group'>
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
}

export default App;
