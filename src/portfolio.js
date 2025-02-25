import React from 'react'

const index = () => {
  return (
    <div><div style={{ background: "linear-gradient(to right, #2c3e50, #4ca1af)", minHeight: "100vh" }}>
    {/* 네비게이션 바 */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">소개</a></li>
            <li className="nav-item"><a className="nav-link" href="#training">국비지원 과정</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">프로젝트</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">연락처</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className="container py-5 mt-5">
      {/* 소개 페이지 */}
      <section id="about" className="mb-5 p-5 bg-light rounded">
        <h2 className="h2 text-center">커뮤니케이션을 중점으로 생각하는!</h2>
        <img src="/img/com.png" className="img-fluid d-block mx-auto mb-3" alt="소개 이미지" />
        <p className="text-center">하드웨어에서 소프트웨어로, 새로운 가능성을 향해 나아갑니다. 컴퓨터 수리부터 유지보수, 그리고 소트웨어까지 준비하는 이동광입니다!</p>
        <div className="text-end">
          {/* <a href="/details" className="btn btn-primary mt-3">더 자세히 보러 가기</a> */}
        </div>
      </section>
      
      
      
      {/* 국비지원 양성과정 */}
      <section id="training" className="mb-5 p-5 bg-light rounded shadow">
        <h2 className="h2 text-center mb-4">📚 국비지원 양성과정</h2>
        <div className="text-center">
          <img src="/img/ITEZ.png" alt="국비지원 양성과정" className="img-fluid mb-3" />
          <p className="text-muted">자바스프링 개발자 양성과정 (RPA + 시큐어 코딩 활용) RPA 및 시큐어 코딩을 활용한 자바스프링 개발자 양성과정을 통해 다양한 웹 개발 기술을 습득하였으며, 아래와 같은 핵심 기술들을 익혔습니다. UI 디자인 및 웹 퍼블리싱, 동적 화면 구현, 데이터베이스 활용, 자바 스프링 프레임워크, 크라우드 서버 구현 및 버전 관리, 웹 서비스 자동화 (RPA), 시큐어 코딩 등.</p>
        </div>
      </section>
      
      {/* 프로젝트 페이지 */}
      <section id="projects" className="mb-5 p-5 bg-light rounded">
        <h2 className="h2 text-center mb-4">🚀 휴일도안심 프로젝트</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4 mb-4">
              <img src=".img/ffff.png" alt="프로젝트 이미지" className="img-fluid mb-3" />
              <h4 className="text-primary">프로젝트 기간: 2024.12 ~ 2024.01</h4>
              <p className="text-muted"><strong>팀원:</strong> 5명</p>
              <p className="text-muted"><strong>주요 기능:</strong> 위치 기반 병원 & 약국 검색, 경로 안내, 리뷰 및 별점 작성</p>
              <p className="text-muted">로그인 시스템에는 시큐어 코딩 기법을 적용하고, 카카오 API를 활용한 간편 로그인 기능을 구현했습니다. UI/UX 디자인은 연령대가 높은 사용자도 쉽게 이용할 수 있도록 설계되었으며, 자동화 기술을 활용해 전국 병원 및 약국 데이터를 API를 통해 수집하고 데이터베이스에 저장하는 시스템을 구축하였습니다.</p>
              <div className="text-center">
                <img src="img/code.png" alt="코드 이미지" className="img-fluid mb-3" />
                <img src="img/program.png" alt="프로그램 이미지" className="img-fluid mb-3" />
              </div>
              <h5 className="mt-4">사용한 기술 및 도구</h5>
              <p className="text-muted">Spring Framework, React, HTML5, CSS3, JavaScript, MySQL, AWS, GitHub</p>
              <h5 className="mt-4">사용한 API 목록</h5>
              <ul className="text-muted">
                <li>국립중앙의료원 전국 약국 정보 조회 API</li>
                <li>국립중앙의료원 전국 병·의원 찾기 API</li>
                <li>한국천문연구원 공휴일 정보 조회 API</li>
                <li>카카오 로그인 API</li>
                <li>카카오 지도 API</li>
              </ul>
              <div className="text-center">
                <img src="img/main.png" alt="메인페이지" className="img-fluid mb-3" />
                <h4 className="text-primary">메인페이지 모습</h4>
                <p className="text-muted">간략한 설명 : 메인 페이지는 직관적인 UI/UX 설계를 통해 누구나 쉽게 사용할 수 있도록 디자인되었습니다. 주요 기능과 검색 창을 한눈에 확인할 수 있도록 배치하여, 사용자가 원하는 정보를 빠르게 찾을 수 있는 환경을 제공했습니다. 또한, 가독성을 높인 디자인과 명확한 아이콘을 활용하여 연령대와 상관없이 누구나 쉽게 접근할 수 있도록 구성하였습니다.</p>
              </div>
              <hr/>
              <div className="text-center">
                <h4>상세 페이지</h4>
                <img src="img/detail.png" alt="상세페이지" className="img-fluid mb-3" />
                <p className="text-muted">✅ 로그인 시 별점 ⭐과 후기 📝 작성이 가능하여 신뢰성 있는 리뷰를 제공할 수 있습니다. 🗺 지도와 연동된 UI를 통해 원하는 병·의원 및 약국의 위치를 쉽게 확인할 수 있습니다. 📍 검색한 장소를 클릭하면 해당 장소의 상세 정보와 위치를 한눈에 확인할 수 있어 빠르고 간편한 탐색이 가능합니다.</p>
              </div>
              <hr/>
              <br/>
              <div className="text-center">
                <h4>🤖자동화 RPA</h4>
                <br/>
                <img src="img/RPA.png" alt="RPA" className="img-fluid mb-3" />
                <h3>결과</h3>
                <img src="img/db.png" alt="RPA" className="img-fluid mb-3" />
                <p className="text-muted">🔄 공동 데이터(병원 정보)를 활용한 자동화 🏥 병원의 고유 ID와 이름을 이용해 카카오 지도 API에서 검색 후, 병원 후기와 별점⭐ 데이터를 수집했습니다. 📝 크롤링된 데이터는 데이터베이스(DB)에 저장하여 사용자가 신뢰할 수 있는 정보를 제공할 수 있도록 구현했습니다. 🖥 일반적으로 자동화 과정에서는 Python을 많이 사용하지만, 본 프로젝트에서는 학원의 수업 내용을 반영하여 🛠 RPA(UiPath)를 활용한 웹 크롤링을 수행했습니다! ⚙️ UiPath를 통해 비개발자도 쉽게 이해할 수 있는 비주얼 기반 자동화 프로세스를 구축했으며, 이를 통해 병원 정보 수집 및 데이터 자동 업데이트가 원활하게 이루어질 수 있도록 구현하였습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 연락처 */}
      <section id="contact" className="text-center p-5 bg-white rounded shadow">
        <h2 className="h2">📩 연락하기</h2>
        <p className="text-muted">이메일: korkor5863@naver.com</p>
        <p className="text-muted">연락처 : 010-2946-5864</p>
      </section>
    </div>
  </div></div>
  )
}

export default index