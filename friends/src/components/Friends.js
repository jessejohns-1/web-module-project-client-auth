import React from "react"
import axiosWithAuth from './../utils/axiosWithAuth';
import "../App.css"
class Friends extends React.Component {
    state = {
        friends:[]
    }

    componentDidMount() {
        this.getData();
      }

      getData = () => {
        axiosWithAuth()
          .get('/api/friends')
          .then(res=> {
            this.setState({
              friends: res.data
            })
          })
          .catch(err=> {
            console.log(err);
          });
      };

      render(){
          return(
              <div className="red">
                  {
                    this.state.friends.map((pop)=> 
                    <>
                    <div className="friends1">
                    <h2>{pop.name}</h2>
                    <h2>{pop.age}</h2>
                    <h2>{pop.email}</h2>
                    </div>
                    </>
                      ) 
                  }
              </div>
          )
      }

}
export default Friends