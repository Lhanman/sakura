import styled from "styled-components";

export const BooksWrapper = styled.div`

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
		background-color: rgba(255,255,255,.8);
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
	 .entry-content {
		position: relative
	}
	
	.entry-content h3 {
		padding-bottom: 8px;
		border-bottom: 1px dashed #ddd;
		color: #737373
	}


	.entry-content h3,
	.entry-content h4,
	.entry-content h5 {
		padding-left: 16px;
		font-weight : bold;
		font-size :1.26em;
	}

	
	.entry-content h3:after {
		content: "#";
		left: 0;
		position: absolute;
		color: #ff6d6d
	}

	.entry-content h4:after {
		content: "��";
		left: 0;
		position: absolute;
		color: #ff6d6d
	}

	.entry-content a {
		color: #e67474;
		position: relative;
		font-size : 15px;
	}
	
	.entry-content a:hover {
		color: orange;
		text-decoration: none
	}

	.entry-content a:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: orange;
		transform-origin: bottom right;
		transition: transform .25s ease-out
	}

	
	.entry-content a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left
	}

	.entry-content p {
		color: #797979
	}

	.entry-content p {
		line-height: 30px
	}

	.entry-content hr {
		margin-top: 40px;
		margin-bottom: 40px;
		display: block;
		border: 0;
		text-align: center;
		background: 0 0
	}

	.entry-content hr:before {
		content: '...';
		display: inline-block;
		margin-left: .6em;
		color: rgba(0,0,0,.8);
		position: relative;
		top: -30px;
		font-size: 28px;
		letter-spacing: .6em
	}

	.entry-content a img{
		cursor: -webkit-zoom-in
	}

	.entry-content:before,
	.entry-content:after {
		content: "";
		display: table;
		table-layout: fixed
	}

	.entry-content:after {
		clear: both
	}
	
	.entry-content{
		border: none;
		margin-bottom: 0;
		margin-top: 0;
		padding: 0
	}

	 .entry-content p {
			font-size: 15px
			margin-bottom: 1.5em;
			margin-top : 15px;

		}
	.entry-content span 
	{
		font-size : 15px;
	}
	 .entry-content strong {
	   font-weight: 700;
	   font-size : 15px;
	}

	 min-height:600px;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:5px;
    
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
	.cell{
		margin-left : 10px;
	}

`;
