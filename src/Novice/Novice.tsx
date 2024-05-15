import React from 'react';

const Novice = () => {
  return (
    <div>
      <header>
        <h1>News Portal</h1>
        {/* Add navigation links or other header content */}
      </header>
      <div className="container">
        <aside className="sidebar">
          <h2>Trending Topics</h2>
          {/* Add trending topic links */}
          <ul>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            {/* Add more topics */}
          </ul>
        </aside>
        <main className="content">
          <h2>Latest News</h2>
          {/* Add news articles */}
          <div className="news-article">
            <img src="news-image.jpg" alt="News" />
            <h3>News Title</h3>
            <p>News Description</p>
            <p>Published Date: January 1, 2024</p>
            {/* Add "Read More" button or link */}
          </div>
          {/* Add more news articles */}
        </main>
      </div>
      <footer>
        <p>&copy; 2024 News Portal. All rights reserved.</p>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default Novice;
