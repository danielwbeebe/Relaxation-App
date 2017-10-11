# Dan's Relax App

<img src="welcome-screen.png" width="800px">

<img src="home-screen.png" width="800px">

## What is Dan's Relax App?

Dan's Relax App is inspired by Calm.com and incorporated scenery and sounds I find relaxing. All photographs were taken by me.

Upon entering, the user can select from 3 different relaxation scenes: a park (Boston Public Garden), a river (the Hudson), or a park (Central Park). For each page, the user can click a button to listen to relaxing sounds related to the imagery (birds chirping, water flowing, the breeze blowing).

The app is deployed at:  http://relax-app.bitballoon.com/

## Technology

Dan's Relax App was made using React.

Here is the code from App.js for the routing through the app:

        class App extends Component {
          render() {
            return (
              <Router>
                <div className="App">
                  <Route exact path="/" render={() => <Welcome />} />
                  <Route exact path="/home" render={() => <Home />} />
                  <Route exact path="/garden" render={() => <Garden />} />
                  <Route exact path="/park" render={() => <Park />} />
                  <Route exact path="/river" render={() => <River />} />
                </div>
              </Router>
            );
          }
        } 


