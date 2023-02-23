import "./index.css";

const Filter = ({ handleCategoryFilter, searchEvent }) => {
  return (
    <div>
      <div className="filter-page">
        <div className="search-box">
          <div className="search">
            <h3>Search Jobs</h3>
            <div className="job-search">
              <input
                type="text"
                className="search-term"
                placeholder="Search Here"
                onChange={searchEvent}
              />
            </div>
          </div>
          <div className="filter">
            <div className="job-category">
              <h4>Categories</h4>
              <ul>
                <li onClick={handleCategoryFilter}>All Jobs</li>
                <li onClick={handleCategoryFilter}>Frontend</li>
                <li onClick={handleCategoryFilter}>Backend</li>
                <li onClick={handleCategoryFilter}>Devops</li>
                <li onClick={handleCategoryFilter}>Full Stack</li>
                <li onClick={handleCategoryFilter}>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
