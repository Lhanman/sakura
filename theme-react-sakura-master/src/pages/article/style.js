import styled from 'styled-components';
import hr from '../../statics/images/hr.gif';

export const ArticleWrapper = styled.div`
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
    @media(max-width:768px){
        .pattern-center-blank{
            padding-top: 50px;
        }
    }
`;

export const ArticleTop = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 800px;
    overflow: hidden;
	margin: 0 auto;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
    .pattern-attachment-img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-origin: border-box;
        width: 100%;
        height: 400px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }
    .single-header{
        max-width: 900px;
        padding: 0 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        top: auto;
        bottom: 20px;
        position: absolute;
        left: 0;
        right: 0;
        color: #fff;
        text-shadow: 2px 2px 10px #000;
        z-index: 1;
        .entry-title{
            font-size: 32px;
            width: 100%;
            color: #fff;
            font-weight: bold;
        }
        .entry-census{
            color: #fff;
            font-size: 14px;
            padding: 18px 0 0;
            line-height: 39px;
            span{
                color: #fff;
                font-size: 14px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 100%;
                    float: left;
                    margin-right: 12px;
                }
            }
            .bull {
                margin: 0 5px;
            }
        }
    }
    @media(max-width:768px){
        .pattern-attachment-img{
            height:280px;
        }
        .single-header{
            .entry-title{
                font-size: 24px;
            }
            .entry-census{
                padding:0;
            }
        }
    }
