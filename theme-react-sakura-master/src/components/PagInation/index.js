import React from "react";
import {Spin} from "antd";
import {PagWrapper} from './style';

const PagInation = (props) => {
    const {page, finished, loading, id} = props;
    if (finished) {
        return (
            <PagWrapper>
                <p>------------我是有底线的！！！----------</p>
            </PagWrapper>
        )
    } else {
        if (loading) {
            return (
                <PagWrapper>
                    <div className="example">
                        <Spin size="large"/>
                    </div>
                </PagWrapper>
            )
        } else {
            return (
                <PagWrapper>
                    <div onClick={() => props.getList(page, id)} className='btn'>Previous</div>
                </PagWrapper>
            )
        }
    }
};

export default PagInation
