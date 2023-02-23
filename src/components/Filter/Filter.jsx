import "./Filter.css";

const Filter = ({ handleCategoryFilter, searchEvent }) => {
  return (
    <div data-testid="filter">
      <div className="filter-page" data-testid="filter-page">
        <div className="search-box" data-testid="search-box">
          <div className="search" data-testid="search">
            <h3>Search Jobs</h3>
            <div className="job-search" data-testid="job-search">
              <input
                type="text"
                className="search-term"
                placeholder="Search Here"
                onChange={searchEvent}
                data-testid="search-input"
              />
            </div>
          </div>
          <div className="filter"  data-testid="categories">
            <div className="job-category" data-testid="job-category">
              <h4>Categories</h4>
              <ul  data-testid="category-list">
                <li onClick={handleCategoryFilter} data-testid="category-list-item">All Jobs</li>
                <li onClick={handleCategoryFilter} data-testid="category-list-item">Frontend</li>
                <li onClick={handleCategoryFilter} data-testid="category-list-item">Backend</li>
                <li onClick={handleCategoryFilter} data-testid="category-list-item">Devops</li>
                <li onClick={handleCategoryFilter} data-testid="category-list-item">Full Stack</li>
                <li onClick={handleCategoryFilter} data-testid="category-list-item">Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
