import React, {PureComponent} from 'react';
import {Footers} from './style';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Footer extends PureComponent {
    render() {
        const {copyright, domain, icp, title,gonganBeian} = this.props.confing.toJS();
        return (
            <Footers>
                <div className='site-info'>
                    <div className='footertext'>
                        <p className='foo-logo'/>
                        <p className='name'>
                            <span>
                                <a href={domain} rel="noopener noreferrer" target={'_blank'}>{copyright}</a>
                            </span>
                        </p>
                        <p>© 2020 {title} <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">{icp}</a></p>
						<p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602007944" target='_blank' rel="noopener noreferrer">
							<img style={{'marginBottom':'-5px'}} src='http://static.lhanman.cn/static/images/beian/beian.png'/>
							{gonganBeian}
						</a>
						</p>
                    </div>
                </div>
            </Footers>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        confing: state.getIn(['header', 'confing']),
    }
};

export default connect(mapStateToProps)(withRouter(Footer));
