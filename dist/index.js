'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icons = require('@ant-design/icons');
var antd = require('antd');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DocViewerPlus = function (_a) {
    var _b;
    var previewFile = _a.previewFile, response = _a.response, visibleViewerPlus = _a.visibleViewerPlus, onVisibleChange = _a.onVisibleChange;
    var fileUrl = (previewFile === null || previewFile === void 0 ? void 0 : previewFile.fileUrl) || '';
    var fileName = (previewFile === null || previewFile === void 0 ? void 0 : previewFile.fileName) || '';
    var isBase64 = function (str) {
        return /^data:[^;]+;base64,/i.test(str);
    };
    var ext = isBase64(fileUrl) ? 'jpg' : ((_b = fileUrl.split('.').pop()) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
    var fileType = ['jpg', 'jpeg', 'png', 'gif'].includes(ext)
        ? 'image'
        : ext === 'pdf'
            ? 'pdf'
            : ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(ext)
                ? 'office'
                : ext === 'ofd'
                    ? 'ofd'
                    : ext === 'mp4'
                        ? 'video'
                        : 'unknown';
    var handleDownload = function () {
        var link = document.createElement('a');
        link.href = (response === null || response === void 0 ? void 0 : response.url) || fileUrl;
        link.download = fileName || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    if ((fileType === 'unknown' || !fileUrl) && visibleViewerPlus) {
        handleDownload();
        return null;
    }
    var overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: 20,
        boxSizing: 'border-box',
    };
    var containerStyle = {
        position: 'relative',
        width: '80%',
        maxWidth: '1200px',
    };
    var headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f5f5f5',
    };
    var titleStyle = {
        flexGrow: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '70%',
    };
    var iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };
    var iconStyle = {
        fontSize: '20px',
        cursor: 'pointer',
        marginLeft: '10px',
    };
    return visibleViewerPlus ? (React__default["default"].createElement(React__default["default"].Fragment, null, fileType === 'image' ? (React__default["default"].createElement(antd.Image, { alt: "preview", style: { width: '100%', display: 'none' }, src: fileUrl, preview: {
            visible: true,
            onVisibleChange: onVisibleChange,
        } })) : (React__default["default"].createElement("div", { style: overlayStyle, onClick: onVisibleChange },
        React__default["default"].createElement("div", { style: containerStyle, onClick: function (e) { return e.stopPropagation(); } },
            React__default["default"].createElement("div", { style: headerStyle },
                React__default["default"].createElement("div", { style: titleStyle }, fileName),
                React__default["default"].createElement("div", { style: iconContainerStyle },
                    fileType === 'office' && (React__default["default"].createElement(icons.DownloadOutlined, { onClick: handleDownload, style: iconStyle })),
                    React__default["default"].createElement(icons.CloseOutlined, { onClick: onVisibleChange, style: iconStyle }))),
            fileType === 'video' ? (React__default["default"].createElement("video", { controls: true, width: "100%", height: "700px" },
                React__default["default"].createElement("source", { src: fileUrl, type: "video/mp4" }),
                "Your browser does not support the video tag.")) : fileType === 'ofd' ? (React__default["default"].createElement("iframe", { src: "https://ofd.xdocin.com/view?src=".concat(encodeURIComponent(fileUrl)), title: "OFD \u6587\u6863\u9884\u89C8", width: "100%", height: "700px", style: { border: 'none' } })) : (React__default["default"].createElement("iframe", { src: fileType === 'office'
                    ? "https://view.officeapps.live.com/op/embed.aspx?src=".concat(encodeURIComponent(fileUrl))
                    : fileUrl, title: "\u6587\u6863\u9884\u89C8", width: "100%", height: "700px", style: { border: 'none' } }))))))) : null;
};

exports.DocViewerPlus = DocViewerPlus;
//# sourceMappingURL=index.js.map