`;

export const MainWrapper = styled.div`
    min-height:600px;
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:50px;
    background-color: rgba(255,255,255,.8);
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
    .cell{
        margin-left:10px;
    }
    .entry-content {
        position: relative;
        animation: main 1s;
    }
    
    .entry-content .begin,.single-begin {
        float: left;
        font-size: 3.6em;
        line-height: 1em;
        margin-right: 3px;
        margin-top: 2px;
        font-weight: 700
    }
    
    @media screen and (max-width: 860px) {
        .entry-content .begin,.single-begin {
            margin-top:6px
        }
    }
    
    .entry-content ul {
        list-style: disc;
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px;
        margin:16px 0;
    }
    
    .entry-content ol {
        list-style: decimal;
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px;
        margin:16px 0;
    }
    
    .entry-content table {
      display: block;
      width: 100%;
      overflow: auto;
    }
    
    .entry-content table th {
      font-weight: 600;
    }
    
    .entry-content table th,.entry-content table td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
    
    .entry-content table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }
    
    .entry-content table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
    
   
    
    .entry-content blockquote>:first-child {
      margin-top: 0;
    }
    
    .entry-content blockquote>:last-child {
      margin-bottom: 0;
    }
	blockquote {
		margin: 0;
		padding: 30px 60px;
		position: relative;
	}

	.entry-content blockquote:before {
        content: "\f10d" !important;
		font-size: 3rem;
		position: absolute;
		top: -25px;
		left: 12px;
		color: orange;
		font-family: FontAwesome
    }

	.entry-content blockquote:after {
		content: '\f10e' !important;
		font-size: 3rem;
		position: absolute;
		bottom: -25px;
		right: -5px;
		color: orange;
		font-family: FontAwesome
	}
    
    .entry-content ol li,.entry-content ul li {
        padding: 8px 0
    }
    
    .entry-content h3 {
        padding-bottom: 8px;
        border-bottom: 1px dashed #ddd;
        color: #737373;
        margim:17px 0;
    }
    
    .entry-content h3,.entry-content h4,.entry-content h5 {
        padding-left: 18px;
    }
    
    .entry-content h1{
        margin:16px 0;
        clear:both;
        font-size:24px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h2{
        margin:18px 0;
        clear:both;
        font-size:22px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h3{
        margin:17px 0;
        clear:both;
        font-size:20px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h4{
        margin:16px 0;
        clear:both;
        font-size:18px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h5{
        margin:15px 0;
        clear:both;
        font-size:16px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h6{
        margin:14px 0;
        clear:both;
        font-size:14px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h1:after {
        content: "\\2761";
        position: relative;
        color: pink;
        font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        padding-left: 4px;
        font-size: 1.5em;
    }
	.entry-content h2:after{
        content: "\\273e";
        position: relative;
        color: pink;
        font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        padding-left: 3px;
        font-size: 1.5em;
    }
    
    .entry-content h3:after {
        content: "#";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content h4:after {
        content: "▌";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content h5:after {
        content: "♯";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content a {
        color: #e67474;
        position: relative;
    }
    
    .entry-content a:hover {
        color: orange;
        text-decoration: none;
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
        transition: transform .25s ease-out;
    }
    
    .entry-content a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    
    .entry-content p {
        color: #797979;
        margin: 15px 0 22px;
        line-height: 30px;
		text-shadow: 0px 0px 1px rgba(0,0,0,.1);
		
		code {
			background: rgba(254,250,199,1);
			color: #e67474;
			font-family: 'Source Code Pro',monospace,Helvetica,Tahoma,Arial,STXihei,"STHeiti Light","Microsoft YaHei",sans-serif;
			word-break: break-word;
			padding: 2px;
			text-shadow: none;
			border-radius: 0 0 5px 5px;
		}
    }
    
    .entry-content hr {
        max-width: 100%;
        height: 50px;
        background: url(${hr}) 100% no-repeat;
        border: none;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .entry-content .post-password-form {
        text-align: center;
    }
    
    .entry-content a img.alignleft,.entry-content a img.alignright,.entry-content a img.aligncenter {
        cursor: -webkit-zoom-in;
    }
    
    .entry-content img{
        max-width:100%;
		cursor: -webkit-zoom-in
    }
    
    pre{
        position: relative;
        background: #2b3940;
        border-radius: 5px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        font-size: 15px;
        max-width: 100%;
        overflow: auto;
        text-shadow: none;
        color: #000;
        padding: 22px;
        box-shadow: 0 10px 30px 0px rgba(0,0,0,.4);
		cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/texto.68d4b275.cur),auto;
    }
    
    code{
        color: #fff;
        word-break: break-word;
        padding: 2px;
        text-shadow: none;
        border-radius: 0 0 5px 5px;
    }

	del {
    text-decoration: none;
    background-color: #252525;
    color: #252525;
    text-shadow: none;
    transition: 0.3s ease;
	}

	del:hover{
		text-decoration: none;
		background-color: #252525;
		color: white;
		text-shadow: none;
		transition: 0.3s ease;
	}


	.entry-content pre:before {
		content: " ";
		position: absolute;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		background: #fc625d;
		width: 12px;
		height: 12px;
		left: 12px;
		margin-top: -18px;
		-webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
		box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
		z-index: 2;
	}

	.entry-content pre code[data-rel]:before {
    color: #fff;
    content: attr(data-rel);
    height: 32px;
    line-height: 36px;
    background: #21252b;
    font-size: 16px;
    position: absolute;
    margin-top: -30px;
    left: 0;
    width: 100%;
    font-family: Ubuntu,sans-serif;
    font-weight: 700;
    padding: 0 80px;
    text-indent: 15px;
    text-align: center;
    float: left;
    z-index: 1;
    border-radius: 5px 5px 0 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    pointer-events: none;
}
    
    .example {
        text-align: center;
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
        i{
            background-color: #FE9600;
        }
    }
    .toc{
        width:200px;
		background-color: rgba(255,255,255,0);
		
        h3{
            padding: 7px 0 7px 16px;
            line-height: 1.143;
            font-size: 16px;
            font-weight: bold;
            color: #FE9600;
        }
        .ant-anchor-link-active > .ant-anchor-link-title{
            color: #FE9600;
        }
        .ant-anchor-link-title:hover{
            color: #FE9600;
        }
        .ant-anchor-ink-ball{
            border: 2px solid #FE9600;
        }
    }
	.toc-container {
		z-index: 98;
		width: 200px;
		height: 100%;
		background-color: rgba(255,255,255,0);
		right: calc((100% - 950px - 255px)/2);
		position: absolute !important;
		top: 480px;
		position: absolute;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.fixedTor{
		position: fixed;
		top: 100px;
		height: 452.8px;
	}
	.ant-anchor-link{
		font-size : 15px;
		color: #f5f5f5
	}
	.ant-anchor-link-title{
		font-size : 15px;
		color: #f5f5f5
	}
	.entry-content ul{
		border: none;
	}
    .flex-items{
        align-items: initial;
    }
    
    .single-reward{
        position: relative;
        width: 100%;
        margin: 35px auto;
        text-align: center;
        z-index: 90;
        .reward-open {
            position: relative;
            width: 40px;
            height: 40px;
            font-size: 18px;
            padding: 7px;
            color: #fff;
            text-align: center;
            display: inline-block;
            border-radius: 100%;
            background: #d34836;
            cursor: pointer;
        }
        .reward-open:hover .reward-main{
            display: block;
        }
        .reward-main{
            position: absolute;
            top: 40px;
            left: -157px;
            margin: 0;
            padding: 15px 0 0;
            width: 355px;
            background: 0 0;
            display: none;
            animation: main .4s;
        }
        .reward-row{
            list-style: disc;
            border: 1px dashed #e4e4e4;
            margin: 0 auto;
            padding: 20px 15px 10px;
            background: #f5f5f5;
            display: inline-block;
            border-radius: 4px;
            cursor: auto;
            li{
                list-style-type: none;
                padding: 0 12px;
                display: inline-block;
                img{
                    width: 130px;
                    max-width: 130px;
                    border-radius: 3px;
                    position: relative;
                }
                p{
                    color: #666666;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }

	.post-squares {
		overflow: hidden;
		width: 100%;
		margin: 55px 0;
		background: #000;
	}

	.post-squares.nextprev .previous {
		text-align: left;
	}
		
	.post-squares.nextprev a {
		width: 100%;
	}
	.post-squares.nextprev a {
		height: 150px;
		padding: 55px 40px;
		text-align: left;
	}

	.post-squares article, .post-squares a {
		position: relative;
		display: block;
		float: left;
		overflow: hidden;
		height: 100%;
		padding: 55px 25px;
		text-align: center;
	}

	.post-squares .background {
			position: absolute;
			z-index: 50;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: .4;
			background-size: cover;
			-webkit-transition: opacity .15s ease-out;
			-moz-transition: opacity .15s ease-out;
			transition: opacity .15s ease-out;
		}

		.post-squares.nextprev .previous .label {
			top: 40px;
			left: 40px;
		}

		.post-squares.nextprev .label {
			position: absolute;
			z-index: 100;
			top: 0;
		}

		.post-squares .label {
			font-size: 13px;
			display: block;
			text-transform: uppercase;
			color: rgba(255,255,255,.7);
		}

		.post-squares.nextprev .previous .info {
			bottom: 40px;
			left: 40px;
		}

		.post-squares.nextprev .info {
			position: absolute;
			width: 70%;
		}

		.post-squares .info {
			position: relative;
			z-index: 98;
		}

		.post-squares.nextprev .previous h3 {
			font-size: 14px;
		}

		.post-squares h3 {
			font-size: 17px;
			font-weight: 400;
			line-height: 30px;
			margin: 20px 0;
			color: #fff;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			display: block;
		}

		.post-squares.nextprev .next .label {
			top: 40px;
			right: 40px;
		}
		.post-squares.nextprev .label {
			position: absolute;
			z-index: 100;
			top: 0;
		}

		.post-squares.nextprev .next .info {
			right: 40px;
			bottom: 40px;
		}

		.post-squares.nextprev .next .info {
				text-align: right;
			}

	.lazyload{
		max-width: 100%;	
	}

	.post-squares article:hover>.background, .post-squares a:hover>.background {
		opacity: .6;
	}


	.post-squares .half {
		width: 50%;
		float: left;
	}
	.post-squares .full {
		width: 100%;
	}

    @media(max-width:768px){
        padding:10px;
        min-height:400px;
        .cell{
            margin:0;
        }
        .toc{
            display:none;
        }
    }
`;

export const CommentsWrapper = styled.div`
    padding-top: 40px;
    .comments-list-title{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 40px;
        color: #7d7d7d;
        font-weight: 400;
        span{
            font-size: 13px;
            font-weight: 400;
            color: #909090;
        }
    }
    .commentwrap{
        margin: auto 30px;
        .comment{
				display:block;
            .commentinfo{
                img{
                    width:40px;
                    height:40px;
                    border-radius: 100%;
                    box-shadow: 0 1px 10px -6px rgba(0,0,0,.5);
					transform: rotate(0);
					transition: all ease 1s;
					opacity: 1;
                }
			
                .commeta{
                    h2{
                        color: #FE9600;
                        font-size: 15px;
                        font-weight: 600;
                        line-height:23px;
                    }
                    h3{
                        line-height:20px;
                        font-size: 12px;
                        letter-spacing: 0px;
                        text-transform: none;
                        color: rgba(0,0,0,.35);
                    }
                }
                .comment-reply-link{
                    font-size: 12px;
                    display: block;
                    margin-left: 10px;
                    float: right;
                    text-transform: uppercase;
                    color: #fff;
                    height: 20px;
                    background-color: #FE9600;
                    line-height: 20px;
                    padding: 0 6px;
                    border-radius: 3px;
                    cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/ayuda.4f1cd0e7.cur),auto;
                    opacity: 0;
                    transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
                }

			&:hover .comment-reply-link{
                opacity: .9;
			 }
            }
           
            .body{
                line-height: 30px;
                color: #63686d;
                border-bottom: 1px solid rgba(0,0,0,.05);
                position: relative;
                p{
                    font-size: 14px;
                    line-height: 30px;
                    margin-top: 10px;
                    padding-bottom: 20px;
                    padding-left: 3px;
                    color: #63686d;
                    span{
                        font-size: 12px;
                        color: #909090;
                        margin-right:3px;
                    }
                }
            }
            hr{
                height: 0;
                width: 100%;
                background: #eee;
                border: 0;
                margin: 40px 0
            }
        }
		.children{
			 margin-left: 120px;
			 a {
				color: #000;
				padding: 0 5px;
				text-decoration: underline
				background-color: transparent;
				outline: 0;
				}
				a:hover{
				 color: orange;
				 text-decoration: none;
				}
			
				a:after
				{
						content: '';
						position: absolute;
						width: 80px;
						transform: scaleX(0);
						height: 3px;
						bottom: 25px;
						left: 6px;
						background-color: orange;
						transform-origin: bottom right;
						transition: transform .25s ease-out;
				}
				a:hover:after
				{
				 transform: scaleX(1);
				 transform-origin: bottom left;
				}
				.comment-at {
					color: #99ce00;
					text-decoration: none
			}
		}
		@media only screen and (max-width: 991px) {
		.children {
				margin-left: 60px;
		  }
		}
		 @media only screen and (max-width: 767px) {
			.children {
				margin-left: 30px;
			}
		}
		@media only screen and (max-width: 479px) {
			.children{
				margin-left: 15px;
			}
		
		}
    }
	
    .pagination{
        margin:20px 0;
        .ant-pagination-item{
            border:none;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-item a{
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-item-active a{
            color: #FE9600;
        }
        .ant-pagination-item:focus a, .ant-pagination-item:hover a{
            color: #FE9600;
        }
        .ant-pagination-next,.ant-pagination-prev{
            color: #FE9600;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-next span,.ant-pagination-prev span{
            color: #FE9600;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-next:hover span,.ant-pagination-prev:hover span{
            color: #FE9600;
        }
        .ant-pagination-disabled span{
            color: rgba(0, 0, 0, 0.25);
        }
        .ant-pagination-disabled:hover span{
            color: rgba(0, 0, 0, 0.25);
        }
    }
    .text{
        font-size:14px;
        padding: 20px 0;
    }

	.hoverable:hover .commentinfo .rotateImg{
	
			 transform: rotate(360deg);
			 -webkit-transform: rotate(360deg);
			 -moz-transform: rotate(360deg);
			  -o-transform: rotate(360deg);
			 -ms-transform: rotate(360deg)
				 opacity: .8;
	
	}

	.agent-icon {
			vertical-align: sub;
			width: 14px !important;
			height: 14px !important;
			border: 0;
			max-width: 100%;
			border-radius: 0% !important
			margin-right : 5px !important
		}

	.text{
		font-weight:bold;
		font-size:20px;
		color : red;
		margin-left : 200px;
	}


	.isAdmin {
		display: inline;
		font-size: 12px;
		line-height: 22px;
		color: #FFFFFF;
		text-transform: uppercase;
		background: pink;
		border-radius: 3px;
		padding: 0px 3px;
		vertical-align: bottom;
	}
`;

export const CommentTextarea = styled.div`
     position: relative
     .commentbody{
        width:100%;
        background: #fff;
        padding: 21px 21px 20px;
        font-size: 14px;
        display: block;
        height: 180px;
        margin-bottom: 10px;
        color: #535a63;
        border: 1px solid #ddd;
        background-color: transparent;
        background-image: url(https://view.moezx.cc/images/2018/03/24/comment-bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        resize: vertical;
        border-radius: 6px;
        outline:none;
     }
    .commentbody:focus {
		border-color: orange;
		transition: border-color .25s;
	}

	.input-label {
		position: absolute;
		left: 16px;
		top: 20px;
		padding: 0 6px;
		transform-origin: 0 0;
		pointer-events: none;
		transition: all .25s;
	}
	.commentbody:not(:placeholder-shown)~.input-label, .commentbody:focus~.input-label {
			color: #fff;
			background-color: orange;
			transform: scale(.75) translate(-2px,-37px);
			border-radius: 3px;
		}
    .form-submit {
        clear: both;
        display: block;
        overflow: hidden;
			
        input{
            background: #fff;
            border-radius: 6px;
            width:100%;
            margin: 0;
            padding: 15px 25px;
            text-transform: none;
            color: #535a63;
            -webkit-transition: all .1s ease-out;
            -moz-transition: all .1s ease-out;
            transition: all .1s ease-out;
            box-shadow: none;
            border: 1px solid #ccc;
            text-shadow: none;
            cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/ayuda.4f1cd0e7.cur),auto;
        }
        input:hover{
            border: 1px solid #fe9600;
            border-color: #FE9600;
            color: #FE9600;
        }
    }
`;

export const CommentHideTextarea = styled.div`
     position: relative
	 display:none;
     .commentbody{
        width:100%;
        background: #fff;
        padding: 21px 21px 20px;
        font-size: 14px;
        display: block;
        height: 180px;
        margin-bottom: 10px;
        color: #535a63;
        border: 1px solid #ddd;
        background-color: transparent;
        background-image: url(https://view.moezx.cc/images/2018/03/24/comment-bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        resize: vertical;
        border-radius: 6px;
        outline:none;
		
     }
    .commentbody:focus{
        border: 1px solid #FE9600; 
    }
    .form-submit {
        clear: both;
        display: block;
        overflow: hidden;
        margin: 20px 0;
        input{
            background: #fff;
            border-radius: 6px;
            width:100%;
            margin: 0;
            padding: 15px 25px;
            text-transform: none;
            color: #535a63;
            -webkit-transition: all .1s ease-out;
            -moz-transition: all .1s ease-out;
            transition: all .1s ease-out;
            box-shadow: none;
            border: 1px solid #ccc;
            text-shadow: none;
            cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/ayuda.4f1cd0e7.cur),auto;
        }
        input:hover{
            border: 1px solid #fe9600;
            border-color: #FE9600;
            color: #FE9600;
        }
    }
`;
