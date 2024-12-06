import { useState } from "react";
import { DocViewerPlus } from "react-doc-viewer-plus";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <h1>Document Viewer Demo</h1>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: "8px 16px",
          marginBottom: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {visible ? "关闭预览" : "点击预览"}
      </button>
      <div style={{ height: "750px" }}>
        <DocViewerPlus
          previewFile={{
            fileUrl:
              "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            fileName: "PnJuuZ.png",
          }}
          visibleViewerPlus={visible}
          onVisibleChange={() => setVisible(!visible)}
        />
      </div>
    </div>
  );
}

export default App;
