import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Tag} from "antd";
import {MusicWrapper, TagsTop, ListWrapper} from './style';
import ReactDom from 'react-dom'
import "animate.css";
import ReactAplayer from 'react-aplayer';
import SakuraComment from "../article/components/SakuraComment";
const MusicList = (props) => {
    const {loading,musicList,onInit,onPlay,onPause} = props;
	
	
	const propsformusic = {
      theme: '#ebd0c2',
      lrcType: 1,
      mutex:false,
      audio:musicList,
    };

    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
			<div className='entry-content'>
				<ReactAplayer
					 {...propsformusic}
				  onInit={onInit}
				  onPlay={onPlay}
				  onPause={onPause}
				/>
				<p style={{'marginBottom':'1.5em'}}></p>
					
				<p>
					<a href='https://music.163.com/#/my/m/music/playlist?id=3115275567' target='_blank' rel='nofollow'>Follow me on &nbsp;
					<img src="https://cloud.moezx.cc/Picture/svg/other/NetEase_Music_logo.svg" alt="NetEase Cloud Music" 
					style={{'height': '1em','maxHeight': '1em',}}/>
					&nbsp;Cloud Music
					
					</a>
					 &nbsp;<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>	
					<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/doge.png" className='img' style={{'animationTimingFunction': 'steps(20)','animationDuration':'800ms','transform': 'translateY(-608px)','height': '640px',}}/>
					</span>
				</p>
			</div>
        )
    }
};


class Music extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
			musicList : [],
			page: 1,
			id : 10004,
			isComment : 1,
        };

    }

    render() {
        const {loading,page,musicList,id,isComment} = this.state;
        return (
            <MusicWrapper>
				
				<div className='pattern-center-blank'/>
				<div className="site-content chinese-font">
					<div id='primary' className='content-area'>
						<main id='main' className='site-main' role='main'>
							<article className='hentry'>
								<header className='entry-header'>
									<h1 className='entry-title animate__animated animate__tada animate__delay-.5s'>
										Music List
									</h1>
									
								</header>
								<ListWrapper>
								    <MusicList musicList={musicList} loading={loading} onInit={this.onInit} onPlay={this.onPlay} onPause={this.onPause}/>
									<SakuraComment isComment={isComment} id={id} />
								</ListWrapper>
								<footer className='entry-footer'></footer>
							</article>
						</main>
					</div>
				</div>
            
            </MusicWrapper>
        )
    }

    componentDidMount() {
	   this.getMusicList();
    }

	// example of access aplayer instance
	  onInit = ap => {
		this.ap = ap;
	  };

	  onPlay = () => {
		console.log('on play');
	  };

	  onPause = () => {
		console.log('on pause');
	  };

    getMusicList() {
		
        this.setState({loading: true});
        axios.get('/music/music/v1/list').then((res) => {
            if(res.models.length > 0){
				this.setState({
					musicList : res.models,
					loading : false,
				})
            }
        });
    }

	

   
}


export default Music
