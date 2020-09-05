import styled from "styled-components";

export const MessageWrapper = styled.div`
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

export const MessageTop = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 800px;
    overflow: hidden;
	margin : 0 auto;
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
    min-height:600px;
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




	.site-main {
		padding: 40px 0 0;
	}
	
	.hentry {
			margin: 0 0 1.5em;
		}
		
	.toc-container {
		z-index: 98;
		width: 200px;
		height: 100%;
		background-color: rgba(255,255,255,0);
		transform: translateX(0);
		right: calc((100% - 950px - 250px)/2);
		position: absolute !important;
		top: 480px;
		position: absolute;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.toc {
		overflow-y: auto;
	}

	.toc {
		position: -webkit-sticky;
		position: sticky;
		top: 100px;
	}

	.entry-content {
		position: relative;
	}

	.entry-content:before{
		content: "";
		display: table;
		table-layout: fixed;
	}

	*:before, *:after {
		box-sizing: inherit;
	}

	.entry-content:after{
		clear: both
	}

	.entry-content:after{
		content: "";
		display: table;
		table-layout: fixed;
	}

	.poem-wrap {
		position: relative;
		width: 730px;
		max-width: 80%;
		border: 2px solid #797979;
		border-top: none;
		text-align: center;
		margin: 80px auto;
	}

	* {
		box-sizing: border-box;
	}

	.poem-left {
		left: 0;
	}

	.poem-border {
		position: absolute;
		height: 2px;
		width: 27%;
		background-color: #797979;
	}

	.poem-right {
		right: 0;
	}

	.poem-border {
		position: absolute;
		height: 2px;
		width: 27%;
		background-color: #797979;
	}

	.poem-wrap h1 {
		position: relative;
		margin-top: -20px;
		display: inline-block;
		letter-spacing: 4px;
		color: #797979;
		clear: both;
		font-weight: bold;

	
	}

	h1 {
			font-size: 2em;
			margin: .67em 0;
		}

	.poem-wrap p#poem {
		font-size: 25px;
	}

	.poem-wrap p {
		width: 70%;
		margin: auto;
		line-height: 30px;
		color: #797979;
	}

	.entry-content p {
		line-height: 30px;
	}

	.entry-content p {
		color: #797979;
	}

	p {
		margin-bottom: 1.5em;
		cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/texto.cur),auto;
		text-shadow: 0px 0px 1px rgba(0,0,0,.1);
	}

	.poem-wrap p#info {
		font-size: 15px;
		margin: 15px auto;
	}

	.poem-wrap p {
		width: 70%;
		margin: auto;
		line-height: 30px;
		color: #797979;
	}


	.entry-footer {
		margin: 0 0 0 17%;
		list-style: none;
		display: block;
	}

	.cell{
		margin-left:10px;
	}



	.commentwrap .children a:after {
		bottom: 44px;
}

`;
