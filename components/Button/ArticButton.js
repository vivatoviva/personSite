
import React from 'react'
import WithLink from './../WithLink'

class ArticButton extends React.Component {
  render() {
    const buttonText = this.props.children || '阅读全文 »';
    const { href, as, paramsData } = this.props;
    return (
      <button><WithLink href={href} as={as} paramsData={paramsData}>{buttonText}</WithLink><style jsx>{`
      button {
        background-color: #fff;
        outline: 0;
        border: 3px solid rgb(85, 85, 85);
        cursor: pointer;
        width: 120px;
        height: 36px;
        font-size: 17px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        transition: 300ms all ease;
        margin-top: 50px;
      }
      button:hover {
        border-color: #000;
        background-color: #000;
        color: #fff;
      }
      `}</style></button>
    )
  }
}
export default ArticButton