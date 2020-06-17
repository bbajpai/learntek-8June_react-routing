import React,{Component} from 'react';



class PostItem extends Component{
  constructor(props){
      super(props);
  }
  render(){
      console.log(this.props);
    return <div>{this.props.match.params.id}   Post Item Page</div>
  }
}

export default PostItem;