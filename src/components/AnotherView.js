import React, {Component} from 'react';

class AnotherView extends Component {
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
    backNRefresh = ()=>{
        window.history.back();
        setTimeout(()=>window.location.reload(), 800);
    }

render(){
    // console.log(this.props, 'in com')
    return (
        <>
        <table className={this.props.title === '' ? 'non' : 'view2'}>
            <tbody>
                <tr className='viewRow'>
                    <td className='tk'>{this.props.title}</td>
                    <td className='tk'>{this.props.auth}</td>
                    <td className='tk'>{this.props.timing}</td>
                </tr>
            </tbody>
        </table>
        <hr />
        {this.state.imgs === undefined ? this.backNRefresh() : <img src={this.state.imgs.url} alt='try' className={this.props.imgs === '' ? 'non' : ''}/>}
    </>
     )
   } 
}

export default AnotherView;