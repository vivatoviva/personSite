import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Title extends React.Component {
  render() {

    const { title, updateTime, createTime, categroyName, tags, readNum } = this.props;
    return <div>
      <h1><span>{title}</span></h1>
      <div className="data">
        <ul>
          <li><FontAwesomeIcon icon="calendar" style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/>发表于：{createTime}</li>
          <li><FontAwesomeIcon icon="calendar-check" style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/>更新于：{updateTime}</li>
          <li><FontAwesomeIcon icon="folder" style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/>分类于： {categroyName}</li>
          <li><FontAwesomeIcon icon="eye" style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/>阅读次数：{readNum}</li>
          { tags ? <li><FontAwesomeIcon icon="tags" style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/>标签: {tags.map(item => item.name).join('、')}</li> : '' }
        </ul>
      </div>
      
      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: 500;
          margin-bottom: 20px;
        }
        ul {
          display: flex;
          justify-content: center;

        }
        li {
          padding: 0 10px 0 10px;
          line-height: 1;
          color: rgb(153, 153, 153);
        }
        li + li {
          border-left: 1.5px solid rgb(153, 153, 153);
        }
        h1 span:hover {
          border-bottom: 2px solid #000;
        }
      `}</style>
    </div>
  }
}