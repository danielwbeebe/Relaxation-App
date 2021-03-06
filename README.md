# Dan's Relax App

<img src="welcome-screen.png" width="800px">

<img src="home-screen.png" width="800px">

## What is Dan's Relax App?

Dan's Relax App is inspired by Calm.com and incorporated scenery and sounds I find relaxing. All photographs were taken by me.

Upon entering, the user can select from 4 different relaxation scenes: winter in the park (Central Park), spring in the garden (Boston Public Garden), summer by the river (the Hudson), or fall in the park (Central Park). For each page, the user can click a button to listen to relaxing sounds related to the imagery (a winter breeze, birds chirping, water flowing, the fall breeze blowing).

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
                  <Route exact path="/winter" render={() => <Winter />} />
                </div>
              </Router>
            );
          }
        } 


Here is the code from the Winter, Garden, River, and Park components to play the sound effects if the user clicks the "listen" button:

    playSound() {
      if (this.state.button === "Listen") {
        this.setState({
        button: "Stop",
        })
      audio.loop = true;
      audio.play();
      } else {
        this.setState({
          button: "Listen",
        })
        audio.pause();
      }
    }

## Acknowledgments

Thanks to Jacob for providing useful comments on the app and suggesting improvements which I have implemented
