import React, {PureComponent} from 'react';
import Banner from "./components/Banner";
import ListWrapper from './components/List';
import Feature from "./components/Feature";
import {HomeWrapper, MainWrapper} from './style';
import {actionCreators} from "./store";
import {connect} from "react-redux";
import {getrand} from "../../lib/public";

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            banner: '',
            innerHeight: window.innerHeight,
        };
        this.getBanner = this.getBanner.bind(this);
    }

    render() {
        const {banner, innerHeight} = this.state;
        const {userInfo, featureList, ListImg} = this.props;
        return (
            <HomeWrapper>
                <Banner banner={banner} innerHeight={innerHeight} getBanner={this.getBanner} userInfo={userInfo}/>
                <MainWrapper id='content'>
                    <Feature featureList={featureList} ListImg={ListImg}/>
                    <ListWrapper/>
                </MainWrapper>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.changeInnerHeight();
        this.getBanner();
        this.props.getFeature();
	
    }

    getBanner() {
        const banner = this.props.bannerList;
        const num = getrand(0, banner.length - 1);
        this.setState({
            banner: `url('${banner[num].img}')`
        })
    }

    changeInnerHeight() {
        window.onresize = () => {
            this.setState({
                innerHeight: window.innerHeight,
            })
        }
    }
}

const mapState = (state) => {
    return {
        userInfo: state.getIn(['header', 'userInfo']),
        featureList: state.getIn(['home', 'featureList']),
        ListImg: state.getIn(['image', 'ListImg']),
        bannerList: state.getIn(['image', 'bannerList'])
    }
};

const post_list_show_animation = () =>{
		if(document.getElementsByClassName('post-list-thumb') != null)
		{
			
			var options = {
            root: null,
            threshold: [0.20]
			}
			 var io = new IntersectionObserver(callback, options);
			 var articles = document.querySelectorAll('.post-list-thumb');
			
			function callback(entries) {
            entries.forEach((article,index) => {
                if (!window.IntersectionObserver) {
                    article.target.style.willChange = 'auto';
                    if( article.target.classList.contains("post-list-show") === false){
                        article.target.classList.add("post-list-show");
                    }
                } else {
                    if (article.target.classList.contains("post-list-show")) {
                        article.target.style.willChange = 'auto';
                        io.unobserve(article.target)
                    } else {
                        if (article.isIntersecting) {
							
                            article.target.classList.add("post-list-show");
                            article.target.style.willChange = 'auto';
                            io.unobserve(article.target)
                        }
                    }
                }
            })
        }
			 articles.forEach((article) => {
				
            io.observe(article)
        })
			 
		}
	}

const mapDispatch = (dispatch) => {
    return {
        getFeature() {
            dispatch(actionCreators.getFeature());
        }
    }
};

export default connect(mapState, mapDispatch)(Home);
