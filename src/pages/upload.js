import './workspace.css';
import Contents from './image_insert';
import Contents_1 from './Doormodel_1';
import Contents_2 from './Doormodel_2';
import Contents_3 from './Doormodel_3';
import Contents_4 from './Doormodel_4';
import Contents_5 from './Doormodel_5';
import Contents_6 from './Doormodel_6';
import Contents_7 from './Doormodel_7';
import Contents_8 from './Doormodel_8';
import Contents_9 from './Doormodel_9';
import Contents_10 from './Doormodel_10';
import Contents_11 from './Doormodel_11';
import Contents_12 from './Doormodel_12';
import Contents_13 from './Doormodel_13';
import Contents_14 from './Doormodel_14';


const React = require('react')

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className='imagebackground'>
        <input type="file" onChange={this.handleChange} />    
          <img  className='picture' id='content' src={this.state.file} />
          <div className='doorimage ' id='image1'>
            
            <Contents/>
          </div>
          <div className='doorimage' id='image2'>
            <Contents_1/>
          </div>
          <div className='doorimage' id='image3'>
            <Contents_2/>
          </div>
          <div className='doorimage' id='image4'>
            <Contents_3/>
          </div>
          <div className='doorimage' id='image5'>
            <Contents_4/>
          </div>
          <div className='doorimage' id='image6'>
            <Contents_5/>
          </div>
          <div className='doorimage' id='image7'>
            <Contents_6/>
          </div>
          <div className='doorimage' id='image8'>
            <Contents_7/>
          </div>
          <div className='doorimage' id='image9'>
            <Contents_8/>
          </div>
          <div className='doorimage' id='image10'>
            <Contents_9/>
          </div>
          <div className='doorimage' id='image11'>
            <Contents_10/>
          </div>
          <div className='doorimage' id='image12'>
            <Contents_11/>
          </div>
          <div className='doorimage' id='image13'>
            <Contents_12/>
          </div>
          <div className='doorimage' id='image14'>
            <Contents_13/>
          </div>
          <div className='doorimage' id='image15'>
            <Contents_14/>
          </div>

      </div>
    );
  }
}
export default Upload;