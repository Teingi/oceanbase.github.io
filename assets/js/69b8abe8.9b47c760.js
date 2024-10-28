"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[700],{2686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(74848),a=s(28453);const t={title:"\u57fa\u4e8e\u591a\u526f\u672c\u7684\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",weight:2},i=void 0,c={id:"user_manual/operation_and_maintenance/disaster_recovery_architecture_design/multi_replica_solution",title:"\u57fa\u4e8e\u591a\u526f\u672c\u7684\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",description:"\u57fa\u4e8e Paxos \u4e00\u81f4\u6027\u534f\u8bae\u7684\u591a\u526f\u672c\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",source:"@site/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/02_multi_replica_solution.md",sourceDirName:"user_manual/operation_and_maintenance/disaster_recovery_architecture_design",slug:"/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/multi_replica_solution",permalink:"/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/multi_replica_solution",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/02_multi_replica_solution.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u57fa\u4e8e\u591a\u526f\u672c\u7684\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",weight:2},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u5bb9\u707e\u67b6\u6784\u6982\u8ff0",permalink:"/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/high_availability_architecture_overview"},next:{title:"\u57fa\u4e8e\u65e5\u5fd7\u5f02\u6b65\u590d\u5236\u7684\u7269\u7406\u5907\u5e93\u89e3\u51b3\u65b9\u6848",permalink:"/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/primary_standby_database_solution"}},o={},d=[{value:"\u57fa\u4e8e Paxos \u4e00\u81f4\u6027\u534f\u8bae\u7684\u591a\u526f\u672c\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",id:"\u57fa\u4e8e-paxos-\u4e00\u81f4\u6027\u534f\u8bae\u7684\u591a\u526f\u672c\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5355\u673a\u5bb9\u707e",id:"\u5355\u673a\u5bb9\u707e",level:3},{value:"\u673a\u623f\u5bb9\u707e",id:"\u673a\u623f\u5bb9\u707e",level:3},{value:"\u57ce\u5e02\u5bb9\u707e",id:"\u57ce\u5e02\u5bb9\u707e",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u4e8e-paxos-\u4e00\u81f4\u6027\u534f\u8bae\u7684\u591a\u526f\u672c\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848",children:"\u57fa\u4e8e Paxos \u4e00\u81f4\u6027\u534f\u8bae\u7684\u591a\u526f\u672c\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u65b9\u6848\u57fa\u4e8ePaxos\u4e00\u81f4\u6027\u534f\u8bae\u5b9e\u73b0\uff0c\u901a\u5e38\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u5185\u901a\u8fc7\u591a\u526f\u672c\uff08\u4f8b\u5982\uff0c\u4e09\u526f\u672c\u6216\u4e94\u526f\u672c\uff09\u63d0\u4f9b\u5bb9\u707e\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5c11\u6570\u6d3e\u526f\u672c\u4e0d\u53ef\u7528\uff08\u4e09\u526f\u672c\u96c6\u7fa4\u5141\u8bb8\u4e00\u4e2a\u526f\u672c\u4e0d\u53ef\u7528\uff0c\u4e94\u526f\u672c\u96c6\u7fa4\u5141\u8bb8\u4e24\u4e2a\u526f\u672c\u4e0d\u53ef\u7528\uff09\u65f6\uff0c\u6570\u636e\u5e93\u53ef\u4ee5\u81ea\u52a8\u6267\u884c\u5bb9\u707e\u5207\u6362\u5e76\u6062\u590d\u670d\u52a1\uff0c\u4fdd\u8bc1\u4e0d\u4e22\u6570\u636e\uff08RPO = 0\uff09\uff0c\u6545\u969c\u6062\u590d\u65f6\u95f4\u5728 8 \u79d2\u4ee5\u5185\uff08RTO < 8s\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7075\u6d3b\u8c03\u6574\u96c6\u7fa4\u5404\u4e2a Zone \u7684\u673a\u623f\u548c Region \u5206\u5e03\uff0c\u4ee5\u53ca\u79df\u6237\u526f\u672c\u5728\u8fd9\u4e9b Zone \u4e0a\u7684\u5206\u5e03\uff0c\u4ece\u800c\u8c03\u6574\u79df\u6237\u7684\u90e8\u7f72\u6a21\u5f0f\uff0c\u8fbe\u5230\u4e0d\u540c\u7684\u5bb9\u707e\u7ea7\u522b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OceanBase \u6570\u636e\u5e93\u652f\u6301\u7684\u5bb9\u707e\u7b49\u7ea7\u5982\u4e0b\u6240\u793a\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u90e8\u7f72\u6a21\u5f0f"}),(0,r.jsx)(n.th,{children:"\u6700\u4f73\u526f\u672c\u6570"}),(0,r.jsx)(n.th,{children:"\u5bb9\u707e\u573a\u666f"}),(0,r.jsx)(n.th,{children:"\u5bb9\u707e\u80fd\u529b"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5355\u673a\u623f"}),(0,r.jsx)(n.td,{children:"\u4e09\u526f\u672c"}),(0,r.jsx)(n.td,{children:"\u9762\u5411\u4e0d\u5177\u5907\u591a\u673a\u623f\u6761\u4ef6\u7684\u573a\u666f\u3002\u540c\u673a\u623f\u5185\u4e09\u526f\u672c\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4\uff0c\u540c\u4e00\u4efd\u526f\u672c\u5c3d\u91cf\u90e8\u7f72\u5728\u76f8\u540c\u5bb9\u707e\u80fd\u529b\u7684\u4e00\u7ec4\u673a\u5668\u4e0a\uff0c\u4f8b\u5982\uff1a\u540c\u4e00\u4e2a\u673a\u67b6\u3001\u540c\u4e00\u4e2a\u7535\u6e90\u7b49\u3002"}),(0,r.jsx)(n.td,{children:"\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u8282\u70b9\u6545\u969c\u3002\u65e0\u6cd5\u9632\u8303\u673a\u623f\u7ea7\u6545\u969c\uff08\u4f8b\u5982\uff0c\u673a\u623f\u7f51\u7edc\u4e2d\u65ad\u3001\u7535\u529b\u4e2d\u65ad\u7b49\uff09\u3001\u57ce\u5e02\u7ea7\u6545\u969c\uff08\u4f8b\u5982\uff0c\u5730\u9707\u3001\u6d77\u5578\u3001\u53f0\u98ce\u7b49\u81ea\u7136\u707e\u5bb3\u7b49\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u540c\u57ce\u4e09\u4e2d\u5fc3"}),(0,r.jsx)(n.td,{children:"\u4e09\u526f\u672c"}),(0,r.jsx)(n.td,{children:"\u9762\u5411\u5177\u5907\u4e00\u4e2a\u57ce\u5e02\u4e09\u4e2a\u673a\u623f\u7684\u573a\u666f\u3002\u540c\u57ce\u4e09\u4e2a\u673a\u623f\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4\uff08\u6bcf\u4e2a\u673a\u623f\u662f\u4e00\u4e2a Zone\uff09\uff0c\u673a\u623f\u95f4\u7f51\u7edc\u5ef6\u8fdf\u4e00\u822c\u5728 0.5 ~ 2 ms \u4e4b\u95f4\u3002"}),(0,r.jsx)(n.td,{children:"\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u8282\u70b9\u6545\u969c\u3002\u80fd\u591f\u9632\u8303\u5355\u673a\u623f\u6545\u969c\u3002\u65e0\u6cd5\u9632\u8303\u57ce\u5e02\u7ea7\u6545\u969c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e24\u5730\u4e09\u4e2d\u5fc3"}),(0,r.jsx)(n.td,{children:"\u4e94\u526f\u672c"}),(0,r.jsx)(n.td,{children:"\u9762\u5411\u4e00\u4e2a\u57ce\u5e02\u53ea\u5177\u5907\u4e24\u4e2a\u673a\u623f\u7684\u573a\u666f\u3002\u4e3b\u57ce\u5e02\u4e0e\u5907\u57ce\u5e02\u7ec4\u6210\u4e00\u4e2a 5 \u526f\u672c\u7684\u96c6\u7fa4\uff0c\u4e3b\u57ce\u5e02 4 \u526f\u672c\u5206\u5e03\u4e8e\u4e24\u4e2a IDC\uff0c\u5907\u57ce\u5e02 1 \u526f\u672c\u3002\u4efb\u4f55 IDC \u7684\u6545\u969c\uff0c\u6700\u591a\u635f\u5931 2 \u4efd\u526f\u672c\uff0c\u5269\u4f59\u7684 3 \u4efd\u526f\u672c\u4f9d\u7136\u6ee1\u8db3\u591a\u6570\u6d3e\u3002"}),(0,r.jsx)(n.td,{children:"\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u8282\u70b9\u6545\u969c\u3002\u80fd\u591f\u9632\u8303\u5355\u673a\u623f\u6545\u969c\u3002\u65e0\u6cd5\u9632\u8303\u4e3b\u57ce\u5e02\u7684\u6545\u969c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e09\u5730\u4e94\u4e2d\u5fc3"}),(0,r.jsx)(n.td,{children:"\u4e94\u526f\u672c"}),(0,r.jsx)(n.td,{children:"\u9762\u5411\u9700\u8981\u57ce\u5e02\u7ea7\u5bb9\u707e\u80fd\u529b\u7684\u573a\u666f\u3002\u4e09\u4e2a\u57ce\u5e02\uff0c\u7ec4\u6210\u4e00\u4e2a 5 \u526f\u672c\u7684\u96c6\u7fa4\u3002\u4e24\u4e2a\u57ce\u5e02\u5404 2 \u4efd\u526f\u672c\uff0c\u7b2c\u4e09\u4e2a\u57ce\u5e02 1 \u4efd\u526f\u672c\u3002\u4efb\u4f55\u4e00\u4e2a\u673a\u623f\u6216\u8005\u57ce\u5e02\u7684\u6545\u969c\uff0c\u4f9d\u7136\u6784\u6210\u591a\u6570\u6d3e\uff0c\u53ef\u4ee5\u786e\u4fdd RPO=0\u3002"}),(0,r.jsx)(n.td,{children:"\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u8282\u70b9\u6545\u969c\u3002\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u673a\u623f\u6545\u969c\u3002\u80fd\u591f\u9632\u8303\u5c11\u6570\u6d3e\u57ce\u5e02\u6545\u969c\u3002"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f\u793a\u610f\u56fe\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u540c\u57ce\u4e09\u4e2d\u5fc3\u90e8\u7f72\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://obbusiness-private.oss-cn-shanghai.aliyuncs.com/doc/img/observer-enterprise/V4.2.1/manage/three-IDCs-in-the-same-city.jpg",alt:"\u540c\u57ce\u4e09\u4e2d\u5fc3"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e24\u5730\u4e09\u4e2d\u5fc3\u90e8\u7f72\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://obbusiness-private.oss-cn-shanghai.aliyuncs.com/doc/img/observer-enterprise/V4.2.1/manage/three-IDCs-across-two-regions1.jpg",alt:"\u4e24\u5730\u4e09\u4e2d\u5fc3"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e09\u5730\u4e94\u4e2d\u5fc3\u90e8\u7f72\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://obbusiness-private.oss-cn-shanghai.aliyuncs.com/doc/img/observer-enterprise/V4.2.1/manage/five-IDCs-across-three-regions1.jpg",alt:"\u4e09\u5730\u4e94\u4e2d\u5fc3"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["OceanBase \u6570\u636e\u5e93\u7684\u90e8\u7f72\u6a21\u5f0f\u901a\u8fc7\u79df\u6237\u7ea7\u522b\u7684 Locality \u5c5e\u6027\u6765\u63cf\u8ff0\uff0c\u6211\u4eec\u5728\u300a\u526f\u672c\u7ba1\u7406\u300b\u7ae0\u8282\u4e2d\u63cf\u8ff0\u4e86\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f\u7684 Locality \u793a\u4f8b\uff0c\u901a\u8fc7\u8c03\u6574\u79df\u6237\u7684 Locality \u5c5e\u6027\uff0c\u4ece\u800c\u8fbe\u5230\u7075\u6d3b\u7684\u90e8\u7f72\u6a21\u5f0f\uff0c\u8fdb\u800c\u8fbe\u5230\u4e0d\u540c\u7684\u5bb9\u707e\u7ea7\u522b\u3002\u8be6\u7ec6\u4fe1\u606f\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050183",children:"Locality \u4ecb\u7ecd"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u591a\u526f\u672c\u6280\u672f\u7684\u5bb9\u707e\u67b6\u6784\uff0c\u5176\u6838\u5fc3\u903b\u8f91\u662f\u901a\u8fc7 Paxos \u534f\u8bae\u4fdd\u8bc1\u4e8b\u52a1\u65e5\u5fd7\u8fbe\u6210\u591a\u6570\u6d3e\u63d0\u4ea4\u3002\u5982\u679c\u53d1\u751f\u6545\u969c\u7684\u8282\u70b9\u5c0f\u4e8e\u591a\u534a\u6570\uff0c\u9009\u4e3e\u534f\u8bae\u80fd\u591f\u4fdd\u8bc1\u81ea\u52a8\u6062\u590d\uff0c\u4e14 RPO = 0\u3002\u5982\u679c\u591a\u4e8e\u534a\u6570\u7684\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u5c31\u9700\u8981\u4eba\u5de5\u4ecb\u5165\uff0c\u53ef\u4ee5\u901a\u8fc7\u5355\u526f\u672c\u7684\u65b9\u5f0f\u62c9\u8d77\u670d\u52a1\uff0c\u7531\u4e8e\u5c11\u6570\u6d3e\u53ef\u80fd\u6ca1\u6709\u5305\u542b\u6700\u65b0\u7684\u6570\u636e\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u4e22\u5931\u6700\u540e\u4e00\u90e8\u5206\u6570\u636e\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u5355\u526f\u672c\u62c9\u8d77\u64cd\u4f5c\u4e0d\u662f\u5e38\u89c4\u7684\u8fd0\u7ef4\u64cd\u4f5c\uff0c\u662f\u96c6\u7fa4\u65e0\u6cd5\u6062\u590d\u65f6\u6700\u540e\u7684\u5e94\u6025\u624b\u6bb5\uff0c\u6709\u6570\u636e\u4e22\u5931\u548c\u53cc\u4e3b\u7684\u98ce\u9669\uff0c\u64cd\u4f5c\u9700\u8981\u7279\u522b\u8c28\u614e\uff0c\u8bf7\u5728 OceanBase \u652f\u6301\u540c\u5b66\u6307\u5bfc\u4e0b\u8fdb\u884c\uff0c\u672c\u6587\u6863\u6682\u4e0d\u63d0\u4f9b\u64cd\u4f5c\u7ec6\u8282\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u91d1\u878d\u884c\u4e1a\u91cc\uff0c\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5f80\u5f80\u4e5f\u90e8\u7f72\u6210\u201c\u4e24\u5730\u4e09\u4e2d\u5fc3\u201d\u67b6\u6784\uff0c\u540c\u57ce\u4e24\u4e2a\u673a\u623f\uff0c\u4e00\u4e2a\u4e3b\u5e93\uff0c\u4e00\u4e2a\u70ed\u5907\uff0c\u5f02\u5730\u4e00\u4e2a\u51b7\u5907\u3002\u867d\u7136\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u539f\u751f\u7684\u534a\u540c\u6b65\u673a\u5236\u6765\u4fdd\u8bc1\u4e1a\u52a1\u66f4\u65b0\u7684\u540c\u65f6\u4e5f\u63d0\u4ea4\u5230\u5907\u5e93\uff0c\u4f46\u5e76\u4e0d\u662f\u5f3a\u4fdd\u8bc1\u673a\u5236\uff0c\u5f53\u4e3b\u5e93\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u5907\u5e93\u4f9d\u7136\u53ef\u80fd\u6ca1\u6709\u6700\u65b0\u7684\u66f4\u65b0\uff0c\u5e76\u4e14\u5f3a\u5236\u5c06\u5907\u5e93\u5207\u4e3a\u4e3b\u5e93\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u3002\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u201c\u4e24\u5730\u4e09\u4e2d\u5fc3\u201d\u67b6\u6784\u8981\u4e48\u9009\u62e9\u9ad8\u53ef\u7528\uff0c\u8981\u4e48\u9009\u62e9\u5f3a\u4e00\u81f4\uff0c\u65e0\u6cd5\u6253\u7834 \u201cCAP \u7406\u8bba\u201d\u3002\u4f46 OceanBase \u6570\u636e\u5e93\u57fa\u4e8e Paxos \u534f\u8bae\u7684\u591a\u526f\u672c\u5bb9\u707e\u6280\u672f\u771f\u6b63\u505a\u5230\u4e86\u540c\u57ce\u548c\u5f02\u5730\u7684\u65e0\u635f\u5bb9\u707e\uff0c\u8fbe\u5230 RPO = 0\uff0cRTO < 8 \u79d2\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 OceanBase \u6570\u636e\u5e93\u7684\u591a\u526f\u672c\u6280\u672f\u5b9e\u73b0\u7684\u5bb9\u707e\u67b6\u6784\uff0c\u5e94\u7528\u53ea\u9700\u8981\u611f\u77e5\u4e00\u4e2a\u6570\u636e\u6e90\uff0c\u6570\u636e\u5e93\u5185\u90e8\u590d\u5236\u7684\u7ec6\u8282\u5bf9\u5e94\u7528\u5b8c\u5168\u900f\u660e\u3002\u540c\u65f6\uff0c\u5b83\u63d0\u4f9b\u4e86\u5355\u673a\u7ea7\u3001\u673a\u623f\u7ea7\u3001\u751a\u81f3\u57ce\u5e02\u7ea7\u6545\u969c\u7684\u65e0\u635f\u5bb9\u707e\u80fd\u529b\uff0c\u5e76\u4e14\u6062\u590d\u65f6\u95f4\u5c0f\u4e8e 8 \u79d2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5355\u673a\u5bb9\u707e",children:"\u5355\u673a\u5bb9\u707e"}),"\n",(0,r.jsxs)(n.p,{children:["OceanBase \u6570\u636e\u5e93\u5185\u90e8\u7684\u5fc3\u8df3\u673a\u5236\u80fd\u591f\u81ea\u52a8\u5904\u7406\u8282\u70b9\u5f02\u5e38\uff0cOBProxy \u4e5f\u80fd\u591f\u611f\u77e5\u8282\u70b9\u5f02\u5e38\u72b6\u6001\uff0c\u4ece\u800c\u907f\u514d\u5e94\u7528\u5c42\u5bf9\u8282\u70b9\u5f02\u5e38\u72b6\u6001\u7684\u611f\u77e5\u3002\u4e3a\u4e86\u907f\u514d\u8282\u70b9\u7684\u975e\u901a\u65ad\u578b\u6545\u969c\u5f15\u8d77\u7684\u4e52\u4e53\u6548\u5e94\u6301\u7eed\u77ed\u6682\u5f71\u54cd\u5e94\u7528\uff0c\u5e94\u8be5\u7b2c\u4e00\u65f6\u95f4\u9694\u79bb\u5f02\u5e38\u8282\u70b9\uff0c\u9694\u79bb\u5f02\u5e38\u8282\u70b9\u7684\u76f8\u5173\u64cd\u4f5c\u53ef\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050167",children:"\u9694\u79bb\u8282\u70b9"}),"\uff1b\u5982\u679c\u9694\u79bb\u8282\u70b9\u540e\u81ea\u52a8\u4ea7\u751f\u7684 Leader \u4e0d\u662f\u6700\u4f18\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e3b\u52a8\u5207\u4e3b\u7684\u65b9\u5f0f\u5c06 Primary Zone \u5207\u5230\u6307\u5b9a Zone\uff0c\u4e3b\u52a8\u5207\u4e3b\u7684\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050139",children:"\u6570\u636e\u5e93\u5c42\u9ad8\u53ef\u7528"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u6545\u969c\u8282\u70b9\u7684\u540e\u7eed\u5904\u7406\uff0c\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u573a\u666f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6545\u969c OBServer \u53ef\u4ee5\u91cd\u65b0\u542f\u52a8"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8bba\u6545\u969c\u673a\u5668\u4e4b\u524d\u5904\u4e8e\u4f55\u79cd\u5fc3\u8df3\u72b6\u6001\uff0cOBServer \u91cd\u65b0\u542f\u52a8\u540e\uff0cOBServer \u4e0e Root Service \u4e4b\u95f4\u7684\u5fc3\u8df3\u6570\u636e\u5305\u6062\u590d\u4ee5\u540e\uff0cOBServer \u53ef\u91cd\u65b0\u63d0\u4f9b\u670d\u52a1\u3002\u91cd\u542f OBServer \u7684\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050176",children:"\u91cd\u542f\u8282\u70b9"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6545\u969c OBServer \u635f\u574f\uff0c\u65e0\u6cd5\u91cd\u65b0\u542f\u52a8"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u786e\u8ba4 OBServer \u635f\u574f\u65e0\u6cd5\u91cd\u65b0\u542f\u52a8\u540e\uff0c\u9700\u8981\u8d70\u673a\u5668\u66ff\u6362\u6d41\u7a0b\uff0c\u5373\u4e0b\u7ebf\u6545\u969c\u8282\u70b9\uff0c\u5e76\u91cd\u65b0\u4e0a\u7ebf\u65b0\u673a\u5668\u3002\u6709\u5173\u66ff\u6362\u673a\u5668\u7684\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050171",children:"\u66ff\u6362\u8282\u70b9"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u673a\u623f\u5bb9\u707e",children:"\u673a\u623f\u5bb9\u707e"}),"\n",(0,r.jsxs)(n.p,{children:["\u673a\u623f\u7ea7\u5bb9\u707e\u8981\u6c42\u96c6\u7fa4\u90e8\u7f72\u6ee1\u8db3\u591a\u673a\u623f\u90e8\u7f72\u6761\u4ef6\uff0c\u4f8b\u5982\uff0c\u540c\u57ce\u4e09\u4e2d\u5fc3\u548c\u4e24\u5730\u4e09\u4e2d\u5fc3\u3002\u8be5\u90e8\u7f72\u6a21\u5f0f\u4e0b\uff0c\u4efb\u4f55\u673a\u623f\u6545\u969c\u5bfc\u81f4\u5c11\u6570\u6d3e\u526f\u672c\u4e0d\u53ef\u7528\u65f6\uff0c\u5269\u4e0b\u7684\u591a\u6570\u6d3e\u526f\u672c\u4f9d\u7136\u53ef\u4ee5\u7ee7\u7eed\u63d0\u4f9b\u670d\u52a1\uff0c\u4fdd\u8bc1\u96f6\u6570\u636e\u4e22\u5931\u3002\u5982\u679c\u673a\u623f\u6545\u969c\u4ec5\u5f71\u54cd\u5230\u5355\u4e2a Zone\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 Stop Zone \u7684\u65b9\u5f0f\u9694\u79bb\u6545\u969c\u526f\u672c\uff0c\u901a\u8fc7 Stop Zone \u9694\u79bb\u6545\u969c Zone \u7684\u76f8\u5173\u64cd\u4f5c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050170",children:"\u9694\u79bb Zone"}),"\uff1b\u5982\u679c\u673a\u623f\u6545\u969c\u5f71\u54cd\u5230\u591a\u4e2a Zone\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e3b\u52a8\u5207\u4e3b\u7684\u65b9\u5f0f\u5c06 Leader \u5207\u6362\u5230\u6307\u5b9a Zone\uff0c\u4e3b\u52a8\u5207\u4e3b\u7684\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001050139",children:"\u6570\u636e\u5e93\u5c42\u9ad8\u53ef\u7528"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u57ce\u5e02\u5bb9\u707e",children:"\u57ce\u5e02\u5bb9\u707e"}),"\n",(0,r.jsx)(n.p,{children:"\u57ce\u5e02\u7ea7\u5bb9\u707e\u8981\u6c42\u96c6\u7fa4\u90e8\u7f72\u6ee1\u8db3\u591a\u57ce\u5e02\u90e8\u7f72\u6761\u4ef6\uff0c\u4f8b\u5982\uff0c\u4e09\u5730\u4e94\u4e2d\u5fc3\u3002\u8be5\u90e8\u7f72\u6a21\u5f0f\u4e0b\uff0c\u4efb\u610f\u4e00\u4e2a\u57ce\u5e02\u6545\u969c\uff0c\u6700\u591a\u635f\u5931\u4e24\u4e2a\u526f\u672c\uff0c\u5269\u4e0b\u7684\u591a\u6570\u6d3e\u526f\u672c\u4f9d\u7136\u53ef\u4ee5\u7ee7\u7eed\u63d0\u4f9b\u670d\u52a1\uff0c\u4fdd\u8bc1\u96f6\u6570\u636e\u4e22\u5931\u3002\u5982\u679c\u81ea\u52a8\u9009\u4e3e\u4ea7\u751f\u7684 Leader \u4e0d\u662f\u6700\u4f18\uff0c\u6216\u8005\u4e3a\u4e86\u907f\u514d\u57ce\u5e02\u7ea7\u6545\u969c\u7684\u95f4\u9699\u6027\u5f71\u54cd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5207\u4e3b\u7684\u65b9\u5f0f\u5c06 Leader \u5207\u6362\u5230\u6700\u4f18 Zone\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(96540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);