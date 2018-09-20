import React from 'react'


// 圆角button
// 点击阅读的button

class IndexButton extends React.Component {
  render() {
    const { buttonTitle, buttonStyle, children } = this.props;
    return (
      <div>
        <div className="button">
          {children || buttonTitle}
        </div>
        <style jsx>{`
          .button{
            padding: 15px 30px;
            border: 2px solid #999;
            border-radius: 30px;
            text-align: center;
            color: #999;
            font-weight: 500;
            font-size: 20px;
            cursor: pointer;
            transition: .3s all;
          }
          .button:hover {
            color: #000;
            border-color: #000;
          }
        `}</style>
      </div>
    )
  }
}
export default IndexButton;
