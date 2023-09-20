import './App.css';
import SearchBar from './components/searchBar';
import NewsItem from './components/newsItem';

function App() {
  return (
    <div className="App">
      <div class="main">
        <p class="main-title">Uplifted Echoes</p>
        <p class="main-subtitle">Your Daily Dose of Serotonin</p>
        <SearchBar />
      </div>
      <div class="news-container">
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
}

export default App;
