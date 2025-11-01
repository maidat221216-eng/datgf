import "./assets/css/main.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://phongvu.vn/cong-nghe/wp-content/uploads/2025/07/hinh-nen-minecraft-46-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // lớp mờ nhẹ để dễ nhìn
          minHeight: "100vh",
          paddingBottom: "20px",
        }}
      >
        <header>
          <div id="divheader" className="header1">
            <div id="banner" className="banner1">
              <div id="topleft">
                <ul className="ul1">
                  <li>
                    <a href="/#">TRANG CHỦ</a>
                  </li>
                  <li>
                    <a href="/trang1">EGOV</a>
                  </li>
                  <li>
                    <a href="/trang2">SINH VIÊN</a>
                  </li>
                </ul>
              </div>

              {/* ✅ Logo mới */}
              <div id="logo" className="logo1">
                <img
                  src="https://i.ibb.co/6RdFm5RG/46763005-a5d2-42ab-b860-1accf2a02129-removebg-preview.png"
                  width="300"
                  alt="Logo"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                  }}
                />
              </div>

              <div id="divtimkiem" style={{ width: "300px", color: "white" }}>
                Phần tìm kiếm
              </div>
            </div>

            <div id="divmenu" className="menu"></div>
          </div>
        </header>

        <main>
          <div id="container" className="container" style={{ color: "white" }}>
            <Outlet />
          </div>
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
