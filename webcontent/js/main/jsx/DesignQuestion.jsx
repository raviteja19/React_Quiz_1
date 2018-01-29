import React from 'react';
import  $ from 'jquery';
export class DesignQuestion extends React.Component
{
    constructor(props)
	{
		super(props);
		this.state={typed:''};
		this.QuestionOption=this.QuestionOption.bind(this);
		
		
	}

	QuestionOption(option,i)
	{var value=option;
		
		return (
			<div key={i} className="options">
				<input id={i+'-'+this.props.id}  type="text" className="input_options"  onChange={this.props.changeOptions}/>
			</div>
			);
	}


	render()
	{
		
	var me=this,display;
	
		if(this.props.defaultquestionNo==this.props.id)
		{
			display='block';
		}
		else
		{
			display='none';
		}
	    return (
		<div className="question_design" style={{display:display}}>
			<div className="header">
				<label>Write a Quesstion</label>
			</div>
			<div className="question_input">
				<input id={me.props.id} type="text" className="input" onChange={this.props.writeQuestion}/>
			</div>
			<div className="question_image">
				<input type="file" id="file" className="input"/>
			</div>
			<div className="question_option">
				<div className="header">
					<label>Give Options</label>
				</div>
				{me.props.options.map(me.QuestionOption)}
			</div>
			<div className="add_delete">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
						<div className="Add">
							<button id={me.props.id} type="button" className="btn btn-success" onClick={this.props.addOption}>ADD</button>
						</div>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
						<div className="Delete">
							<button id={me.props.id} type="button" className="btn btn-success" onClick={this.props.deleteOption}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
         
	    );
	}
}

export default DesignQuestion;