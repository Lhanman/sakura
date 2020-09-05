import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {LinksWrapper, LinksTop, MainWrapper} from './style';
import axios from "axios";
import {Spin, Anchor} from "antd";
import SakuraComment from "../article/components/SakuraComment";
import $ from 'jquery'

const {Link} = Anchor;

const LinksList = (props) => {
    const {list, loading} = props;
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
            <div className='links cell'>
                {list.length > 0 ? <div className='extra'>
                    {list.map((item, index) => {
                        return (
                            <div className='item' key={index}>
                                <h2 className='link-title' id={`${item.title}`}><span className='fake-title'>{item.title}</span></h2>
                                <ul className='link-items fontSmooth'>
                                    {item.list.map((item2, index2) => {
                                        return (
                                            <li className='link-item post-list-show ' key={index2}>
                                                <a href={item2.href} target={'_blank'} rel="noopener noreferrer">
                                                    <img src={item2.logo} alt=""/>
                                                    <span className="sitename" title={item2.name}>{item2.name}</span>
                                                    <div className="linkdes" title={item2.description}>{item2.description}</div>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div> : <p>去找点新朋友玩吧...</p>}
            </div>
        )
    }
};

class Links extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
		    id : 10005,
			isComment : 1,
        }
    }

    render() {
        const {list, loading,id,isComment} = this.state;
        return (
            <LinksWrapper>
                <div className='pattern-center-blank'/>
                <LinksTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={"http://static.lhanman.cn/static/images/link.jpg"} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>友人帐</h1>
                    </div>
                </LinksTop>
                <MainWrapper>
                    <div className='flex-items'>
                        <LinksList list={list} loading={loading}/>
						
                        <div className='toc-container'>
                            {list.length > 0 && <Anchor className='toc' affix={false} showInkInFixed onClick={this.handleClick} offsetTop={450}>
                                {list.map((item)=>{
                                    return(
                                        <Link key={item.title} href={`#${item.title}`} title={item.title}/>
                                    )
                                })}
                            </Anchor>}
                        </div>
                    </div>
						<SakuraComment isComment={isComment} id={id} />
                </MainWrapper>
            </LinksWrapper>
        )
    }

    componentDidMount() {
        this.getLinks();
       window.addEventListener("scroll", this.handleScroll);
    }

    handleClick(e, link) {
        e.preventDefault();
    };

	handleScroll() {
		 
		 if(document.getElementById('comments') != null)
		 {
			if($(window).scrollTop()>$('#comments').offset().top-180)
			 {
				$('.toc').removeClass('fixedTor');
			 }
			else if($(window).scrollTop()>$('.pattern-attachment-img').outerWidth()-400)
			{
				$('.toc').addClass('fixedTor');
			}
			else if($(window).scrollTop() < $('.pattern-attachment-img').outerWidth()-400)
			 {
				$('.toc').removeClass('fixedTor');
			 }
		 }
		
    }

    getLinks() {
        this.setState({loading: true});
        axios.get('/link/link/v2/list').then((res) => {
            let {extra} = res;
            let arrar = [];
            for (let i in extra) {
                arrar.push({
                    title: i,
                    list: extra[i]
                });
            }
            if (res.success === 1) {
                this.setState({
                    list: arrar,
                    loading: false
                })
            }
        });
    }

  

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }
}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'bannerList'])
    }
};

export default connect(mapState)(Links)
