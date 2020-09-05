import React from "react";
import {Spin} from "antd";
import {MessagePagWrapper} from './style';

const MessagePage = (props) => {
    const {page, finished, loading, id} = props;
    if (finished) {
        return (
            <MessagePagWrapper>
                <p>很高兴你翻到这里，但是真的没有了...</p>
            </MessagePagWrapper>
        )
    } else {
        if (loading) {
            return (
                <MessagePagWrapper>
                    <div className="example">
                        <Spin size="large"/>
                    </div>
                </MessagePagWrapper>
            )
        } else {
            return (
                <MessagePagWrapper>
                    <div onClick={() => props.getList(page, id)} className='btn'>Previous</div>
                </MessagePagWrapper>
            )
        }
    }
};

export default MessagePage
