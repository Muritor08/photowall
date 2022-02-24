import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component{
    
    state = { loading: true}

    componentDidMount(){
        this.props.startLoadingPost().then(() => {
            this.setState({loading : false})
        })
        this.props.startLoadingComments()
    }

    render(){
        // console.log(this.state.posts)
        // console.log(this.props)
        return  (
        <div>
            <h1><Link to='/'>PhotoWall</Link></h1>

        <Route exact path = '/' render = {() => (
            <div>
                {/* <Title title={'PhotoWall'}/> */}
                <PhotoWall {...this.props} />  {/* /// posts=props.post,  remove=props.remove*/}
                {/* <PhotoWall posts={this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate} /> */}
            </div>
        )} />
            
        <Route path='/AddPhoto' render = {({history}) => (
            <AddPhoto //onAddPhoto = {(addedPost) => {
                // this.addPhoto(addedPost)
                //history.push('/')
           // }} 
           {...this.props} onHistory = {history} />
        )} /> 

        <Route path="/single/:id" render = {(params) => (
            <Single loading={this.state.loading}  {...this.props} {...params} />
        )} />   
                
        </div>)
    }
}



export default Main