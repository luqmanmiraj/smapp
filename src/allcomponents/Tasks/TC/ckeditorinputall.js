import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import CKEditor from 'ckeditor4-react';

export default class TwoWayBinding extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: props.data
		};

		this.handleChange = this.handleChange.bind( this );
	//	this.onEditorChange = this.onEditorChange.bind( this );
	}

	

	handleChange( changeEvent ) {
		this.setState( {
			data: changeEvent.target.value
		} );
	}

	render() {
		return (
			<div>
				

				<div style={{overflow: 'auto'}}>
					<CKEditor
						data={this.state.data}
						onChange={this.props.getdata}
						style={{
							float: 'left',
							width: '100%'
						}}
					/>
				
				</div>
			</div>
		);
	}
}




//ReactDOM.render( <TwoWayBinding />, document.getElementById( 'lockitup' ) );