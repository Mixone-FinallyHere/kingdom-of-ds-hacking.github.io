"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9070],{6696:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"universal/resources/nitro/graphics_2d/file_ncer","title":"NCER (\\"RECN\\") - Nitro Cell Runtime","description":"Author(s): Gonhex","source":"@site/docs/universal/resources/nitro/graphics_2d/file_ncer.md","sourceDirName":"universal/resources/nitro/graphics_2d","slug":"/universal/resources/nitro/graphics_2d/file_ncer","permalink":"/docs/universal/resources/nitro/graphics_2d/file_ncer","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/file_ncer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"universal_sidebar","previous":{"title":"NANR (\\"RNAN\\") - Nitro Animation Runtime","permalink":"/docs/universal/resources/nitro/graphics_2d/file_nanr"},"next":{"title":"NCGR (\\"RGCN\\") - Nitro Character Graphic Runtime","permalink":"/docs/universal/resources/nitro/graphics_2d/file_ncgr"}}');var s=r(74848),t=r(28453);const c={},l='NCER ("RECN") - Nitro Cell Runtime',a={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"File Container",id:"file-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Sections",id:"sections",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ncer-recn---nitro-cell-runtime",children:'NCER ("RECN") - Nitro Cell Runtime'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Author(s): ",(0,s.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,s.jsx)("br",{}),"\r\nResearch: (see sections)"]}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCER(N. Cell R.)--\x3eG2D(Graphics 2D);\r\n    CEBK(Cell Bank)--\x3eNCER;\r\n    LABL(Label)--\x3eNCER;\r\n    UEXT(Use Extension?)--\x3eNCER;"}),"\n",(0,s.jsx)(n.p,{children:"The cell runtime creates groups of tiles which will be displayed as small images. The cells can serve as base for frame animations."}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#file-container",children:"File Container"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sections",children:"Sections"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,s.jsx)(n.h3,{id:"file-container",children:"File Container"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct ContainerFileNCER\r\n{\r\n    /* 0x00   */ struct NitroFileHeader fileHeader;\r\n    /* 0x10   */ struct ContainerSectionCEBK sectionDataCEBK;\r\n    /* append */ struct ContainerSectionLABL sectionDataLABL;\r\n    /* append */ struct ContainerSectionLABL sectionDataUEXT;\r\n}; // entry size = fileHeader.lengthFile\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileHeader"}),(0,s.jsxs)(n.td,{children:["Header of this file. ",(0,s.jsx)(n.code,{children:'fileHeader.signature = "RECN"'}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/#nitro-file-header",children:"NitroFileHeader"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sectionDataCEBK"}),(0,s.jsx)(n.td,{children:"Cell image data."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cebk#section-container",children:"ContainerSectionCEBK"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sectionDataLABL"}),(0,s.jsx)(n.td,{children:"Cell-name table."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_labl#section-container",children:"ContainerSectionLABL"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sectionDataUEXT"}),(0,s.jsx)(n.td,{children:"Cluster flag."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_uext#section-container",children:"ContainerSectionUEXT"})})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,s.jsx)(n.h3,{id:"sections",children:"Sections"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cebk",children:"Cell Bank"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_labl",children:"Label"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_uext",children:"Use Extension?"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var i=r(96540);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);