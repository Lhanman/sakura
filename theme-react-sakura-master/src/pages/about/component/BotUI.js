/* eslint-disable no-await-in-loop */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _BotUI from 'botui';

import 'botui/build/botui-theme-default.css';
import 'botui/build/botui.min.css';

class BotUI extends Component {
  async componentDidMount() {
    this.botui = new _BotUI('botui-app');

    const { messages, action, onAction } = this.props;

    for (let i = 0; i < messages.length; i++) {

      await this.botui.message.add({
		  content : messages[i].content,
		  delay : 1000,
		  loading : true,
	  
	  });
    }

    if (action) {
      this.botui.action[action[0].type]({
        action: action[0].action,
      }).then(onAction[0].handler);
    }
  }

  async componentDidUpdate() {
    const { messages, action, onAction } = this.props;

    // delete when over length
    while (await this.botui.message.get(messages.length)) {
      await this.botui.message.remove(messages.length);
    }

    // update when changed and insert when added
    for (let i = 0; i < messages.length; i++) {
      const oldMessage = await this.botui.message.get(i);
      const newMessage = messages[i];

      if (oldMessage) {
        if (
          !(
            oldMessage.type === newMessage.type &&
            oldMessage.human === newMessage.human &&
            oldMessage.content === newMessage.content
          )
        ) {
          await this.botui.message.update(i, newMessage);
        }
      } else {
        await this.botui.message.add(newMessage);
      }

		
    }
	
	for (let i = 0; i < action.length; i++) {
	  if (action) {
		  this.botui.action[action[i].type]({
			addMessage: false,
			action: action[i].action,
		  }).then(onAction[i].handler);
		}

	}

    
  }

  render() {
    const { className, messages, action, onAction, ...otherProps } = this.props;
    const classNames = ['botui-app-container'];

    if (className) {
      classNames.push(className);
    }

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div className={classNames.join(' ')} id="botui-app" {...otherProps}>
        <bot-ui />
      </div>
    );
  }
}

BotUI.propTypes = {
  action: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAction: PropTypes.func,
};

BotUI.defaultProps = {
  className: '',
  action: null,
  onAction: () => {},
};

export default BotUI;
