"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[247],{93579:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var c=s(74848),a=s(28453);const i={title:"SQL \u6027\u80fd\u8bca\u65ad\u548c\u8c03\u4f18",weight:5},t=void 0,r={id:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/performance_tuning",title:"SQL \u6027\u80fd\u8bca\u65ad\u548c\u8c03\u4f18",description:"SQL \u6027\u80fd\u8bca\u65ad\u548c\u8c03\u4f18\uff0c\u662f\u5728\u6536\u96c6\u300a\u8fdb\u9636\u6559\u7a0b\u300b\u7528\u6237\u5efa\u8bae\u8fc7\u7a0b\u4e2d\uff0c\u5927\u5bb6\u6700\u5e38\u63d0\u5230\u7684\u9700\u6c42\u3002",source:"@site/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/05_performance_tuning.md",sourceDirName:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap",slug:"/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/performance_tuning",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/performance_tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/05_performance_tuning.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SQL \u6027\u80fd\u8bca\u65ad\u548c\u8c03\u4f18",weight:5},sidebar:"operation_and_maintenanceSidebar",previous:{title:"HTAP \u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/htap_best_practices"},next:{title:"\u5176\u4ed6",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/others"}},l={},o=[{value:"\u300aSQL \u8c03\u4f18\u5b9e\u8df5\u8bb0\u5f55\u300b\uff08\u9884\u544a\uff09",id:"sql-\u8c03\u4f18\u5b9e\u8df5\u8bb0\u5f55\u9884\u544a",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2}];function p(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"SQL \u6027\u80fd\u8bca\u65ad\u548c\u8c03\u4f18\uff0c\u662f\u5728\u6536\u96c6\u300a\u8fdb\u9636\u6559\u7a0b\u300b\u7528\u6237\u5efa\u8bae\u8fc7\u7a0b\u4e2d\uff0c\u5927\u5bb6\u6700\u5e38\u63d0\u5230\u7684\u9700\u6c42\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u4eec\u5728\u793e\u533a\u8bba\u575b\u95ee\u7b54\u533a\uff0c\u56de\u7b54\u7528\u6237 SQL \u8c03\u4f18\u95ee\u9898\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u7edd\u5927\u591a\u6570\u95ee\u9898\u90fd\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u5408\u9002\u7684\u7d22\u5f15\u8f7b\u677e\u89e3\u51b3\uff0c\u5f88\u5c11\u6709\u300a\u5165\u95e8\u6559\u7a0b\u300b\u7b2c\u4e03\u7ae0\u89e3\u51b3\u4e0d\u4e86\u7684 SQL \u6027\u80fd\u8c03\u4f18\u95ee\u9898\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u524d\u4e00\u6bb5\u513f\u65f6\u95f4\uff0c\u6211\u4eec\u4e5f\u4e3a\u5927\u5bb6\u6574\u7406\u4e86",(0,c.jsx)(n.a,{href:"https://ask.oceanbase.com/t/topic/35613279",children:"\u3010OceanBase DBA \u5165\u95e8\u6559\u7a0b\u3011\u5b8c\u6574\u7248\u5b66\u4e60\u7b14\u8bb0"}),"\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u820d\u8fdc\u6c42\u8fd1\u3001\u5c31\u5730\u53d6\u6750\uff0c\u5728\u8fd9\u91cc\u5f3a\u70c8\u63a8\u8350\u5927\u5bb6\u5b8c\u6574\u9605\u8bfb",(0,c.jsx)(n.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390070",children:"\u300a\u5165\u95e8\u6559\u7a0b\u300b\u7b2c\u4e03\u7ae0"}),"\uff08\u8fd9\u4e00\u7ae0\u662f\u6211\u524d\u4e00\u6bb5\u65f6\u95f4\u5455\u5fc3\u6ca5\u8840\u4e3a\u5927\u5bb6\u6574\u7406\u7684\u5185\u5bb9\uff09\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u524d\u9762\u7684 \u201cSQL \u5f15\u64ce\u6982\u8ff0\u201d \u5c0f\u8282\u4e2d\uff0c\u5217\u51fa\u4e86\u9700\u8981\u5927\u5bb6\u638c\u63e1\u7684 SQL \u6027\u80fd\u8bca\u65ad\u8c03\u4f18\u5185\u5bb9\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u7edf\u8ba1\u4fe1\u606f\u548c\u8ba1\u5212\u7f13\u5b58"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u9605\u8bfb\u548c\u7ba1\u7406\u6267\u884c\u8ba1\u5212"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u51e0\u79cd SQL \u8c03\u4f18\u65b9\u5f0f"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"SQL \u6027\u80fd\u95ee\u9898\u7684\u901a\u7528\u6392\u67e5\u601d\u8def\u548c\u51e0\u79cd\u5178\u578b\u573a\u666f"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"SQL \u6027\u80fd\u95ee\u9898\u5206\u6790\u5de5\u5177"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u8ff0\u8fd9\u4e9b\u5185\u5bb9\u90fd\u53ef\u4ee5\u5728\u300a\u5165\u95e8\u6559\u7a0b\u300b\u7b2c\u4e03\u7ae0\u4e2d\u5b66\u5230\uff08\u4e5f\u53ef\u4ee5\u53ea\u5b66\u8fd9\u4e9b\u5185\u5bb9\uff09\uff0c\u5982\u679c\u5b9e\u5728\u6ca1\u6709\u8010\u5fc3\u9605\u8bfb\u7b2c\u4e03\u7ae0\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u90a3\u4e48\u5c31\u63a8\u8350\u9605\u8bfb\u7ea2\u6846\u6807\u6ce8\u7684\u8fd9\u4e09\u4e2a\u5c0f\u8282\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"image.png",src:s(13959).A+"",width:"1403",height:"1012"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8fde\u8fd9\u4e09\u4e2a\u5c0f\u8282\u90fd\u6ca1\u6709\u8010\u5fc3\u53bb\u9605\u8bfb\u7684\u8bdd\uff0c\u90a3\u4e48\u5c31\u63a8\u8350\u9605\u8bfb\u4e0b\u9762\u8fd9\u4e24\u4e2a\u5c0f\u8282\u53f3\u4fa7\u7528\u7ea2\u6846\u6807\u6ce8\u7684\u8fd9\u51e0\u4e2a\u6bb5\u843d\uff0c\u53ef\u4ee5\u6d88\u9664\u5728 SQL \u6027\u80fd\u5206\u6790\u8fc7\u7a0b\u4e2d\u4e00\u5927\u90e8\u5206\u53bb OceanBase \u793e\u533a\u8bba\u575b\u95ee\u7b54\u533a\u63d0\u95ee\u7684\u5f00\u9500\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e2a\u662f\u5e38\u89c1 SQL \u8c03\u4f18\u65b9\u5f0f\u4e2d\u7684\uff1a\u7edf\u8ba1\u4fe1\u606f\u3001\u8ba1\u5212\u7f13\u5b58\u3001\u7d22\u5f15\u8c03\u4f18\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"image.png",src:s(46924).A+"",width:"1668",height:"996"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e2a\u662f\u5178\u578b\u573a\u666f\u548c\u6392\u67e5\u601d\u8def\u8fd9\u4e00\u5c0f\u8282\u7684\u5b8c\u6574\u5185\u5bb9\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"image.png",src:s(58549).A+"",width:"1693",height:"1002"})}),"\n",(0,c.jsx)(n.h2,{id:"sql-\u8c03\u4f18\u5b9e\u8df5\u8bb0\u5f55\u9884\u544a",children:"\u300aSQL \u8c03\u4f18\u5b9e\u8df5\u8bb0\u5f55\u300b\uff08\u9884\u544a\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u867d\u7136\u8fd9\u6b21\u300a\u8fdb\u9636\u6559\u7a0b\u300b\u5728 \u201cSQL \u8c03\u4f18\u65b9\u6cd5\u201d \u90e8\u5206\uff0c\u6682\u65f6\u4e0d\u589e\u52a0 \u201c\u6559\u7a0b\u5411\u201d \u7684\u65b0\u5185\u5bb9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u5728\u300a\u5165\u95e8\u6559\u7a0b\u300b\u7b2c\u4e03\u7ae0\u4e2d\u66fe\u8bf4\u8fc7\uff1a\u201c\u9605\u8bfb\u5b8c\u4e4b\u540e\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u5927\u5bb6\u5c31\u5730\u6210\u4e3a SQL \u6027\u80fd\u5206\u6790\u4e13\u5bb6\u3002\u6210\u957f\u4e3a\u4e13\u5bb6\u7684\u8def\u4e0a\uff0c\u9700\u8981\u5faa\u5e8f\u6e10\u8fdb\uff0c\u5728\u5927\u91cf\u7684\u5b9e\u8df5\u4e2d\u9010\u6b65\u79ef\u7d2f\u7ecf\u9a8c\uff0c\u8fd8\u662f\u90a3\u53e5\u8001\u8bdd\uff1a\u2018\u65e0\u4ed6\uff0c\u552f\u624b\u719f\u5c14\u2019\u3002\u201d"}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u6211\u548c SQL \u8c03\u4f18\u4e13\u5bb6\u7d6e\u8bed\u8001\u54e5\uff0c\u4f1a\u5bf9\u5728\u8bba\u575b\u91cc\u770b\u5230\u7684\u4e00\u4e9b\u5178\u578b\u7684 SQL \u8c03\u4f18\u95ee\u9898\uff0c\u8fdb\u884c\u8bb0\u5f55\u548c\u603b\u7ed3\uff0c\u7136\u540e\u5728 ",(0,c.jsx)(n.a,{href:"https://ask.oceanbase.com/c/well-chosen/75",children:"OceanBase \u793e\u533a\u8bba\u575b \u2014\u2014 \u5b98\u65b9\u7cbe\u534e\u677f\u5757"})," \u4e2d\uff0c\u4ee5 \u300aSQL \u8c03\u4f18\u5b9e\u8df5\u8bb0\u5f55\u300b\u7684\u5f62\u5f0f\u7ed9\u5927\u5bb6\u8fdb\u884c\u5206\u4eab\uff0c\u5e76\u9010\u6b65\u5f62\u6210\u4e00\u4e2a \u201c\u5b9e\u8df5\u5411\u201d \u7684\u4e13\u9898\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a",(0,c.jsx)(n.a,{href:"https://ask.oceanbase.com/t/topic/35613940",children:"\u3010\u6709\u95ee\u5fc5\u7b54\u3011\u5206\u6790\u4e00\u4e2a\u5728\u4e0d\u540c collation \u7684\u5b57\u7b26\u4e32\u8fde\u63a5\u65f6\uff0c\u65e0\u6cd5\u5229\u7528\u7d22\u5f15\u7684\u95ee\u9898"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a SQL \u8c03\u4f18\u5b9e\u8df5\u4e13\u9898\u4e2d\uff0c\u4f1a\u4ee5\u771f\u5b9e\u9047\u5230\u7684\u7528\u6237\u95ee\u9898\uff0c\u9010\u6b65\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5178\u578b\u7684 SQL \u8c03\u4f18\u5b9e\u8df5\uff0c\u5305\u62ec\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5404\u79cd\u65e0\u6cd5\u5145\u5206\u5229\u7528\u7d22\u5f15\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8ba1\u5212\u4e2d\u7684 join \u65b9\u5f0f\u4e0d\u4f18\u5bfc\u81f4\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8ba1\u5212\u4e2d\u7684 shuffle \u65b9\u5f0f\u4e0d\u4f18\u5bfc\u81f4\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8ba1\u5212\u4e2d\u7684 order \u65b9\u5f0f\u4e0d\u4f18\u5bfc\u81f4\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5206\u533a\u6570\u636e\u503e\u659c\u5bfc\u81f4\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u7b49\u7b49\u7b49\u7b49"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u91cc\u5148\u6316\u4e2a\u5751\uff0c\u7b49\u6211\u548c\u7d6e\u8bed\u4e00\u8d77\u6162\u6162\u586b\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u63a8\u8350\u9605\u8bfb",children:"\u63a8\u8350\u9605\u8bfb"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://ask.oceanbase.com/c/well-chosen/75",children:"OceanBase \u793e\u533a\u8bba\u575b \u2014\u2014 \u5b98\u65b9\u7cbe\u534e\u677f\u5757"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://ask.oceanbase.com/t/topic/35613279",children:"OceanBase DBA \u5165\u95e8\u6559\u7a0b \u2014\u2014 \u5b8c\u6574\u7248\u5b66\u4e60\u7b14\u8bb0"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},13959:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/001-254628f4dda1fce2e5ad0c559c5549f0.png"},46924:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/002-4145dd70daf5f0e76a84ea62e7b63b7e.png"},58549:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/003-7ec07c87b6e7c9dbe1a244906d6f13cd.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var c=s(96540);const a={},i=c.createContext(a);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);