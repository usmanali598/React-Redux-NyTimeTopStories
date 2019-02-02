import React, {Component} from 'react';
import App from './App';

class Tsting extends Component {

state = {
    title:'',
    auth:'',
    timing:'',
    imgs:''
}
    componentWillReceiveProps( nextProps )
    {
        this.setState( {
            title: nextProps.title,
            auth: nextProps.auth,
            timing: nextProps.timing,
            imgs: nextProps.imgs
        } )
    }
render(){
    console.log(this.props.imgs, 'in Testing com')
    return (
        <>
        <table className={this.props.title === '' ? 'non' : 'view2'}>
            <tr>
                <td className='tk'>{this.props.title}</td>
                <td className='tk'>{this.props.auth}</td>
                <td className='tk'>{this.props.timing}</td>
            </tr>
        </table>
        <hr />
        <img src={this.state.imgs.url} alt='try' className={this.props.imgs === '' ? 'non' : ''}/>
    </>
    )
} 
}

export default Tsting;