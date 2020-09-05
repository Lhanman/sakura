import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	footer{
		background : none !important;
	}
`
export const AboutWrapper = styled.div`
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

export const AboutTop = styled.div`
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
    &:after{
        content: '';
        width: 10%;
        height: 4.375rem;
        background: #fff;
        left: -25%;
        bottom: -2.875rem;
        border-radius: 100%;
        position: absolute;
    }
	&:hover .pattern-attachment-img {
			-webkit-transform: scale(1.07);
			transform: scale(1.07);
			-ms-transform: scale(1.07);
		}
    .pattern-attachment-img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-origin: border-box;
        width: 100%;
        height: 400px;
		transition: transform .5s ease-out;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }
    .pattern-header {
        position: absolute;
        top: 45%;
        left: 0;
        right: 0;
        text-align: center;
        color: #fff;
        z-index: 1;
        h1{
            color: #fff;
            font-size: 40px;
            font-weight: 500;
            width: 80%;
            margin: auto;
            padding: 0;
            border: 0;
        }
    }
    @media(max-width:768px){
        .pattern-attachment-img{
            height:280px;
        }
        .pattern-header {
            top:40%;
            h1{
                font-size:24px;
            }
        }
    }
`;

export const MainWrapper = styled.div`
    min-height:500px;
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:50px;
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
    .example{
        height:52px;
        line-height:52px;
        text-align: center;
        i{
            background-color: #FE9600;
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

	.botui-container{
		width: 100%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}

	@media (min-width: 400px)
		.botui-app-container {
			width: 400px;
			height: 500px;
			margin: 0 auto;
		}
	.botui-app-container {
			width: 100%;
			height: 100%;
			line-height: 1;
		}
	@media (min-width: 400px)
		.popcontainer {
			height: 100%;
			margin: 0 auto;
		}

	.popcontainer {
			width: 100%;
			height: 100%;
			line-height: 1;
		}
	.botui-container {
		font-size: 14px;
		background-color: transparent;
		font-family: merriweather sans,Helvetica,Tahoma,Arial,pingfang sc,hiragino sans gb,microsoft yahei,wenquanyi micro hei,sans-serif;
	}

	.botui-messages-container {
		padding: 10px 20px;
		font-weight: bold;
	}

	.botui-message-content.text {
		 line-height: 1.3;
	}

	botui-message-content {
		width: auto;
		max-width: 85%;
		display: inline-block;
	}

	.botui-message-content {
		padding: 7px 13px;
		border-radius: 15px;
		color: #595a5a;
		background-color: #ebebeb;
	}
button.botui-actions-buttons-button{
	cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/ayuda.4f1cd0e7.cur),auto;
	font-family: merriweather sans,Helvetica,Tahoma,Arial,pingfang sc,hiragino sans gb,microsoft yahei,wenquanyi micro hei,sans-serif;

}



center p {
    margin-bottom: 1.5em;
    cursor: url(https://cdn.jsdelivr.net/gh/spirit1431007/cdn@0.95/img/Sakura/cursor/texto.cur),auto;
}

center h4{
	font-family: sans-serif;
	display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
	background-color: transparent;
}



@font-face{
		font-family: 'Moe-Mashiro'
		src: url('Moe-Mashiro.eot');
		src: url('Moe-Mashiro.eot?#iefix') format('embedded-opentype'),
			url('Moe-Mashiro.woff2') format('woff2'),
			url('Moe-Mashiro.woff') format('woff'),
			url('Moe-Mashiro.ttf') format('truetype'),
			url('Moe-Mashiro.svg#Moe-Mashiro') format('svg');
		font-weight: normal;
		font-style: normal;
		
		src : url('../font/Moe-Mashiro.woff2');
	}


.moe-mashiro {
	
    font-family: 'Moe-Mashiro','Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
}

.justP{
    margin-bottom: 1.5em;
    cursor: url(https://cdn.jsdelivr.net/gh/spirit1431007/cdn@0.95/img/Sakura/cursor/texto.cur),auto;
	font-size:15px;
	color: #171313;
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

h3{
	display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

code{
	background: rgba(254,250,199,1);
    color: #e67474;
    word-break: break-word;
    font-family: 'Source Code Pro',monospace,Helvetica,Tahoma,Arial,STXihei,"STHeiti Light","Microsoft YaHei",sans-serif;
    padding: 2px;
    text-shadow: none;
    border-radius: 5px;
	font-size: .9375rem;
}

span{
	font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
}
	
.emotion-item {
	cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur),auto;
    margin: 6px;
    display: inline-block;
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: -8px;
}

@media (max-width: 860px)
.emotion-item {
    transform: scale(.6);
    margin-bottom: -10px;
}

.emotion-inline {
    padding-left: 0 !important;
    padding-right: 0 !important;
}


.img{
	
	width: 32px;
    height: 864px;
    max-width: 32px;
    background: top/32px no-repeat;
    background-image: none;
	-webkit-animation: im-emotion-step 1.08s steps(27) infinite;
    animation: im-emotion-step 1.08s steps(27) infinite;
    animation-duration: 1.08s;
    animation-timing-function: steps(27);
	border: 0;

}
@-webkit-keyframes im-emotion-step{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes im-emotion-step{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}

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

	.ant-collapse > .ant-collapse-item > .ant-collapse-header{
		cursor: url(https://static.lhanman.cn/static/assets/sakura/static/media/ayuda.4f1cd0e7.cur),auto;
	}

`;
