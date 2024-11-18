"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[5922],{57733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"universal/resources/nitro/graphics_2d/section_pltt","title":"PLTT (\\"TTLP\\") - Palette","description":"Author(s): Gonhex","source":"@site/docs/universal/resources/nitro/graphics_2d/section_pltt.md","sourceDirName":"universal/resources/nitro/graphics_2d","slug":"/universal/resources/nitro/graphics_2d/section_pltt","permalink":"/docs/universal/resources/nitro/graphics_2d/section_pltt","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_pltt.md","tags":[],"version":"current","frontMatter":{},"sidebar":"universal_sidebar","previous":{"title":"PCMP (\\"PMCP\\") - Palette Compression","permalink":"/docs/universal/resources/nitro/graphics_2d/section_pcmp"},"next":{"title":"SCRN (\\"NRCS\\") - Screen","permalink":"/docs/universal/resources/nitro/graphics_2d/section_scrn"}}');var i=t(74848),s=t(28453);const l={},c='PLTT ("TTLP") - Palette',o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"PLTT Container",id:"pltt-container",level:3},{value:"Palette",id:"palette",level:3},{value:"Color RGB5",id:"color-rgb5",level:3},{value:"Specification",id:"specification",level:2},{value:"Palette Dimension Configuration",id:"palette-dimension-configuration",level:3},{value:"Files",id:"files",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pltt-ttlp---palette",children:'PLTT ("TTLP") - Palette'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Author(s): ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: ",(0,i.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCLR(N. Color R.)--\x3eG2D(Graphics 2D);\r\n    PLTT(Palette)--\x3eNCLR;"}),"\n",(0,i.jsx)(n.p,{children:"The palette section holds a table with all colors used in the sprite(s). The color information is squeezed into one WORD resulting in five bits per component (r, g, b) and one unused bit."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#pltt-container",children:"PLTT Container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#palette",children:"Palette"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#color-rgb5",children:"Color RGB5"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#palette-dimension-configuration",children:"Palette Dimension Configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionPLTT\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerPLTT sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionHeader"}),(0,i.jsxs)(n.td,{children:["Header of this section. ",(0,i.jsx)(n.code,{children:'sectionHeader.signature = "TTLP"'}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionData"}),(0,i.jsx)(n.td,{children:"Content of this section."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#pltt-container",children:"ContainerPLTT"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"pltt-container",children:"PLTT Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerPLTT\r\n{\r\n    // header\r\n    /* 0x0 */ uint64_t dimensions;\r\n    /* 0x8 */ uint32_t lengthDataColor;\r\n    /* 0xC */ uint32_t offsetDataColor;\r\n    \r\n    // data\r\n    /* offsetDataColor */ struct Palette dataPalette[numberPalettes];\r\n}; // entry size = lengthDataColor + offsetDataColor\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dimensions"}),(0,i.jsx)(n.td,{children:"Palette configuration. Defines the max number of palettes and colors per palette."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#palette-dimension-configuration",children:"uint64_t"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lengthDataColor"}),(0,i.jsx)(n.td,{children:"Length of the color data section in bytes."}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetDataColor"}),(0,i.jsxs)(n.td,{children:["Offset to the color data section relative to ",(0,i.jsx)(n.code,{children:"ContainerPLTT"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataPalette"}),(0,i.jsxs)(n.td,{children:["Array of palettes holding the colors. ",(0,i.jsx)(n.code,{children:"numberPalettes"})," can be everything from ",(0,i.jsx)(n.code,{children:"1"})," to ",(0,i.jsx)(n.code,{children:"16"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#palette",children:"Palette[]"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"palette",children:"Palette"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct Palette\r\n{\r\n    /* 0x0 */ struct ColorRGB5 color[numberColors];\r\n}; // entry size = numberColors * 2\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"color"}),(0,i.jsxs)(n.td,{children:["Array of compressed RGB colors. ",(0,i.jsx)(n.code,{children:"numberColors"})," is either ",(0,i.jsx)(n.code,{children:"0x10 = 16"}),", or ",(0,i.jsx)(n.code,{children:"0x100 = 256"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#color-rgb5",children:"ColorRGB5[]"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"color-rgb5",children:"Color RGB5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ColorRGB5\r\n{\r\n    /* 0x00 */ uint16_t red : 5;   // 0b00000000'00011111\r\n               uint16_t green : 5; // 0b00000011'11100000\r\n               uint16_t blue : 5;  // 0b01111100'00000000\r\n}; // entry size = 0x2\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"red"}),(0,i.jsxs)(n.td,{children:["Red color component, ",(0,i.jsx)(n.code,{children:"uint8_t displayRed = red << 3;"}),"."]}),(0,i.jsx)(n.td,{children:"uint16_t : 5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"green"}),(0,i.jsxs)(n.td,{children:["Green color component, ",(0,i.jsx)(n.code,{children:"uint8_t displayGreen = green << 3;"}),"."]}),(0,i.jsx)(n.td,{children:"uint16_t : 5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blue"}),(0,i.jsxs)(n.td,{children:["Blue color component, ",(0,i.jsx)(n.code,{children:"uint8_t displayBlue = blue << 3;"}),"."]}),(0,i.jsx)(n.td,{children:"uint16_t : 5"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.h3,{id:"palette-dimension-configuration",children:"Palette Dimension Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The first eight bytes in ",(0,i.jsx)(n.a,{href:"#pltt-container",children:"ContainerPLTT"})," are marked as ",(0,i.jsx)(n.code,{children:"dimensions"}),". This is related to the number and size of the palettes within this PLTT section. Since the result of reading the raw value is not clear, an enumeration type has been defined:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"enum DimensionPalette : uint64_t\r\n{\r\n    PALETTE1_COLOR16 = 0x00000000'000A0004ULL,  // 1 palette, 16 colors\r\n    PALETTE1_COLOR256 = 0x00000000'00000004ULL, // 1 palette, 256 colors\r\n    PALETTE16_COLOR16 = 0x00000000'00000003ULL, // max. 16 palettes, 16 colors\r\n    PALETTE16_COLOR256 = 0x00000001'00000004ULL // max. 16 palettes, 256 colors\r\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This serves as a lookup table with four possible values. The number of colors per palette is set to either 16 or 256. The number of palettes can be limited to a lower value by the ",(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pcmp",children:"count map"}),", if it is set to 16."]}),"\n",(0,i.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nclr",children:"Nitro Color Runtime"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);