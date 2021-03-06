import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avtor from '../Avtor';
import Icon from '../Icon';
import Input from '../Input';

class Comment extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    avtorImgUrl: PropTypes.string.isRequired,
    defaultLikeNum: PropTypes.number,
    time: PropTypes.number.isRequired,
    likeFun: PropTypes.func,
  }

  static defaultProps = {
    defaultLikeNum: 0,
    likeFun: null,
  }

  constructor(props) {
    super(props);
    this.hide = false;
    this.state = {
      likeNum: props.defaultLikeNum,
      likeActive: false,
      replayActive: false,
    };
  }

  handleLikeClick = () => {
    const { likeFun } = this.props;
    this.setState(({ likeNum, likeActive }) => ({
      likeNum: likeActive ? likeNum - 1 : likeNum + 1,
      likeActive: !likeActive,
    }));
    if (likeFun) {
      likeFun();
    }
  }

  handleReployClick = () => {
    this.setState(({ replayActive }) => ({
      replayActive: !replayActive,
    }));
  }

  handleInputHide = () => {
    // 避免点击回复按钮的时候，首先执行handleInputHide，然后执行handleReployClick，通过时间循环，将执行顺序向后延迟
    setTimeout(() => {
      this.setState({
        replayActive: false,
      });
    }, 100);
  }

  render() {
    const {
      avtorImgUrl,
      content,
      userName,
      time,
    } = this.props;
    const { likeNum, likeActive, replayActive } = this.state;
    return (
      <div className="wrapper">
        <div className="avtor">
          <Avtor imgUrl={avtorImgUrl} />
        </div>
        <div className="content-box">
          <p>{userName}</p>
          <p>{content}</p>
          <div className="operate">
            {/* 评论操作 */}
            <div className="operate-action">
              <span>{time}</span>
              <div className="action">
                <div
                  role="presentation"
                  onClick={this.handleLikeClick}
                  className={`${likeActive ? 'active like-action' : 'like-action'}`}
                >
                  <Icon type="thumbs-up icon" />
                  <span>{likeNum}</span>
                </div>
                <div
                  role="presentation"
                  onClick={this.handleReployClick}
                  className="reply-action"
                >
                  <Icon type="comment icon" />
                  <span>回复</span>
                </div>
              </div>
            </div>
          </div>
          {
          replayActive && (
            <Input
              defaultInputFocus
              hide={this.handleInputHide}
            />
          )
          }
          <div className="reply-list">
            {/* 回复列表 */}
          </div>
        </div>
        <style jsx>
          {`
            .wrapper {
              width: 100%;
              overflow: hidden;
            }
            .avtor {
              width: 50px;
              height: 50px;
              float: left;
              box-sizing: border-box;
              padding: 5px;
            }
            .content-box {
              float: left;
              width: calc( 100% - 50px );
              box-sizing: border-box;
              padding: 0px 20px;
            }
            .content-box p {
              color: #333;
              font-sizing: 30px;
              min-height: 25px;
              line-height: 25px;
            }
            .operate-action {
              display: flex;
              color: #8a9aa9;
              justify-content: space-between;
            }
            .operate-action .action div {
              display: inline-block;
              margin-left: 10px;
              cursor: pointer;
            }
            .action span {
              margin-left: 10px;
              display: inline-block;
              user-select: none;
            }
            .like-action span {
              width: 40px;
            }
            .action div:hover {
              color: #8a93a0;
            }
            .action div.active {
              color: rgb(55, 199, 0);
            }
          `}
        </style>
      </div>
    );
  }
}
export default Comment;
