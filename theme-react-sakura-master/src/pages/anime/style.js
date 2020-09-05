import styled from "styled-components";

export const AnimeWrapper = styled.div`

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

		
	.site-content {
	   max-width: 800px;
		padding: 50px 10px;
		margin-left: auto;
		margin-right: auto;
		background-color: rgba(255,255,255,.8);
}

	header.page-header {
		position: relative;
		text-align: center;
		margin-bottom: 50px;
		color: #9C9C9C
	}

	h1.cat-title {
		display: inline-block;
		font-size: 25px;
		font-weight: 400;
		padding-right: 15px;
		border-right: 1px dashed #ddd;
		color: #676767
	}
	
	h1.cat-title:before{
		content: "{";
			color: #f8ba0b;
			font-size: 1.5em;
			margin-right: 6px;
			vertical-align: sub;
	}

	.cat-des p {
		display: inline-block;
		padding-left: 10px;
}

	h1.cat-title:after{
		content: "}";
		color: #f8ba0b;
		font-size: 1.5em;
		margin-left: 6px;
		vertical-align: sub
	}



`;



export const MainWrapper = styled.div`

	 .example{
        height:52px;
        line-height:52px;
        text-align: center;
        i{
            background-color: #FE9600;
        }
    }

	.hentry {
	    margin: 0 0 1.5em
	}
	@font-face{
		font-family: Merriweather Sans
		src : url('../font/MerriweatherSans.woff2');
	}
	.chinese-font {
    font-family: Merriweather Sans,Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
		}

	article{
		display:block
	}
	
	.bangumi {
    margin-top: 40px;
	}


:after,
:before {
    box-sizing: inherit
}

*, *:before, *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}



.bangumi .row {
	margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}

.bangumi .row:after {
    content: "";
    display: table;
    clear: both;
}



.row .col.m6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
}



.row .col {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 .75rem;
    min-height: 1px;
}



.card {
    position: relative;
    margin: .5rem 0 1rem 0;
    background-color: #fff;
    -webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s, -webkit-box-shadow .25s;
    border-radius: 2px;

}

.col .hoverable {
    -webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s, -webkit-box-shadow .25s;
}

.col .hoverable:hover {
    -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.flowable
{
	overflow:visible
}

.unflowable
{
	overflow : hidden
}

.card {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	
}

.card .card-image {
    position: relative;
}

.waves-block {
    display: block;
}

.waves-effect {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
}


.lazyload
{
	-webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    -webkit-transition: .3s -webkit-filter linear;
    -moz-transition: .3s -moz-filter linear;
    -moz-transition: .3s filter linear;
    -ms-transition: .3s -ms-filter linear;
    -o-transition: .3s -o-filter linear;
    transition: .3s filter linear,.3s -webkit-filter linear;
}

 .post-list-show {
        animation: post-list-show .5s;
        -webkit-animation: post-list-show .5s;
        opacity: 1;
    }
    @keyframes post-list-show {
        0% {
            opacity: 0;
           
        }
        100% {
            opacity: 1;
           
        }
    }

.itempic {
    min-height: 280px;
    max-height: 300px;
    background-position-x: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
	transition: background-position-y 7s linear;
}

.itempic:hover{
	background-position-y: bottom;
}
.card .card-content {
    padding: 24px;
    border-radius: 0 0 2px 2px;
}

.card .card-content .card-title {
    display: block;
    line-height: 32px;
    margin-bottom: 8px;
}
.card .card-title.activator {
    cursor: pointer;
}
.card .card-title {
    font-size: 24px;
    font-weight: 300;
}
.grey-text.text-darken-4 {
    color: #212121 !important;
}
.grey-text {
    color: #9e9e9e !important;
}
.should-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 95%;
}

.card .card-content .card-title i {
    line-height: 32px;
}

.bangumi.right
{
	float: right !important;
}	

i .right
{
	float: right;
    margin-left: 15px;
}


.should-ellipsis i {
    position: absolute;
    right: 24px;
}

.card .card-content p {
    margin: 0;
}

.should-ellipsis-full {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

ul:not(.browser-default) {
    padding-left: 0;
    list-style-type: none;
}

ul {
    list-style: disc;
}
ul, ol {
    margin: 0 0 1.5em 3em;
}

.skill-list{
	list-style: none;
    margin: 0;
    padding-top: 25px;
}

ul:not(.browser-default)>li {
    list-style-type: none;
}

.skill{
	margin-bottom: 1em;
    position: relative;

}

.skill div {
    color: #fff;
    line-height: 1;
    position: absolute;
    top: 4px;
    font-size: 1em;
    margin-top: 0;
    margin-bottom: 0;
    text-shadow: 0 0 1px rgba(0,0,0,.22);
    width: 100%;
    text-align: center;
}

progress
{
	display: inline-block;
    vertical-align: baseline
	color:orange; 
}

progress
{
	-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-size: auto;
    height: 24px;
    width: 100%
}

progress::-webkit-progress-bar

{

   background:#2F4F4F;

}

progress::-webkit-progress-value
{
	background: #FF8C00;
}

progress::-moz-progress-bar
{

     background:orange;

}

.card .card-reveal {
	display:none;
    padding: 24px;
    position: absolute;
    background-color: #fff;
    width: 100%;
    overflow-y: auto;
    left: 0;
    top: 100%;
    height: 100%;
    z-index: 3;
	transform: translateY(0%);
	-webkit-transition: .3s ease-out;
    transition: all .3s ease-out;

}

.card-reveal i
{
	float: right;
    margin-left: 15px;
}

.card-reveal .right
{
	float: right !important;
}


.card .card-reveal .card-title {
    cursor: pointer;
    display: block;
}

.card-reveal p {
	margin-top : 20px
	margin-bottom: 1.5em;
	text-shadow: 0px 0px 1px rgba(0,0,0,.1);
	    background-attachment: fixed
}
.card-reveal span
{
	color: #404040;
    font-size: 15px;
    line-height: 1.5;
}


.card .card-unreveal {
	display:block;
    
	transform: translateY(-100%);
	

}


.long-title
{
	margin-bottom : 10px;
}

.cell{
	margin-left : 10px;
}


















.bangumi-summary {
    height: 65%;
    white-space: normal;
    display: none;
    font-weight: bold;
}
.bangumi-status-bar {
    top: 0;
    bottom: 0;
    max-width: 100%;
    position: absolute;
    background: #dc143c;
}
.bangumi-status, .bangumi-status p {
    position: relative;
}
.bangumi-status {
    background: rgba(0, 0, 0, .6);
}

@media screen and (min-width: 400px) {
    .bangumi .column {
        max-width: 50%;
        flex: 0 0 50%;
    }
    .bangumi-item .bangumi-info{
        height: 50%;
        transform: translateY(140%);
    }
    .bangumi-title {
        height: 20%;
    }
}
@media screen and (min-width: 600px) {
    .bangumi .column {
        max-width: 33.3333%;
        flex: 0 0 33.3333%;
    }
    .bangumi-title {
        height: 30%;
    }
    .bangumi-item .bangumi-info{
        height: 45%;
        transform: translateY(140%);
    }
}
@media screen and (min-width: 900px) {
    .bangumi .column {
        max-width: 25%;
        flex: 0 0 25%;
    }
    .bangumi-item .bangumi-info{
        height: 100%;
        transform: translateY(85%);
    }
    .bangumi-item:hover .bangumi-info {
        transform: translateY(0);
    }
    .bangumi-item:hover img{
        filter: blur(3px);
    }
    body.dark .bangumi-item:hover img{
        filter: brightness(0.8) blur(3px);
    }
    .bangumi-title {
        height: 15%;
    }
    .bangumi-summary{
        display: block;
    }
    .bangumi-status {
        height: 10%;
    }
}
@media screen and (min-width: 1200px) {
    .bangumi-item .bangumi-info{
        height: 75%;
        transform: translateY(115%);
    }
    .bangumi-item:hover .bangumi-info {
        transform: translateY(35%);
    }
    .bangumi-title {
        height: 10%;
    }
}

#bangumi-pagination {
    width: 100%;
    margin-top: 80px;
    padding: 20px 0;
    font-size: 36px;
    text-align: center;
}

.bangumi-next{
    font-family: sans-serif;
    color: #e67474;
    position: relative;
    padding: 13px 35px;
    overflow: hidden;
}

.bangumi-next:before {
    content: ' ';
    background-color: pink;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    position: absolute;
    transition: all 5s;
    z-index: -1;
}
.bangumi-next.loading:before{
    display: none !important;
}
.bangumi-next:hover:before {
    height: 100%;
}
.bangumi-next i {
    color: orange;
}






    min-height:600px;
    max-width: 800px;
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
   
    .tags-list{
        span{
            padding: 2px 20px;
            margin-right:15px;
            margin-bottom:15px;
        }
        a{
            line-height:22px;
        }
        p{
            width: 100%;
            padding: 20px 0;
            text-align: center;
            margin: 40px 0 80px;
            display: inline-block;
            color: #989898;
            font-size: 15px;
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
`;
