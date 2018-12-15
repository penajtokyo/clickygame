import React, { Component } from 'react';

var data = [{
    "id": 0,
    "image": "/assets/images/00.jpg",
    "clicked": false
  },
  {
    "id": 1,
    "image": "/assets/images/Ageis.jpg",
    "clicked": false
  },
  {
    "id": 2,
    "image": "/assets/images/DeathSythe.jpg",
    "clicked": false
  },
  {
    "id": 3,
    "image": "/assets/images/Dynamus.jpg",
    "clicked": false
  },
  {
    "id": 4,
    "image": "/assets/images/Exia.jpg",
    "clicked": false
  },
  {
    "id": 5,
    "image": "/assets/images/Freedom.jpg",
    "clicked": false
  },
  {
    "id": 6,
    "image": "/assets/images/groundtype.jpg",
    "clicked": false
  },
  {
    "id": 7,
    "image": "/assets/images/GundamX.jpg",
    "clicked": false
  },
  {
    "id": 8,
    "image": "/assets/images/RX78-2.jpg",
    "clicked": false
  },
  {
    "id": 9,
    "image": "/assets/images/strike.jpg",
    "clicked": false
  },
  {
    "id": 10,
    "image": "/assets/images/wing.jpg",
    "clicked": false
  },
  {
    "id": 11,
    "image": "/assets/images/Zeta.jpg",
    "clicked": false
  }
]

var styles = {
  img: {
    width: "300px",
    height: "300px"
  }
}

class App extends Component {
  state = {
    data: data,
    currentScore: 0,
    highScore: 0
  }

  handleClick = (event) => {
    console.log(event.target);
    const imgId = parseInt(event.target.getAttribute("imgid"))
    console.log(imgId);
    //get id of image so whe can tell what img we clicked on
    //suffle the entire array
    var shuffledData = shuffleArray(this.state.data)
    console.log(shuffledData);
    for (let i = 0; i < shuffledData.length; i++) {
      //if imgid === id
      if (imgId === shuffledData[i].id) {
        //if clicked === false
        if(shuffledData[i].clicked === false){
         shuffledData[i].clicked = true;
           // this.setState({
          this.setState({
              currentScore: this.state.currentScore + 1
          });
          if(this.state.currentScore >= this.state.highScore){
            this.setState({
              highScore: this.state.highScore + 1
            }) 
            if(this.state.highScore >= 12){
            console.log("Ya you win!")
            }
          };
          this.setState({
            data: shuffledData
          });
        }else{
          //else
            //reset our array
            //reastart the game
            //reset currentscore
            this.setState({
              data:[{
                "id": 0,
                "image": "/assets/images/00.jpg",
                "clicked": false
              },
              {
                "id": 1,
                "image": "/assets/images/Ageis.jpg",
                "clicked": false
              },
              {
                "id": 2,
                "image": "/assets/images/DeathSythe.jpg",
                "clicked": false
              },
              {
                "id": 3,
                "image": "/assets/images/Dynamus.jpg",
                "clicked": false
              },
              {
                "id": 4,
                "image": "/assets/images/Exia.jpg",
                "clicked": false
              },
              {
                "id": 5,
                "image": "/assets/images/Freedom.jpg",
                "clicked": false
              },
              {
                "id": 6,
                "image": "/assets/images/groundtype.jpg",
                "clicked": false
              },
              {
                "id": 7,
                "image": "/assets/images/GundamX.jpg",
                "clicked": false
              },
              {
                "id": 8,
                "image": "/assets/images/RX78-2.jpg",
                "clicked": false
              },
              {
                "id": 9,
                "image": "/assets/images/strike.jpg",
                "clicked": false
              },
              {
                "id": 10,
                "image": "/assets/images/wing.jpg",
                "clicked": false
              },
              {
                "id": 11,
                "image": "/assets/images/Zeta.jpg",
                "clicked": false
              }
            ]
            })
            this.setState({
              currentScore: 0
            })

        }
        
      }
    }
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
    }
  }

  render() {
    return (
      
      <div className="container-fluid">
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Gundam Clicky Game</span>
        <a>Current Score: {this.state.currentScore}</a>
        <a>High Score: {this.state.highScore}</a>

    </nav>
        <div className="row">
          {
            this.state.data.map((imageObj) => {
              return (<div className="col-sm-3" key={imageObj.id}>
                        <img src={imageObj.image} style={styles.img} imgid={imageObj.id} alt="clickyImg" onClick={this.handleClick}/>
                      </div>)
            })
          }
        </div>
      </div>
    );
    
  }
}

export default App;