import styled from "styled-components";

export const MessageWrapper = styled.div`

.msgIsReadNum
{
	  margin:0px;
      padding:0px;
      background-color:	#FFB6C1;
      font-family:"Î¢ÈíÑÅºÚ","ºÚÌå","ËÎÌå";
      font-size:14px;
      height:36px;

	
            
}

.msgType{
    display: inline-block;
    height: 20px;
    min-width: 10px;
    line-height: 18px;
    padding: 0 5px;
    color: #fff;
    font-size: 12px;
    vertical-align: baseline;
    white-space: nowrap;
    border-radius: 0;
    font-weight: 700;
    text-align: center;
    background-color: orange;
    border: 1px solid #e0e0e0;
	margin-right: 15px;
}
.msgTypeRead{
    display: inline-block;
    height: 20px;
    min-width: 10px;
    line-height: 18px;
    padding: 0 5px;
    color: #fff;
    font-size: 12px;
    vertical-align: baseline;
    white-space: nowrap;
    border-radius: 0;
    font-weight: 700;
    text-align: center;
    background-color: gray;
    border: 1px solid #e0e0e0;
}
.headPortrait{
    width: 100px;
    height: 100px;
    display: inline-block;
}
.headPortrait img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

			img{
                    width:40px;
                    height:40px;
                    border-radius: 100%;
                    box-shadow: 0 1px 10px -6px rgba(0,0,0,.5);
                    margin-right: 15px;
					transform: rotate(0);
					transition: all ease 1s;
					opacity: 1;
                }
				img:hover {
					   transform: rotate(360deg);
					   -webkit-transform: rotate(360deg);
					   -moz-transform: rotate(360deg);
					   -o-transform: rotate(360deg);
					   -ms-transform: rotate(360deg)
					   opacity: .8;
				}

`;