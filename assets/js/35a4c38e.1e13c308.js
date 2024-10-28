"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2103],{74774:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=a(74848),i=a(28453);const s={title:"\u7248\u672c\u5347\u7ea7\u8def\u5f84",weight:1},t=void 0,c={id:"user_manual/operation_and_maintenance/operations_and_maintenance/version_upgrade_path",title:"\u7248\u672c\u5347\u7ea7\u8def\u5f84",description:"\u80cc\u666f",source:"@site/docs/user_manual/operation_and_maintenance/operations_and_maintenance/01_version_upgrade_path.md",sourceDirName:"user_manual/operation_and_maintenance/operations_and_maintenance",slug:"/user_manual/operation_and_maintenance/operations_and_maintenance/version_upgrade_path",permalink:"/docs/user_manual/operation_and_maintenance/operations_and_maintenance/version_upgrade_path",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/operations_and_maintenance/01_version_upgrade_path.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7248\u672c\u5347\u7ea7\u8def\u5f84",weight:1},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u5e38\u7528\u7684\u51e0\u79cd\u5bb9\u707e\u90e8\u7f72\u65b9\u6848",permalink:"/docs/user_manual/operation_and_maintenance/disaster_recovery_architecture_design/common_disaster_recovery_deployment_models"},next:{title:"\u524d\u8a00",permalink:"/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/introduction"}},d={},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4ea7\u54c1\u7248\u672c\u53f7",id:"\u4ea7\u54c1\u7248\u672c\u53f7",level:2},{value:"Barrier \u7248\u672c",id:"barrier-\u7248\u672c",level:2},{value:"\u5347\u7ea7\u62d3\u6251",id:"\u5347\u7ea7\u62d3\u6251",level:2},{value:"What Else",id:"what-else",level:2}];function l(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,r.jsx)(n.p,{children:"\u300aDBA \u8fdb\u9636\u6559\u7a0b\u300b\u4e2d\u7684\u8fd9\u7bc7\u5185\u5bb9\uff0c\u6e90\u81ea OceanBase \u793e\u533a\u8bba\u575b\u4e2d\u4e00\u4f4d\u53eb\u505a\u7687\u752b\u4faf\u7684\u7528\u6237\u7684\u5efa\u8bae\uff0c\u8fd9\u4f4d\u7528\u6237\u5e0c\u671b\u6211\u4eec\u80fd\u591f\u4e3a\u7528\u6237\u8bb2\u89e3\u4e00\u4e0b OceanBase \u7684\u7248\u672c\u5347\u7ea7\u8def\u5f84\u3002\u5728\u8fd9\u7bc7\u6587\u6863\u91cc\uff0c\u6211\u4f1a\u628a\u4e2a\u4eba\u8ba4\u4e3a\u9700\u8981\u7528\u6237\u4e86\u89e3\u7684\u7248\u672c\u5347\u7ea7\u77e5\u8bc6\u505a\u4e00\u4e2a\u7b80\u5355\u7684\u603b\u7ed3\u548c\u5206\u4eab\uff0c\u5e0c\u671b\u80fd\u591f\u5bf9\u5927\u5bb6\u6709\u6240\u5e2e\u52a9\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(74692).A+"",width:"1292",height:"840"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5927\u5bb6\u5728\u5bf9 OceanBase \u7684\u8fd0\u7ef4\u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u6709\u54ea\u4e9b\u5e0c\u671b\u4e86\u89e3\u7684\u5185\u5bb9\uff0c\u6b22\u8fce\u5728",(0,r.jsx)(n.a,{href:"https://ask.oceanbase.com/t/topic/35610431",children:"\u300aOceanBase 4.x \u8fd0\u7ef4\u5f00\u53d1\u624b\u518c\u300b\u7528\u6237\u610f\u89c1\u6536\u96c6"}),"\u8fd9\u4e2a\u5e16\u5b50\u91cc\u7559\u8a00\u8bc4\u8bba\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u5927\u5bb6\u7684\u610f\u89c1\u548c\u5efa\u8bae\u4e0d\u65ad\u5b8c\u5584\u8fd9\u4e2a\u300aDBA \u8fdb\u9636\u6559\u7a0b\u300b\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4ea7\u54c1\u7248\u672c\u53f7",children:"\u4ea7\u54c1\u7248\u672c\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4ecb\u7ecd\u5347\u7ea7\u8def\u5f84\u4e4b\u524d\uff0c\u5148\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b OceanBase \u7684\u4ea7\u54c1\u7248\u672c\u53f7\uff0c\u4ea7\u54c1\u7248\u672c\u53f7\u4ee3\u8868 observer \u7684\u7248\u672c\uff0c\u6bcf\u6b21\u53d1\u7248\u65f6\u90fd\u4f1a\u63a8\u9ad8\u7248\u672c\u53f7\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7248\u672c\u53f7\u7684\u7b2c\u4e00\u4f4d\u4ee3\u8868\u67b6\u6784\u7684\u7ea7\u522b\uff0c\u4fee\u6539\u67b6\u6784\u624d\u4f1a\u63a8\u7b2c\u4e00\u4f4d\u7248\u672c\u53f7\uff0c\u76ee\u524d\uff082024.09.05\uff09\u6700\u65b0\u7248\u672c\u662f 4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7248\u672c\u53f7\u7684\u7b2c\u4e8c/\u4e09\u4f4d\uff0c\u4ee3\u8868\u65b0\u589e\u4e86\u4e0d\u540c\u7ea7\u522b\u7684\u5927 feature\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7248\u672c\u53f7\u7b2c\u56db\u4f4d\uff0c\u5219\u662f\u4ee3\u8868\u6bcf\u4e2a\u5206\u652f\u7248\u672c\u4e0b\uff0c\u5b9a\u671f\u5bf9\u4e00\u6279 bugfix \u8fdb\u884c\u96c6\u4e2d\u6253\u5305\u540e\u53d1\u5e03\u7684 BP (Bundle Patch) \u7248\u672c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u524d\u4e09\u4f4d\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u7b2c\u56db\u4f4d\u8d8a\u5927\u5219\u4ee3\u8868\u5f53\u524d\u7248\u672c\u63a8\u51fa\u8d8a\u665a\u3002\u524d\u4e09\u4f4d\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u901a\u8fc7\u4ea7\u54c1\u7248\u672c\u53f7\u6bd4\u8f83\u83b7\u5f97\u4ea7\u54c1\u63a8\u51fa\u65f6\u95f4\uff0c\u56e0\u6b64\u4e00\u4e9b bugfix \u662f\u5426\u5b58\u5728\u9700\u8981\u6839\u636e\u4ea7\u54c1\u62d3\u6251\u56fe\u51b3\u5b9a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6bcf\u4e00\u4f4d\u7248\u672c\u53f7\u540e\u9762\u8fd8\u53ef\u80fd\u4f1a\u6709\u540e\u7f00\uff0c\u4f8b\u5982 CE\u3001LTS\u3001HF \u7b49\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CE\uff08Community Edition\uff09\u4ee3\u8868\u793e\u533a\u7248\u3002"}),"\n",(0,r.jsx)(n.li,{children:"LTS\uff08Long-Term Support\uff09\u4ee3\u8868\u957f\u671f\u652f\u6301\u7248\uff0c\u4f1a\u5728\u8fd9\u4e2a\u7248\u672c\uff0c\u957f\u671f\u89e3\u51b3\u7a33\u5b9a\u6027 bug\u3002"}),"\n",(0,r.jsx)(n.li,{children:"HF\uff08HotFix\uff09\u8868\u793a\u53ea\u589e\u52a0\u4e86\u5173\u952e bugfix \u7684\u7248\u672c\uff0c\u65e8\u5728\u89e3\u51b3\u4e2a\u522b \u201c\u8d70\u6295\u65e0\u8def\u201d \u96be\u4ee5\u7ed5\u8fc7\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["GA\uff08General Availability\uff09\u4ee3\u8868\u7a33\u5b9a\u7248\u672c\uff0c\u662f\u751f\u4ea7\u73af\u5883\uff08\u5373\u6b63\u5f0f\u4f7f\u7528\u73af\u5883\uff09\u4e0b\u5b89\u5168\u53ef\u9760\u7684\uff0c\u53ef\u4ee5\u5e7f\u6cdb\u90e8\u7f72\u548c\u7528\u4e8e\u65e5\u5e38\u4e1a\u52a1\u64cd\u4f5c\u7684\u7248\u672c\u3002\u5728",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001049779",children:"\u5b98\u7f51"}),"\u4e0a\u53ef\u4ee5\u770b\u5230 4.3.1 \u5c31\u662f\u4e00\u4e2a GA \u7248\u672c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\u4e0b\u56fe\u4e2d 4.2.1_BP8(LTS) \u5c31\u8868\u793a\u662f 4.2.1 \u8fd9\u4e2a\u7248\u672c\u4e2d\u8fdb\u884c\u8fc7 8 \u6b21 Bundle Patch \u7684\u957f\u671f\u652f\u6301\u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(11551).A+"",width:"2668",height:"1436"})}),"\n",(0,r.jsx)(n.h2,{id:"barrier-\u7248\u672c",children:"Barrier \u7248\u672c"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8f7d\u4e86\u4e00\u4e2a 4.2.3.1 \u7684 observer\uff0c\u60f3\u6d4b\u8bd5\u4e0b\u901a\u8fc7 OCP \u628a\u5f88\u4e45\u5f88\u4e45\u4e4b\u524d\u90e8\u7f72\u7684\u4e00\u4e2a\u5355\u673a\u7684 4.1.0.1 \u7ed9\u5347\u7ea7\u5230 4.2.3.1 \u7248\u672c\uff08\u6d4b\u8bd5\u96c6\u7fa4\u662f\u5355\u673a\u5355\u526f\u672c\uff0c\u6240\u4ee5\u6ca1\u6cd5\u513f\u8f6e\u8f6c\u5347\u7ea7\uff0c\u53ea\u80fd\u505c\u670d\u5347\u7ea7\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(14614).A+"",width:"1012",height:"1214"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u4ee5\u4e3a\u5403\u7740\u706b\u9505\u5531\u7740\u6b4c\u5c31\u80fd\u628a\u7ea7\u7ed9\u5347\u4e86\uff0c\u7ed3\u679c\u4e0d\u5de7\uff0cOCP \u8bf4\u8fd8\u9700\u8981\u7ed9\u5b83\u4e0a\u4f20\u4e00\u4e2a\u989d\u5916\u7684 barrier \u7248\u672c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9700\u8981\u4e0b\u8f7d\u4e24\u4e2a observer \u7684 binary \u63d0\u4f9b\u7ed9 OCP\uff0c\u4e00\u4e2a\u662f\u9700\u8981\u7ecf\u505c\u7684 4.2.1.2\uff0c\u4e00\u4e2a\u662f\u7ec8\u70b9\u7ad9 4.2.3.1\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(54697).A+"",width:"1592",height:"1226"})}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4f9b\u5b8c\u4e86 barrier \u7248\u672c\u7684\u5305\u5c31\u4e0d\u7528\u7ba1\u4e86\uff0cOCP \u4f1a\u5e2e\u4f60\u628a\u96c6\u7fa4\u76f4\u63a5\u5347\u7ea7\u5230\u6700\u7ec8\u7684 4.2.3.1 \u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(60224).A+"",width:"1349",height:"501"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b63\u597d\u4e5f\u8d81\u8fd9\u4e2a\u673a\u4f1a\uff0c\u5728\u4ecb\u7ecd\u5347\u7ea7\u62d3\u6251\u4e4b\u524d\uff0c\u5148\u8bf4\u4e00\u4e0b\u4ec0\u4e48\u662f barrier \u7248\u672c\uff0c\u4ee5\u53ca barrier \u7248\u672c\u7684\u4f5c\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OceanBase \u5728\u5f88\u591a\u7248\u672c\u4e4b\u95f4\uff0c\u90fd\u652f\u6301\u4e0d\u505c\u673a\u5730\u8fdb\u884c\u8f6e\u8f6c\u5347\u7ea7\u3002\u8f6e\u8f6c\u5347\u7ea7\u5c31\u662f\u8bf4\u8ba9\u96c6\u7fa4\u91cc\u7684\u5404\u4e2a\u4f4e\u7248\u672c observer \u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u88ab\u8f6e\u6d41\u66ff\u6362\u6210\u9ad8\u7248\u672c\uff0c\u56e0\u4e3a\u662f\u9010\u4e2a\u66ff\u6362\uff0c\u6240\u4ee5\u53ea\u8981\u4fdd\u6301\u591a\u6570\u6d3e\u7684 observer \u8fd8\u5728\uff0c\u5c31\u53ef\u4ee5\u6301\u7eed\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u3002\u5728\u96c6\u7fa4\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u9ad8\u7248\u672c\u7684 observer \u9700\u8981\u4ee5\u4f4e\u7248\u672c\u7684\u6a21\u5f0f\u6301\u7eed\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u76f4\u5230\u5168\u90e8\u4f4e\u7248\u672c\u7684 observer \u90fd\u88ab\u66ff\u6362\u6210\u9ad8\u7248\u672c\u4e3a\u6b62\u3002\u56e0\u6b64\u9ad8\u7248\u672c\u9700\u8981\u7ee7\u7eed\u4fdd\u7559\u4f4e\u7248\u672c\u4e0a\u7684\u8001\u4ee3\u7801\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5373\u4f7f\u4f4e\u7248\u672c\u7684\u529f\u80fd\u5728\u9ad8\u7248\u672c\u4e0a\u88ab\u5e9f\u5f03\u4e86\uff0c\u4e3a\u4e86\u652f\u6301\u4e0d\u505c\u673a\u5347\u7ea7\uff0c\u9ad8\u7248\u672c\u7684 observer \u4e2d\u4e5f\u9700\u8981\u4fdd\u7559\u88ab\u5e9f\u5f03\u6389\u7684\u53e4\u8001\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u51cf\u5c11\u7ef4\u62a4\u7248\u672c\u4e4b\u95f4\u5347\u7ea7\u517c\u5bb9\u6027\u7684\u5f00\u9500\uff0c\u907f\u514d\u8ba9\u4e00\u4e2a\u8d85\u7ea7\u53e4\u8001\u7684\u7248\u672c\u76f4\u63a5\u5347\u7ea7\u5230\u5f53\u524d\u6700\u65b0\u7248\u672c\uff0c\u5e26\u6765\u5927\u91cf\u7684\u517c\u5bb9\u4ee3\u7801\u7ef4\u62a4\u8d1f\u62c5\u3002OceanBase \u5f15\u5165\u4e86\u4e00\u4e2a barrier \u7248\u672c\u7684\u6982\u5ff5\u3002barrier \u7248\u672c\u6307\u7684\u662f\u67d0\u4e2a\u4f4e\u7248\u672c\u5347\u7ea7\u5230\u67d0\u4e2a\u9ad8\u7248\u672c\u8fc7\u7a0b\u4e2d\uff0c\u5fc5\u987b\u8981\u7ecf\u505c\u7684\u7248\u672c\u3002\u5728\u6b64 barrier \u7248\u672c\u4e4b\u524d\u7684\u7248\u672c\uff0c\u5fc5\u987b\u8981\u5148\u5347\u7ea7\u5230 barrier \u7248\u672c\uff0c\u624d\u80fd\u7ee7\u7eed\u5347\u7ea7\u5230\u540e\u7eed\u7248\u672c\u3002\u8fd9\u6837\u7814\u53d1\u540c\u5b66\u5728\u4ee3\u7801\u4e2d\uff0c\u5c31\u4e0d\u5fc5\u8003\u8651\u6700\u65b0\u7248\u672c\u548c\u4e0a\u4e00\u4e2a barrier \u7248\u672c\u4e4b\u524d\u7684\u5404\u79cd\u517c\u5bb9\u6027\u95ee\u9898\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5927\u5bb6\u89c9\u5f97\u4e0a\u9762\u8fd9\u4e24\u6bb5\u4ecb\u7ecd barrier \u4f5c\u7528\u7684\u6587\u5b57\u5b9e\u5728\u96be\u4ee5\u7406\u89e3\uff0c\u4e5f\u6ca1\u6709\u5173\u7cfb\u3002\u53ea\u8981\u770b\u61c2\u4e0b\u9762\u4e24\u5f20\u56fe\uff0c\u80fd\u591f\u4e86\u89e3\u4ec0\u4e48\u662f barrier \u7248\u672c\uff0c\u57fa\u672c\u4e5f\u5c31\u591f\u7528\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u56fe\u4e2d\u6709\u4e94\u4e2a\u7248\u672c A\u3001B\u3001C\u3001D\u3001E\uff0c\u5176\u4e2d C \u662f barrier \u7248\u672c\u3002\u5bf9\u4e8e A\u3001B \u6765\u8bf4\uff0c\u90fd\u53ef\u4ee5\u76f4\u63a5\u5347\u7ea7\u5230 C\u3002\u5bf9\u4e8e\u7248\u672c C \u6765\u8bf4\uff0c\u53ef\u4ee5\u76f4\u63a5\u5347\u7ea7\u5230 D \u6216 E\u3002\u4f46\u662f A\u3001B \u65e0\u6cd5\u76f4\u63a5\u5347\u7ea7\u5230 D\u3001E\uff0c\u4ed6\u4eec\u5347\u7ea7\u5230 D\u3001E \u7684\u8def\u5f84\u4e0a\uff0c\u90fd\u9700\u8981\u7ecf\u505c\u7248\u672c C\uff0c\u5373\u5148\u5347\u7ea7\u5230\u7248\u672c C\uff0c\u518d\u5347\u7ea7\u5230 D\u3001E\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(38555).A+"",width:"1664",height:"320"})}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u70b9\u662f barrier \u662f\u9488\u5bf9\u67d0\u4e2a\u7248\u672c\u7684\uff0c\u5373\u8fd9\u4e2a barrier \u53ef\u80fd\u5bf9\u4e00\u4e9b\u7248\u672c\u662f barrier\uff0c\u5347\u7ea7\u5fc5\u987b\u7ecf\u505c\uff0c\u5bf9\u53e6\u4e00\u4e9b\u5219\u4e0d\u662f barrier\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u56fe\u4e2d\u6709\u56db\u4e2a\u7248\u672c A\u3001B\u3001C\u3001D\uff0c\u5176\u4e2d C \u5bf9\u4e8e A \u6765\u8bf4\u662f barrier\u7248\u672c\uff0c\u90a3\u4e48\u5982\u679c A \u8981\u5347\u7ea7\u5230 D\uff0c\u5c31\u5fc5\u987b\u8981\u7ecf\u505c C\uff0c\u65e0\u6cd5\u76f4\u63a5\u5347\u7ea7\u5230 D\uff0c\u6574\u4e2a\u5347\u7ea7\u6d41\u7a0b\u662f A -> C -> D\u3002\u800c C \u5bf9\u4e8e B \u6765\u8bf4\u4e0d\u662f barrier \u7248\u672c\uff0c\u6240\u4ee5 B \u53ef\u4ee5\u76f4\u63a5\u5347\u7ea7\u5230 D\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(23730).A+"",width:"1228",height:"388"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0a\u9762\u5199\u7684 \u201c\u7ecf\u505c\u201d \u5e76\u4e0d\u4ee3\u8868\u9700\u8981\u505c\u673a\u5347\u7ea7\uff0c\u53ea\u662f\u6bd4\u55bb\u5347\u7ea7\u8fc7\u7a0b\u9700\u8981\u7ecf\u5386\u5148\u5347\u7ea7\u5230 barrier \u7248\u672c\uff0c\u518d\u5347\u7ea7\u5230\u76ee\u6807\u7248\u672c\u7684\u8fd9\u6837\u4e00\u4e2a\u8fc7\u7a0b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5347\u7ea7\u62d3\u6251",children:"\u5347\u7ea7\u62d3\u6251"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u505c\u4e86 barrier \u7248\u672c\u8fd9\u4e00\u90e8\u5206\u5185\u5bb9\u4e4b\u540e\uff0c\u7ec8\u4e8e\u6765\u5230\u4e86\u5347\u7ea7\u62d3\u6251\u3002\u5b9a\u4e49\u5347\u7ea7\u62d3\u6251\u56fe\u7684\u6587\u4ef6\u53eb ",(0,r.jsx)(n.a,{href:"https://github.com/oceanbase/oceanbase/blob/develop/tools/upgrade/oceanbase_upgrade_dep.yml",children:"oceanbase_upgrade_dep.yml"}),"\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\uff0c\u53ef\u4ee5\u70b9\u5f00\u524d\u9762\u7684\u94fe\u63a5\u770b\u770b github \u4e2d\u7684\u5bf9\u5e94\u6587\u4ef6\uff0c\u6587\u4ef6\u91cc\u6709\u4e0d\u5c11\u6709\u4ef7\u503c\u7684\u4e2d\u6587\u6ce8\u91ca\u4f9b\u5927\u5bb6\u53c2\u8003\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u6587\u4ef6\u4f1a\u653e\u5728\u5b89\u88c5\u76ee\u5f55\u91cc\uff0c\u4e0d\u540c\u7248\u672c\u7684\u5185\u5bb9\u7565\u6709\u4e0d\u540c\uff0c\u56e0\u4e3a\u53d1\u73b0\u7f16\u8bd1\u5b89\u88c5\u548c\u901a\u8fc7 OCP \u5b89\u88c5\u7684\u6587\u4ef6\u8def\u5f84\u597d\u50cf\u8fd8\u4e0d\u592a\u4e00\u6837\uff0c\u6240\u4ee5\u5c31\u8bf7\u5927\u5bb6\u81ea\u884c\u5728\u51c6\u5907\u5347\u7ea7\u5230\u7684\u6700\u9ad8\u7248\u672c\u7684\u5305\u91cc find \u4e0b\u5427\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(94581).A+"",width:"1358",height:"168"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(58668).A+"",width:"1326",height:"164"})}),"\n",(0,r.jsx)(n.p,{children:"\u5347\u7ea7\u62d3\u6251\u4e3b\u8981\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"version: \u5f85\u5347\u7ea7\u7684\u7248\u672c\uff0c\u6216\u8005\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7ecf\u8fc7\u7684\u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"can_be_upgraded_to\uff1a\u5f53\u524d\u7248\u672c\u53ef\u4ee5\u76f4\u63a5\u5347\u7ea7\u5230\u7684\u7248\u672c\u53f7\u3002"}),"\n",(0,r.jsx)(n.li,{children:"deprecated\uff1a\u7f3a\u7701\u4e3a False\u3002\u5982\u679c\u4e3a True\uff0c\u8868\u793a\u8fd9\u4e2a\u7248\u672c\u5df2\u7ecf\u5e9f\u9664\u3002\u53ef\u4ee5\u4f5c\u4e3a\u5347\u7ea7\u7684\u8d77\u70b9\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u5347\u7ea7\u8fc7\u5ea6\u7248\u672c\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u4f5c\u4e3a\u5347\u7ea7\u76ee\u6807\u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"require_from_binary\uff1a\u7f3a\u7701\u4e3a False\u3002\u5982\u679c\u4e3a True\uff0c\u8868\u793a\u662f\u4e0a\u9762\u63d0\u5230\u7684 barrier \u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"when_come_from\uff1a\u4e00\u822c\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u4f34\u968f require_from_binary \u51fa\u73b0\uff0c\u8868\u793a\u4ece\u5217\u8868\u4e2d\u7684\u7248\u672c\u5347\u7ea7\u65f6\uff0c\u9700\u8981\u7ecf\u505c\u5f53\u524d\u7248\u672c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image.png",src:a(20706).A+"",width:"2416",height:"1162"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u56fe\u662f\u4e00\u4e2a\u5347\u7ea7\u7684\u4f8b\u5b50\uff0c\u4e3a\u65b9\u4fbf\u5927\u5bb6\u7406\u89e3\u505a\u4e86\u4e00\u4e9b\u7b80\u5316\uff0c\u4e0d\u4ee3\u8868\u67d0\u4e2a\u771f\u5b9e\u7248\u672c\u5347\u7ea7\u62d3\u6251\uff08\u4e0d\u540c\u7248\u672c\u7684\u771f\u5b9e\u5347\u7ea7\u62d3\u6251\u8be6\u89c1\u5b89\u88c5\u8def\u5f84\u4e2d\u7684 oceanbase_upgrade_dep.yml \u6587\u4ef6\uff0c\u4e00\u822c\u53ef\u80fd\u4f1a\u6bd4\u4e0a\u56fe\u7565\u5fae\u590d\u6742\u4e00\u4e9b\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56fe\u4e2d\u5de6\u8fb9\u6709\u56db\u4e2a\u7248\u672c\uff0c\u5206\u522b\u662f 4000\u30014001\u30014100\u30014200\uff08\u8fd9\u91cc\u5077\u61d2\u7701\u53bb\u6570\u5b57\u4e4b\u95f4\u7684\u70b9\u53f7\uff09\uff0c\u5176\u4e2d 4100 \u662f\u4e00\u4e2a barrier \u7248\u672c\uff0cwhen_come_from: [4.0.0.0] \u8868\u793a\u5f53\u4f4e\u7248\u672c\u662f\u4ece 4000 \u5347\u7ea7\u8fc7\u6765\u65f6\uff0c\u9700\u8981\u7ecf\u505c 4100\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u56e0\u4e3a when_come_from \u5217\u8868\u4e2d\u6ca1\u6709 4001\uff0c\u6240\u4ee5 4001 \u53ef\u4ee5\u76f4\u63a5\u5347\u7ea7\u5230 4200\uff0c\u4e0d\u9700\u8981\u7ecf\u505c 4100\u3002\u8fd9\u91cc\u518d\u6b21\u5f3a\u8c03\u4e0b barrier \u7248\u672c\u662f\u76f8\u5bf9\u4e8e\u67d0\u4e2a\u7248\u672c\u800c\u8a00\u7684\uff0c\u4f8b\u5982\u8fd9\u91cc\u7684 4100 \u76f8\u5bf9\u4e8e 4000 \u662f barrier \u7248\u672c\uff0c\u4f46\u662f\u76f8\u5bf9\u4e8e 4001 \u5219\u4e0d\u662f barrier \u7248\u672c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5927\u5bb6\u53ef\u4ee5\u8fd9\u4e48\u7406\u89e3\uff1a\u6574\u4e2a\u5347\u7ea7\u6587\u4ef6\u6784\u6210\u4e86\u4e00\u5f20\u7c7b\u4f3c\u4e8e\u4e0a\u56fe\u4e2d\u53f3\u4fa7\u7684\u6709\u5411\u65e0\u73af\u56fe\uff0c\u6574\u4e2a\u5347\u7ea7\u6d41\u7a0b\u5c31\u5b8c\u5168\u5c55\u793a\u5728\u8fd9\u5f20\u5347\u7ea7\u62d3\u6251\u56fe\u4e0a\u3002\u9664\u975e\u67d0\u4e2a barrier \u7248\u672c\u6307\u5b9a\u8bf4\u4ece\u67d0\u4e2a\u7279\u5b9a\u7684\u8d77\u59cb\u7248\u672c\u5347\u7ea7\u4e0a\u6765\u5c31\u9700\u8981\u7ecf\u505c\u5b83\u8fd9\u4e2a\u7248\u672c\uff0c\u5426\u5219\u5c31\u53ef\u4ee5\u7ee7\u7eed\u5728\u8fd9\u4e2a\u56fe\u4e0a\u5f80\u540e\u4e0d\u7ecf\u505c\uff0c\u76f4\u63a5\u5347\u7ea7\u5230\u76ee\u6807\u7248\u672c\u3002\uff08\u8fd9\u6bb5\u8bdd\u7a0d\u5fae\u6709\u4e00\u70b9\u513f\u7ed5\uff0c\u5927\u5bb6\u7ed3\u5408\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u7406\u89e3\u4e0b~\uff09"}),"\n",(0,r.jsx)(n.h2,{id:"what-else",children:"What Else"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"https://ask.oceanbase.com/t/topic/35611595/15",children:"\u793e\u533a\u8bba\u575b\u7684\u5e16\u5b50"}),"\u91cc\uff0c\u6709\u51e0\u4e2a\u7528\u6237\u540c\u65f6\u53cd\u9988\u8bf4 \u201c\u5e0c\u671b\u80fd\u901a\u8fc7\u4e00\u4e2a\u5de5\u5177\uff0c\u8f93\u5165\u5347\u7ea7\u524d\u540e\u7684\u7248\u672c\uff0c\u8f93\u51fa\u5bf9\u5e94\u7684\u5347\u7ea7\u8def\u5f84\u201d\u3002\u8fd9\u4e2a\u91cd\u4efb\u5c31\u4ea4\u7ed9\u9756\u987a\u8001\u54e5\u6b63\u5728\u4e0d\u65ad\u5b8c\u5584\u7684\u5de5\u5177 ",(0,r.jsx)(n.a,{href:"https://github.com/oceanbase/obdiag/issues/428",children:"obdiag"})," \u4e86 \uff01"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},74692:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/001-d3ac5f24ccfcff5496596603bee0b1d4.png"},11551:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/002-4c510ba79eb05ebaca5f3367f4d65dc3.png"},14614:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/003-3f974ddd012b18e8237ec29778a1496e.png"},54697:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/004-70245e9a0e68a77673e139a8dadfbae2.png"},60224:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/005-b68560beab6fcad29189cda7119b7cca.png"},38555:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/006-7617c718347b8dbbad00fe4242a3d9d2.png"},23730:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/007-14e86f14eea989f7b1084716121394a6.png"},94581:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/008-cd617d7c344e8aa2ec8ca82ab313b92d.png"},58668:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/009-70d8e9362faac44d18de7328f3b46d94.png"},20706:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/010-7123138f02a0b711cc8eae421e5edea5.png"},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var r=a(96540);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);