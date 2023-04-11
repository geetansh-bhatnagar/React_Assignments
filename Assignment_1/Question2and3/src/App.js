import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
      <header>
        <nav>
          <div className="logo">
            <img
                src="https://images.unsplash.com/photo-1533794318766-897f4d50cb39?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MDUyMDk&ixlib=rb-1.2.1&q=80"/>
          </div>
          <div className="items">
            <a href="#" className="active">Home</a>
            <a href="#">Service</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>

          <div className="other">
            <button>Log in</button>
          </div>
        </nav>
      </header>

  <div className="container">
    <div className="row">
      <div className="info">
        <p className="short-info">#Get Your 14 Days Free Trial</p>
        <h2 className="hero-heading">Manage All Of Your Stuff Using A TGB</h2>
        <p className="hero-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend
          odio viverra diam aliquet donec again.</p>
        <div className="users">
          <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
              className="img-fluid user"/>
            <img
                src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                className="img-fluid user"/>
              <img
                  src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                  className="img-fluid user"/>
                <img
                    src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                    className="img-fluid user"/>
                  <p>4M+ users</p>
        </div>
        <button className="learn-more">
          Learn More
        </button>
      </div>
      <div className="hero-image">
        <img
            src="https://images.unsplash.com/photo-1519326882834-04c334752f58?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MDUxMzU&ixlib=rb-1.2.1&q=80"
            className="img-fluid"/>
      </div>
    </div>
  </div>
      </div>
  );
}

export default App;
