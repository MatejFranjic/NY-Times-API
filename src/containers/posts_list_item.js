import React, { Component } from 'react';
import { connect } from 'react-redux';
/*--------------------*/

const PostsListItem = (props) => {
	if(!props.posts){
		return <div></div>
	}

	const root_post = props.posts.posts;
	const section = props.posts.posts.section;
	const single_post = props.posts.posts.results;

	return (
		<div>
			<div>	
				<h2 className="h2">Your articles from section { section }</h2>
				<p> Number of articles: { root_post.num_results }</p>
				<div className="inner">
					{ single_post.map( post => 
							<div key={ post.title } className="col-lg-4">
								<div className="single-post-content">																	
											{ post.multimedia.map( pic => {																							
											
												if( pic.width ){													
													return (
													<figure key={pic.url}>
														<img href={post.short_url} src={pic.url} alt={pic.caption} width="100%" height='auto' />
														<figcaption> { pic.caption } </figcaption>
													</figure>
													);
												}																
											}) 
									/*end of .map function*/}									
								</div>
								<h4 className="h4"> 
									<a href = {post.short_url} target="_blank">
										{ post.title } 
									</a>
								</h4>
								<p className="author">
									{ post.byline }
								</p>
								<a className="btn btn-primary" href={ post.short_url } target="_blank">READ MORE</a>
							</div>
					 )}
				</div>
			</div>
			<div className="footer-div"> This usage of New York Times API was only for educational purposes. { root_post.copyright } 
			</div> 
		</div>
	);
}

function mapStateToProps( {posts} ){
	return { posts };
}
export default connect(mapStateToProps)(PostsListItem);