import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	footer{
		background : none !important;
	}
`

export const AnalyticsWrapper = styled.div`

	 @font-face{
		font-family: Merriweather Sans
		src : url('../font/MerriweatherSans.woff2');
	}
	.chinese-font {
    font-family: Merriweather Sans,Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
		}

	 .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
    @media(max-width:768px){
        .pattern-center-blank{
            padding-top: 50px;
        }
    }
		
	#content{
		animation: main 1s;
	}
		
	.site-content {
	   max-width: 800px;
		padding: 50px 10px;
		margin-left: auto;
		margin-right: auto;
	}

	.site-main{
		padding: 40px 0 0;
		text-shadow: 0px 0px 1px rgba(0,0,0,.1);
	}

	.hentry {
    margin: 0 0 1.5em;
		}

	article{
		display:block;
	}


		

	header .entry-header {
		margin: auto;
		text-align: left;
	}

	.entry-header h1.entry-title {
		margin: auto;
		text-align: center;
		font-weight: 700;
		text-transform: uppercase;
		}


	@media (max-width: 860px)
		h1.entry-title {
			font-size: 18px;
		}

		h1.entry-title {
			font-size: 24px;
			font-weight: 300;
		}

		h1, h2, h3, h4, h5, h6 {
		    clear: both;
		}
		
		h1 {
		font-size: 2em;
		margin: .67em 0;
		}
		
		.entry-header h1.entry-title::before {
			content: "{";
			color: #f8ba0b;
			font-size: 1.5em;
			margin-right: 6px;
			vertical-align: sub;
		}


		.entry-header h1.entry-title:after {
				content: "}";
				color: #f8ba0b;
				font-size: 1.5em;
				margin-left: 6px;
				vertical-align: sub
			}
		

		.entry-footer {
			margin: 0 0 0 17%;
			list-style: none;
		}
`;



export const ListWrapper = styled.div`
	.example{
        height:52px;
        line-height:52px;
        text-align: center;
        i{
            background-color: #FE9600;
        }
    }

	@font-face{
		font-family: Merriweather Sans
		src : url('../font/MerriweatherSans.woff2');
	}
	.chinese-font {
    font-family: Merriweather Sans,Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
		}

	:after,
	:before {
		box-sizing: inherit
	}

	 *:before, *:after {
		-webkit-box-sizing: inherit;
		box-sizing: inherit;
	}
	
	*{
		box-sizing:border-box
	}
	

	 min-height:600px;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:5px;
    background-color: rgba(255,255,255,.8);
    animation: main 1s;
    @keyframes main {
        0% {
            opacity: 0;
            transform: translateY(50px)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
    
    
    @media(max-width:768px){
        padding-top:30px;
        min-height:400px;
        .page-header{
            margin-bottom: 30px;
                h1{
                    font-size: 16px;
                    font-weight: 400;
                    border: 1px dashed #ddd;
                    padding:10px;
                    color: #828282;
                }
        }
    }


	.useragent-info img {
		width: 1em;
		height: 1em;
		border: 0;
	}
	
	img {
		height: auto;
		max-width: 100%;
	}

	img {
		border: 0;
	}

	center span{
		cursor : url(https://static.lhanman.cn/static/assets/sakura/static/media/texto.68d4b275.cur),auto;
	}
`;
