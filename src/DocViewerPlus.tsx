import { CloseOutlined, DownloadOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';

export interface DocViewerPlusProps {
  previewFile?: {
    fileUrl?: string;
    fileName?: string;
  };
  response?: {
    url?: string;
  };
  visibleViewerPlus: boolean;
  onVisibleChange: () => void;
}

export const DocViewerPlus: React.FC<DocViewerPlusProps> = ({
  previewFile,
  response,
  visibleViewerPlus,
  onVisibleChange,
}) => {
  const fileUrl = previewFile?.fileUrl || '';
  const fileName = previewFile?.fileName || '';
  const isBase64 = (str: string) => {
    return /^data:[^;]+;base64,/i.test(str);
  };

  const ext = isBase64(fileUrl) ? 'jpg' : fileUrl.split('.').pop()?.toLowerCase() || '';
  const fileType = ['jpg', 'jpeg', 'png', 'gif'].includes(ext)
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = response?.url || fileUrl;
    link.download = fileName || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if ((fileType === 'unknown' || !fileUrl) && visibleViewerPlus) {
    handleDownload();
    return null;
  }

  const overlayStyle: React.CSSProperties = {
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

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '80%',
    maxWidth: '1200px',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const titleStyle: React.CSSProperties = {
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '70%',
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '20px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  return visibleViewerPlus ? (
    <>
      {fileType === 'image' ? (
        <Image
          alt="preview"
          style={{ width: '100%', display: 'none' }}
          src={fileUrl}
          preview={{
            visible: true,
            onVisibleChange: onVisibleChange,
          }}
        />
      ) : (
        <div style={overlayStyle} onClick={onVisibleChange}>
          <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={headerStyle}>
              <div style={titleStyle}>{fileName}</div>
              <div style={iconContainerStyle}>
                {fileType === 'office' && (
                  <DownloadOutlined onClick={handleDownload} style={iconStyle} />
                )}
                <CloseOutlined onClick={onVisibleChange} style={iconStyle} />
              </div>
            </div>
            {fileType === 'video' ? (
              <video controls width="100%" height="700px">
                <source src={fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : fileType === 'ofd' ? (
              <iframe
                src={`https://ofd.xdocin.com/view?src=${encodeURIComponent(fileUrl)}`}
                title="OFD 文档预览"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
              />
            ) : (
              <iframe
                src={
                  fileType === 'office'
                    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                        fileUrl,
                      )}`
                    : fileUrl
                }
                title="文档预览"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
              />
            )}
          </div>
        </div>
      )}
    </>
  ) : null;
};
