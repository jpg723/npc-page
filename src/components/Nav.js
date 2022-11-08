import React, { Component } from 'react';
import '../css/Header/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className="navi">
          <img className="bg" src="Header/frame_black.png"/>
          <div className="forums">
            <div>게시판</div>
            <div>과제 제출</div>
            <div>출석 관리</div>
            <div>일정</div>
            <div>기타</div>
          </div>
        </div>
        <div className="position">
          <img className="bg" src="Header/frame_gray.png"/>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Nav;