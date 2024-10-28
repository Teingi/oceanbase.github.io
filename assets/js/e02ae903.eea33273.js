"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6354],{43540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>_});var s=t(74848),i=t(28453);const a={title:"\u79df\u6237\u5185\u8d44\u6e90\u9694\u79bb\u6982\u8ff0",weight:1},r=void 0,c={id:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/overview",title:"\u79df\u6237\u5185\u8d44\u6e90\u9694\u79bb\u6982\u8ff0",description:"\u56e0\u4e3a OceanBase \u6570\u636e\u5e93\u4f1a\u628a Unit \u5f53\u4f5c\u7ed9\u79df\u6237\u5206\u914d\u8d44\u6e90\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u5728\u521b\u5efa\u79df\u6237\u65f6\u5c31\u4f1a\u4e3a\u79df\u6237\u521b\u5efa\u597d\u76f8\u5e94\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u628a\u79df\u6237\u95f4\u7684\u8d44\u6e90\u9694\u79bb\u7406\u89e3\u6210\u662f OceanBase \u539f\u751f\u81ea\u5e26\u7684\u8d44\u6e90\u9694\u79bb\u3002",source:"@site/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant/01_overview.md",sourceDirName:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant",slug:"/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/overview",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant/01_overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u79df\u6237\u5185\u8d44\u6e90\u9694\u79bb\u6982\u8ff0",weight:1},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u79df\u6237\u95f4\u8d44\u6e90\u9694\u79bb",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_between_tenants"},next:{title:"CPU \u8d44\u6e90\u9694\u79bb\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/cgroup_config"}},o={},_=[{value:"\u79df\u6237\u5185\u7684\u8d44\u6e90\u9694\u79bb\u65b9\u5f0f",id:"\u79df\u6237\u5185\u7684\u8d44\u6e90\u9694\u79bb\u65b9\u5f0f",level:2},{value:"DBMS_RESOURCE_MANAGER \u7cfb\u7edf\u5305",id:"dbms_resource_manager-\u7cfb\u7edf\u5305",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u56e0\u4e3a OceanBase \u6570\u636e\u5e93\u4f1a\u628a Unit \u5f53\u4f5c\u7ed9\u79df\u6237\u5206\u914d\u8d44\u6e90\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u5728\u521b\u5efa\u79df\u6237\u65f6\u5c31\u4f1a\u4e3a\u79df\u6237\u521b\u5efa\u597d\u76f8\u5e94\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u628a\u79df\u6237\u95f4\u7684\u8d44\u6e90\u9694\u79bb\u7406\u89e3\u6210\u662f OceanBase \u539f\u751f\u81ea\u5e26\u7684\u8d44\u6e90\u9694\u79bb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u793e\u533a\u7248\u7684 OceanBase \u6765\u8bf4\uff0c\u4e00\u4e2a\u79df\u6237\u5bf9\u5e94\u7684\u662f\u4e00\u4e2a MySQL \u5b9e\u4f8b\uff0c\u79df\u6237\uff08tenant\uff09\u5185\u4e0d\u540c\u7528\u6237\uff08user\uff09\u95f4\u7684\u8d44\u6e90\u9694\u79bb\uff0c\u4ee5\u53ca\u8fd8\u6709\u4e00\u4e9b\u6bd4\u7528\u6237\u7c92\u5ea6\u66f4\u7ec6\u7684\u8d44\u6e90\u9694\u79bb\uff0c\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u5b9a\u7684\u914d\u7f6e\u4e86\u3002\u8fd9\u4e5f\u662f\u672c\u5c0f\u8282\u7684\u91cd\u70b9\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u79df\u6237\u5185\u7684\u8d44\u6e90\u9694\u79bb\u65b9\u5f0f",children:"\u79df\u6237\u5185\u7684\u8d44\u6e90\u9694\u79bb\u65b9\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["OceanBase \u6570\u636e\u5e93\u4e2d\u901a\u8fc7 PL \u7684 ",(0,s.jsx)(n.code,{children:"DBMS_RESOURCE_MANAGER"})," \u7cfb\u7edf\u5305\u6765\u7ba1\u7406\u6570\u636e\u5e93\u4e2d\u8d44\u6e90\u7684\u5206\u914d\u4ece\u800c\u5b9e\u73b0\u8d44\u6e90\u9694\u79bb\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"DBMS_RESOURCE_MANAGER"})," \u7cfb\u7edf\u5305\u914d\u7f6e\u79df\u6237\u5185\u7684\u8d44\u6e90\u9694\u79bb\u65f6\uff0c\u4ece\u8d44\u6e90\u9694\u79bb\u7684\u4f7f\u7528\u7c92\u5ea6\uff0c\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User \u7ea7\u8d44\u6e90\u9694\u79bb"}),"\n",(0,s.jsxs)(n.p,{children:["User \u7ea7\u8d44\u6e90\u9694\u79bb\u662f\u901a\u8fc7\u6307\u5b9a\u7528\u6237\u4e0e",(0,s.jsx)(n.strong,{children:"\u8d44\u6e90\u7ec4"}),"\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u4f7f\u8be5\u7528\u6237\u6267\u884c\u7684\u6240\u6709 SQL \u4f7f\u7528\u7684\u8d44\u6e90\u5373\u4e3a\u5bf9\u5e94 Group \u5206\u914d\u7684\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SQL \u7ea7\u8d44\u6e90\u9694\u79bb"}),"\n",(0,s.jsx)(n.p,{children:"SQL \u7ea7\u7684\u8d44\u6e90\u9694\u79bb\u662f\u6bd4 User \u7ea7\u7c92\u5ea6\u66f4\u7ec6\u7684\u9694\u79bb\u65b9\u5f0f\u3002\u5b83\u662f\u901a\u8fc7\u5c06\u6ee1\u8db3\u67d0\u4e2a\u6761\u4ef6\u7684 SQL \u7ed1\u5b9a\u5230\u6307\u5b9a\u8d44\u6e90\u7ec4\u4e0a\u6267\u884c\u6765\u5b9e\u73b0\u7684\u3002\u901a\u5e38\u9002\u7528\u7684\u573a\u666f\u662f\uff0c\u4e1a\u52a1\u4e2d\u5b58\u5728\u591a\u4e2a\u8d26\u53f7\uff0c\u5904\u7406\u4e00\u4e2a\u8d26\u53f7\u7684\u4e00\u4e2a\u8ba2\u5355\u65f6\uff0c\u4f1a\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\u7136\u540e\u6267\u884c\u4e00\u6279\u4e0e\u8be5\u8d26\u53f7\u76f8\u5173\u7684 SQL \uff08\u901a\u5e38\u662f\u5728 WHERE \u6761\u4ef6\u4e2d\u6307\u5b9a\u8d26\u53f7\u7684\u503c\uff09\u3002\u8d26\u53f7\u4e2d\u53ef\u80fd\u5b58\u5728\u5927\u8d26\u53f7\uff08\u6570\u636e\u91cf\u8f83\u5927\uff09\u548c\u5c0f\u8d26\u53f7\uff08\u6570\u636e\u91cf\u8f83\u5c0f\uff09\uff0c\u4e3a\u4e86\u907f\u514d\u5927\u8d26\u53f7\u628a CPU \u8d44\u6e90\u7528\u5b8c\u5bfc\u81f4\u5c0f\u8d26\u53f7\u7684\u8ba2\u5355\u65e0\u6cd5\u5f97\u5230\u5904\u7406\uff0c\u53ef\u4ee5\u5c06\u5904\u7406\u4e0d\u540c\u8ba2\u5355\u7684 SQL \u7ed1\u5b9a\u5230\u4e0d\u540c\u7684\u8d44\u6e90\u7ec4\uff0c\u7ed1\u5b9a\u540e\u4e0d\u540c\u8ba2\u5355\u7684 SQL \u5c31\u4f1a\u4f7f\u7528\u4e0d\u540c\u8d44\u6e90\u7ec4\u7684\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Function \u7ea7\u8d44\u6e90\u9694\u79bb"}),"\n",(0,s.jsx)(n.p,{children:"Function \u7ea7\u7684\u8d44\u6e90\u9694\u79bb\u662f\u901a\u8fc7\u6307\u5b9a\u540e\u53f0\u4efb\u52a1\u4e0e\u8d44\u6e90\u7ec4\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u9694\u79bb\u5404\u4efb\u52a1\u4f7f\u7528\u7684\u8d44\u6e90\u3002Function \u7ea7\u8d44\u6e90\u9694\u79bb\u7528\u4e8e\u63a7\u5236\u540e\u53f0\u4efb\u52a1 CPU \u7684\u4f7f\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dbms_resource_manager-\u7cfb\u7edf\u5305",children:"DBMS_RESOURCE_MANAGER \u7cfb\u7edf\u5305"}),"\n",(0,s.jsx)(n.p,{children:"DBMS_RESOURCE_MANAGER \u7cfb\u7edf\u5305\u4e3b\u8981\u7528\u4e8e\u7ef4\u62a4\u4ee5\u4e0b\u5143\u7d20\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u7ec4\uff1a\u6839\u636e\u8d44\u6e90\u8981\u6c42\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u4e00\u7ec4\u4f1a\u8bdd\u3002\u7cfb\u7edf\u5c06\u8d44\u6e90\u5206\u914d\u7ed9\u8d44\u6e90\u7ec4\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u4f1a\u8bdd\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212\uff1a\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212\u5185\u5bb9\u7684\u5bb9\u5668\uff0c\u6307\u5b9a\u5982\u4f55\u5c06\u8d44\u6e90\u5206\u914d\u7ed9\u8d44\u6e90\u7ec4\u3002\u53ef\u4ee5\u901a\u8fc7\u6fc0\u6d3b\u7279\u5b9a\u7684\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212\u6765\u63a7\u5236\u8d44\u6e90\u7684\u5206\u914d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212\u5185\u5bb9\uff1a\u7528\u4e8e\u5c06\u8d44\u6e90\u7ec4\u4e0e\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212\u76f8\u5173\u8054\uff0c\u5e76\u6307\u5b9a\u5982\u4f55\u5c06\u8d44\u6e90\u5206\u914d\u7ed9\u8be5\u8d44\u6e90\u7ec4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"DBMS_RESOURCE_MANAGER"})," \u7cfb\u7edf\u5305\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1\uff1a",(0,s.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001432615",children:"DBMS_RESOURCE_MANAGER \u7cfb\u7edf\u5305\uff08MySQL \u6a21\u5f0f\uff09"}),"\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);