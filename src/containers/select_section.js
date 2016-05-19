import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
/*--------------*/
import { fetchPosts } from '../actions/index';
import PostsListItem from './posts_list_item';
/*--------------*/

class SelectSection extends Component{

	constructor(props){
		super(props);

		this.state = {
			posts: []
		}

		this.onSubmit = this.onSubmit.bind(this);
	}	

	onSubmit(event){
			event.preventDefault();
			const value = $('option:selected').attr('value');
			this.props.fetchPosts(value);
			console.log(this.state.posts);
	}

	render(){
		const sections = [ 'home','opinion','world','national','politics',
			'upshot','nyregion','business',	'technology',	'science',
			'health',	'sports',	'arts',	'books','movies',	'theater',	'sundayreview',
			'fashion',	'tmagazine',	'food',	'travel',	'magazine',
			'realestate',	'automobiles',	'obituaries',	'insider'
		];

		return(
			<div>
				<p className="intro">Hello, if you want to check my work, please select on of the sections of New York Times news and hit the blue button and watch the magic happen ;) </p>
				<form onSubmit={ this.onSubmit } className="form-group">

					<select className="form-control" name="" id="">
						{ sections.map( s => 
								<option key={s} value={s}>{s}</option>
							)
						}
					</select>				
					<button type="submit" className="btn btn-primary">Get Your Articles</button>
				</form>
				<PostsListItem />
			</div>
		);
	}

	

}

function mapStateToProps( {posts} ){
	return { posts };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {fetchPosts}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSection);