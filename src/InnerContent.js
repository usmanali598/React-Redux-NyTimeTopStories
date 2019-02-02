import React, {Component} from 'react';
import Tsting from './Tsting';

class InnerContent extends Component{
    state={
        inx:0,
        title:'',
        auth:'',
        timing:'',
        imgs:'',
        display:''
    }
  handleClick = index=>{
    // console.log(index, 'inx here');
     this.setState((prevState, props) =>({
         inx:index,
         title:this.props.tsta[index].title,
         auth:this.props.tsta[index].byline,
         timing: this.props.tsta[index].created_date,
         imgs: this.props.tsta[index].multimedia[0],
         display:'none'
     })) 
    console.log(this.state, 'stae here');
     }
 render(){
     const {nam} = this.props;
     const {posts} = this.props;
     const {tsta} = this.props;
     const {inx} = this.state;
     const {title} = this.state;
     const {auth} = this.state;
     const {timing} = this.state;
     const {imgs} = this.state;
     const {display} = this.state;
         

// console.log(this.props.posts, '@@@@@@tsting')
            // (tsta.length > 0) ? console.log( tsta[inx].title, '@@@@@@tsta') : console.log('here')
    return(
               <div className="nav" >
          <tr ><td style={ { width: '100%' } }><span style={ { fontWeight: 'bold' } }>Top Stories</span> { nam && `(${ nam[0] })` }</td></tr>
         
          { tsta && tsta.map( (it,i) =>
          { 
          
            return (
              
             <div className={display === '' ? 'NavContainer' : 'non'} id={i} onClick = {this.handleClick.bind(this, i)}>
             {/* <div className='NavContainer' id={i} onClick = {this.handleClick.bind(this, i)}> */}
                <div className="NavLeft" >
                  { it.multimedia.filter( img => img.length > 1 ) ? <img className='smallPic' src={ it.multimedia.length > 0 ? it.multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' } alt='pics' /> : <p>No Image..</p> }
                  <p >{ it.updated_date }</p>
                  <p className="author" style={ { margin: 'auto'}}>{ it.byline }</p>
                </div>
                {/* <div className="NavRight" onClick={ e => (e.target.parentNode !== '') ? console.log(e.target.parentNode.getElementsByClassName('se')[0].innerText) : '' }> */}
                <div className="NavRight" >
                  <h1 className='se'>{ it.abstract }</h1>
                  <p>{ it.title }</p> <a target="_parent" href={ it.url }>Read More..</a>
                  <p>{ it.des_facet.map( chk => `#${ chk }  ` ) }</p>
                 
                  {/* <FilterLink filter='/Tsting'>Completed</FilterLink> */}
                </div>
              </div> 
            )
          } ) }
          <Tsting inx={inx} auth={auth} timing={timing} title={title} imgs={imgs}/>
           </div>
    )
 }
}

export default InnerContent;