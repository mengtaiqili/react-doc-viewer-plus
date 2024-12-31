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
export declare const DocViewerPlus: React.FC<DocViewerPlusProps>;
