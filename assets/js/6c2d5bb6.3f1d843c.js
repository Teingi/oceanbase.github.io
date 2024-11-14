"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[3953],{28415:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(74848),a=i(28453);const l={title:"\u573a\u666f\u4ecb\u7ecd",weight:1},c=void 0,t={id:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/introduction",title:"\u573a\u666f\u4ecb\u7ecd",description:"\u5173\u952e\u5b57\uff1a\u8d44\u6e90\u6c60\u5316 | \u53ef\u7ba1\u7406\u6027 | \u964d\u4f4e\u6210\u672c",source:"@site/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/01_introduction.mdx",sourceDirName:"user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants",slug:"/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/introduction",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/01_introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u573a\u666f\u4ecb\u7ecd",weight:1},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u53c2\u6570\u6a21\u677f",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/parameter_templates"},next:{title:"\u79df\u6237\u80cc\u666f\u77e5\u8bc6",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/background_knowledge"}},r={},d=[{value:"SaaS \u8d44\u6e90\u6574\u5408\u573a\u666f",id:"saas-\u8d44\u6e90\u6574\u5408\u573a\u666f",level:2},{value:"\u5fae\u670d\u52a1\u67b6\u6784",id:"\u5fae\u670d\u52a1\u67b6\u6784",level:3},{value:"\u591a\u79df\u6237 SaaS \u670d\u52a1",id:"\u591a\u79df\u6237-saas-\u670d\u52a1",level:3},{value:"\u884c\u4e1a\u73b0\u72b6\u4e0e\u6311\u6218",id:"\u884c\u4e1a\u73b0\u72b6\u4e0e\u6311\u6218",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u65b9\u6848\u4f18\u52bf",id:"\u65b9\u6848\u4f18\u52bf",level:2},{value:"\u7528\u6237\u6848\u4f8b",id:"\u7528\u6237\u6848\u4f8b",level:2},{value:"\u591a\u70b9 DMALL\uff08\u5178\u578b\u7528\u6237\u6848\u4f8b\uff09",id:"\u591a\u70b9-dmall\u5178\u578b\u7528\u6237\u6848\u4f8b",level:3},{value:"\u4e1a\u52a1\u6311\u6218",id:"\u4e1a\u52a1\u6311\u6218",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:4},{value:"\u7528\u6237\u6536\u76ca",id:"\u7528\u6237\u6536\u76ca",level:4},{value:"\u5176\u4ed6\u7528\u6237\u6848\u4f8b",id:"\u5176\u4ed6\u7528\u6237\u6848\u4f8b",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5173\u952e\u5b57\uff1a\u8d44\u6e90\u6c60\u5316 | \u53ef\u7ba1\u7406\u6027 | \u964d\u4f4e\u6210\u672c"}),"\n",(0,s.jsx)(n.p,{children:"OceanBase \u7684\u539f\u751f\u591a\u79df\u6237\u67b6\u6784\uff0c\u652f\u6301\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u6570\u636e\u5e93\u79df\u6237\uff0c\u6bcf\u4e2a\u79df\u6237\u53ef\u4ee5\u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5e93\u670d\u52a1\u3002\u79df\u6237\u95f4\u6570\u636e\u548c\u8d44\u6e90\u4e92\u76f8\u9694\u79bb\uff0c\u5e76\u4e14\u5728\u96c6\u7fa4\u5185\u7edf\u4e00\u8c03\u5ea6\u3002\u652f\u6301\u5728\u521b\u5efa\u79df\u6237\u65f6\u9009\u62e9\u4e0d\u540c\u7684\u517c\u5bb9\u6a21\u5f0f\uff0c\u6bcf\u4e2a\u79df\u6237\u53ef\u5355\u72ec\u914d\u7f6e\u6570\u636e\u526f\u672c\u6570\u91cf\u3001\u526f\u672c\u7c7b\u578b\u3001\u5b58\u50a8\u4f4d\u7f6e\u53ca\u8ba1\u7b97\u8d44\u6e90\u7b49\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"saas-\u8d44\u6e90\u6574\u5408\u573a\u666f",children:"SaaS \u8d44\u6e90\u6574\u5408\u573a\u666f"}),"\n",(0,s.jsx)(n.h3,{id:"\u5fae\u670d\u52a1\u67b6\u6784",children:"\u5fae\u670d\u52a1\u67b6\u6784"}),"\n",(0,s.jsx)(n.p,{children:"\u968f\u7740\u4f01\u4e1a\u5185\u4e1a\u52a1\u7cfb\u7edf\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u539f\u6765\u7684\u5355\u4f53\u670d\u52a1\u5728\u5de5\u7a0b\u548c\u7ba1\u7406\u4e0a\u53d8\u7684\u8d8a\u6765\u8d8a\u4e0d\u582a\u91cd\u8d1f\u3002\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u65b0\u589e\u548c\u8c03\u6574\u529f\u80fd\u53ea\u9700\u8981\u589e\u52a0\u65b0\u7684\u5fae\u670d\u52a1\u8282\u70b9\u3002\u4f46\u662f\u6bcf\u4e2a\u5fae\u670d\u52a1\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u6570\u636e\u5e93\u7684\u6570\u91cf\u5927\u5927\u589e\u52a0\uff0c\u53ef\u9760\u6027\u548c\u8fd0\u7ef4\u7ba1\u7406\u90fd\u5e26\u6765\u4e86\u6311\u6218\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7 OceanBase \u591a\u79df\u6237\u7279\u6027\uff0c\u7ba1\u7406\u5458\u53ea\u9700\u8981\u8fd0\u7ef4\u5c11\u91cf\u96c6\u7fa4\uff0c\u65e2\u80fd\u4fdd\u8bc1\u79df\u6237\u4e4b\u95f4\u6570\u636e\u548c\u8d44\u6e90\u4e92\u76f8\u9694\u79bb\uff0c\u53c8\u63d0\u5347\u4e86\u6570\u636e\u5e93\u7684\u7a33\u5b9a\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u591a\u79df\u6237-saas-\u670d\u52a1",children:"\u591a\u79df\u6237 SaaS \u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u4e91\u4e0a\u7684 SaaS \u670d\u52a1\u5546\uff0c\u5f80\u5f80\u63d0\u4f9b\u7684\u662f\u591a\u79df\u6237\u7684\u670d\u52a1\u3002\u591a\u4e2a\u4e1a\u52a1\u79df\u6237\u7684\u6570\u636e\u5e93\u5982\u679c\u5728\u4e00\u4e2a\u5355\u673a\u6570\u636e\u5e93\u4e2d\u505a\u903b\u8f91\u540d\u5b57\u7a7a\u95f4\u9694\u79bb\uff0c\u5927\u5c0f\u79df\u6237\u4e4b\u95f4\u4e92\u76f8\u5f71\u54cd\u3002\u5982\u679c\u6bcf\u4e2a\u4e1a\u52a1\u79df\u6237\u4f7f\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5e93\uff0c\u6210\u672c\u9ad8\uff0c\u51e0\u5341\u5230\u4e0a\u767e\u5957\u5206\u6563\u6570\u636e\u5e93\u73af\u5883\uff0c\u8fd0\u7ef4\u5de5\u4f5c\u590d\u6742\uff0c\u540c\u65f6\u6269\u5c55\u6027\u53d7\u9650\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7 OceanBase \u6570\u636e\u5e93\u5185\u539f\u751f\u591a\u79df\u6237\u7684\u7279\u6027\uff0c\u80fd\u591f\u66f4\u597d\u5730\u5e73\u8861\u9694\u79bb\u6027\u548c\u6210\u672c\uff0c\u800c\u4e14\u5927\u5c0f\u79df\u6237\u53ef\u4ee5\u72ec\u7acb\u8fdb\u884c\u6269\u7f29\u5bb9\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u884c\u4e1a\u73b0\u72b6\u4e0e\u6311\u6218",children:"\u884c\u4e1a\u73b0\u72b6\u4e0e\u6311\u6218"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b9e\u4f8b\u788e\u7247\u5316\uff1a\u4f01\u4e1a\u5185\u90e8\u591a\u4e2a\u4e0d\u540c\u4e1a\u52a1\u5e94\u7528\uff0c\u6216 SaaS \u4f01\u4e1a\u9762\u5411\u4e0d\u540c\u5ba2\u6237\u7684\u8d44\u6e90\u9694\u79bb\u9700\u6c42\uff0c\u4f1a\u5bfc\u81f4\u9700\u8981\u90e8\u7f72\u5927\u91cf\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\uff0c\u9020\u6210\u4e25\u91cd\u7684\u788e\u7247\u5316\uff0c\u5728\u67d0\u4e2a\u5173\u952e\u4e1a\u52a1\u6216\u5173\u952e\u5ba2\u6237\u9700\u6c42\u6fc0\u589e\u65f6\uff0c\u96be\u4ee5\u7075\u6d3b\u7684\u5f39\u6027\u6269\u5c55\uff0c\u6027\u80fd\u548c\u53ef\u7528\u6027\u96be\u4ee5\u4fdd\u8bc1\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u6d6a\u8d39\uff1a\u7531\u4e8e\u6570\u636e\u5e93\u8d44\u6e90\u7684\u788e\u7247\u5316\u90e8\u7f72\uff0c\u5355\u4e2a\u5b9e\u4f8b\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u5b9a\u7684\u6027\u80fd\u5f39\u6027\u7a7a\u95f4\uff0c\u5f80\u5f80\u4f1a\u591a\u5212\u51fa\u4e00\u90e8\u5206\u5bb9\u91cf\u4f5c\u4e3a\u77ed\u65f6\u95f4\u5185\u8bf7\u6c42\u589e\u957f\u7684\u9884\u5907\u8d44\u6e90\u3002\u8fd9\u79cd\u8d44\u6e90\u9884\u7559\u5728\u6574\u4f53\u4e1a\u52a1\u89c6\u89d2\u6765\u770b\u5b9e\u9645\u4e0a\u9020\u6210\u4e86\u5de8\u5927\u7684\u8d44\u6e90\u6d6a\u8d39\uff0c\u62ac\u9ad8\u4e86\u4f01\u4e1a\u8d44\u6e90\u6210\u672c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7ba1\u7406\u590d\u6742\uff1a\u5927\u91cf\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u540c\u65f6\u5e26\u6765\u7684\u8fd8\u6709\u7ba1\u7406\u6548\u7387\u7684\u964d\u4f4e\uff0c \u6570\u636e\u5e93\u76f8\u5173\u56e2\u961f\u96be\u4ee5\u5bf9\u6210\u767e\u751a\u81f3\u4e0a\u5343\u7684\u5b9e\u4f8b\u8fdb\u884c\u7cbe\u7ec6\u5316\u7ba1\u7406\uff0c \u51fa\u73b0\u6545\u969c\u3001\u6296\u52a8\u7b49\u4e8b\u4ef6\u65f6\u6062\u590d\u65f6\u6548\u5dee\uff0c\u5bf9\u6574\u4f53\u8d44\u6e90\u6c34\u4f4d\u7684\u628a\u63a7\u96be\u4ee5\u5168\u5c40\u638c\u63a7\uff0c\u62ac\u9ad8\u4e86\u4f01\u4e1a\u7684\u4eba\u529b\u7ba1\u7406\u6210\u672c\u3002"}),"\n",(0,s.jsx)("iframe",{width:"900",height:"505",src:"https://obbusiness-private.oss-cn-shanghai.aliyuncs.com/video-center/video/video/05%20%E5%A4%9A%E7%A7%9F%E6%88%B7%20cn.mp4",frameborder:"0",allow:"accelerometer;  autoplay;  encrypted-media;  gyroscope;  picture-in-picture",allowfullscreen:!0}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u4e8e OceanBase \u7684\u591a\u79df\u6237\u67b6\u6784\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5c06\u591a\u4e2a\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u96c6\u4e2d\u6574\u5408\uff0c\u63d0\u5347\u8d44\u6e90\u5229\u7528\u7387\uff0c\u540c\u65f6\u57fa\u4e8e Paxos \u7684\u591a\u526f\u672c\u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u6bcf\u4e2a\u8d44\u6e90\u5355\u5143\u7684\u9ad8\u53ef\u7528\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u65e2\u9002\u7528\u4e8e\u4e2d\u5927\u578b\u4f01\u4e1a\u5185\u90e8\u5927\u91cf\u4e0d\u540c\u4e1a\u52a1\u94fe\u8def\u7684\u8d44\u6e90\u6c60\u5316\uff0c\u4e5f\u9002\u7528\u4e8e\u5404\u4e2a\u884c\u4e1a SaaS \u670d\u52a1\u5546\uff0c\u4e3a\u4e0d\u540c\u5ba2\u6237\u63d0\u4f9b\u4e0d\u540c\u89c4\u683c\u7684\u5b9e\u4f8b\uff0c\u4fdd\u8bc1\u8d44\u6e90\u9694\u79bb\u6027\u7684\u540c\u65f6\u964d\u4f4e\u6210\u672c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(48633).A+"",width:"2061",height:"743"})}),"\n",(0,s.jsx)(n.h2,{id:"\u65b9\u6848\u4f18\u52bf",children:"\u65b9\u6848\u4f18\u52bf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u591a\u79df\u6237\u6c60\u5316\uff1a OceanBase  \u96c6\u7fa4\u539f\u751f\u5b9e\u73b0\u4e86\u591a\u79df\u6237\u4e0b\u7684\u8d44\u6e90\u9694\u79bb\u548c\u865a\u62df\u5316\uff0c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u53ef\u4ee5\u90e8\u7f72\u4e0a\u767e\u4e2a\u6570\u636e\u5e93\u5b9e\u4f8b\uff0c\u6bcf\u4e2a\u5b9e\u4f8b\u6570\u636e\u548c\u8d44\u6e90\u9694\u79bb\uff0c\u8ba1\u7b97\u8d44\u6e90\u539f\u5730\u5347\u914d\u79d2\u7ea7\u751f\u6548\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u591a\u7ef4\u5ea6\u5f39\u6027\uff1a\u57fa\u4e8e OceanBase \u7684\u591a\u8282\u70b9\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\u5355\u673a\u539f\u5730\u5347\u914d\u3001\u591a\u673a\u5f39\u6027\u6269\u5c55\uff0c\u591a\u673a\u6d41\u91cf\u5747\u8861\u591a\u4e2a\u7ef4\u5ea6\u7684\u6269\u5bb9\u64cd\u4f5c\uff0c\u5e76\u4e14\u6269\u5bb9\u5bf9\u4e0a\u5c42\u5e94\u7528\u900f\u660e\u3002\u5bf9\u4e8e\u6d89\u53ca\u6570\u636e\u8fc1\u79fb\u7684\u6269\u5c55\u65e0\u9700\u4eba\u5de5\u503c\u5b88\uff0cOceanBase  \u81ea\u52a8\u5b8c\u6210\u8fc1\u79fb\u4ee5\u53ca\u591a\u7ef4\u5ea6\u6570\u636e\u6821\u9a8c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7edf\u4e00\u7ba1\u7406\uff1a\u5c06\u591a\u4e2a\u96f6\u6563\u7684\u5b9e\u4f8b\u7edf\u4e00\u90e8\u7f72\u5728 OceanBase \u540e\uff0c\u8fd0\u7ef4\u7ba1\u7406\u7684\u590d\u6742\u5ea6\u5927\u5927\u964d\u4f4e\uff0cDBA \u4ece\u4e4b\u524d\u7ba1\u7406\u51e0\u767e\u4e2a\u5206\u6563\u5b9e\u4f8b\uff0c\u5230\u76ee\u524d\u7ba1\u7406\u51e0\u4e2a OceanBase  \u96c6\u7fa4\uff0c\u8d1f\u8f7d\u3001\u544a\u8b66\u3001\u8c03\u4f18\u5168\u90e8\u7edf\u4e00\u81f3\u96c6\u7fa4\u7ea7\u522b\uff0c\u5e38\u89c4\u6545\u969c\u80fd\u591f\u81ea\u52a8\u6062\u590d\uff0c\u5927\u5e45\u63d0\u5347\u4e1a\u52a1\u652f\u6491\u6548\u7387\u548c\u5e94\u6025\u54cd\u5e94\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u964d\u672c\u589e\u6548\uff1a\u4e0d\u4f46\u901a\u8fc7\u591a\u79df\u6237\u5b9e\u73b0\u8ba1\u7b97\u8d44\u6e90\u6c60\u5316\uff0c\u63d0\u9ad8\u603b\u4f53\u5229\u7528\u7387\uff0cOceanBase \u7684\u9ad8\u7ea7\u538b\u7f29\u80fd\u529b\u4f7f\u5f97\u5b58\u50a8\u6210\u672c\u4ec5\u4e3a\u539f\u6765\u4f20\u7edf\u6570\u636e\u5e93\u7684 1/3\u3002\u7ecf\u8fc7\u5927\u91cf\u7684\u5ba2\u6237\u53cd\u9988\u548c\u5e7f\u6cdb\u6848\u4f8b\u5b9e\u8df5\u7edf\u8ba1\uff0cOceanBase \u7684\u8d44\u6e90\u6574\u5408\u65b9\u6848\u80fd\u591f\u5e2e\u52a9\u4e2d\u578b\u53ca\u4ee5\u4e0a\u4f01\u4e1a\u964d\u4f4e TCO \u7ea6 30%-50%\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7528\u6237\u6848\u4f8b",children:"\u7528\u6237\u6848\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u591a\u70b9-dmall\u5178\u578b\u7528\u6237\u6848\u4f8b",children:"\u591a\u70b9 DMALL\uff08\u5178\u578b\u7528\u6237\u6848\u4f8b\uff09"}),"\n",(0,s.jsx)(n.h4,{id:"\u4e1a\u52a1\u6311\u6218",children:"\u4e1a\u52a1\u6311\u6218"}),"\n",(0,s.jsx)(n.p,{children:"\u591a\u70b9 DMALL \u670d\u52a1\u5bf9\u8c61\u6a2a\u8de8\u56fd\u5185\u3001\u6d77\u5916\u7b49\u4f17\u591a\u96f6\u552e\u5546\uff0c\u5728\u56fd\u5185\u6709\u7269\u7f8e\u3001\u4e2d\u767e\u7b49\u5927\u578b\u5546\u8d85\uff0c\u8986\u76d6\u9ea6\u5fb7\u9f99\u3001Seven Eleven 711 \u4fbf\u5229\u5e97\u7b49\u8de8\u56fd\u96f6\u552e\u5546\u3002\u540c\u65f6\uff0c\u8fd8\u4e3a\u4f17\u591a\u6d77\u5185\u5916\u54c1\u724c\u5546\u63d0\u4f9b\u670d\u52a1\uff0c\u8ba9\u54c1\u724c\u5546\u3001\u4f9b\u5e94\u5546\u3001\u96f6\u552e\u5546\u80fd\u591f\u94fe\u63a5\u8d77\u6765\uff0c\u8ba9\u6570\u636e\u548c\u4fe1\u606f\u66f4\u597d\u5730\u6d41\u52a8\uff0c\u8ba9\u670d\u52a1\u5bf9\u8c61\u80fd\u591f\u66f4\u597d\u5730\u652f\u6491\u670d\u52a1 C \u7aef\u7528\u6237\u3002\u4ece\u751f\u4ea7\u5546\u3001\u54c1\u724c\u5546\u3001\u4f9b\u5e94\u5546\uff0c\u518d\u5230\u5404\u4e2a\u5546\u573a\u95e8\u5e97\u7684\u96f6\u552e\u5546\uff0c\u6700\u540e\u5230\u6d88\u8d39\u8005\uff0c\u4e0d\u96be\u60f3\u8c61\uff0c\u8d85\u957f\u7684\u670d\u52a1\u94fe\u8def\u4f1a\u4ea7\u751f\u8d85\u7ea7\u5e9e\u5927\u7684\u6570\u636e\u91cf\uff0c\u7cfb\u7edf\u7684\u590d\u6742\u5ea6\u4e5f\u5c06\u968f\u7740\u6570\u636e\u91cf\u5448\u6307\u6570\u7ea7\u589e\u957f\u3002\u5728\u6b64\u80cc\u666f\u4e0b\uff0c\u591a\u70b9\u96f6\u552e SaaS \u7cfb\u7edf\u6570\u636e\u5e93\u9762\u4e34\u4e09\u5927\u96be\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8fd0\u7ef4\u590d\u6742\u5ea6\u9ad8\uff1a\u591a\u70b9 DMALL \u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u5168\u6d41\u7a0b\u4e1a\u52a1\u73af\u8282\u591a\uff0c\u7cfb\u7edf\u5e94\u7528\u89c4\u6a21\u5927\uff0c\u5bf9\u5e94\u6570\u636e\u5e93\u7684\u6570\u91cf\u8d85\u8fc7\u4e86 500 \u4e2a\u3002\u4e14\u968f\u7740\u7cfb\u7edf\u4e0d\u65ad\u8fed\u4ee3\uff0c\u6570\u636e\u7684\u89c4\u6a21\u8fd8\u5728\u6301\u7eed\u589e\u52a0\uff0c\u8fd0\u7ef4\u7ba1\u7406\u96be\u5ea6\u8d8a\u6765\u8d8a\u5927\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e1a\u52a1\u589e\u957f\u5feb\uff0c\u6c34\u5e73\u6269\u5c55\u9700\u6c42\u589e\u591a\uff1a\u968f\u7740\u4e1a\u52a1\u589e\u7684\u957f\uff0c\u591a\u70b9\u5236\u5b9a\u4e86\u51fa\u6d77\u6218\u7565\uff0c\u9700\u8981\u5728\u6d77\u5916\u5c55\u5f00\u4e1a\u52a1\uff0c\u57fa\u4e8e\u5730\u533a\u6570\u636e\u5b89\u5168\u6cd5\u7684\u8981\u6c42\uff0c\u9700\u8981\u72ec\u7acb\u90e8\u7f72\u4e00\u6574\u5957\u5168\u65b0\u7684\u7cfb\u7edf\u53bb\u627f\u63a5\u6d77\u5916\u4e1a\u52a1\u6d41\u91cf\u3002\u5728\u521d\u59cb\u7684\u90e8\u7f72\u9636\u6bb5\uff0c\u5bf9\u540e\u671f\u4e1a\u52a1\u89c4\u6a21\u53ca\u6570\u636e\u589e\u957f\u901f\u5ea6\u662f\u96be\u4ee5\u51c6\u786e\u9884\u4f30\u7684\u3002\u56e0\u6b64\uff0c\u6570\u636e\u5e93\u8d44\u6e90\u5728\u521d\u59cb\u9636\u6bb5\u7684\u5206\u914d\u5c31\u53d8\u5f97\u5341\u5206\u56f0\u96be\u3002\u4e3a\u4e86\u8282\u7ea6\u6210\u672c\uff0c\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u7ed9\u5230\u8f83\u5c11\u7684\u90e8\u7f72\u8d44\u6e90\u3002\u4f46\u5f88\u5feb\u591a\u70b9\u53d1\u73b0\uff0c\u4e1a\u52a1\u7684\u5feb\u901f\u589e\u957f\uff0c\u6570\u636e\u7684\u589e\u957f\u7279\u522b\u8fc5\u731b\uff0c\u5e26\u7ed9\u591a\u70b9\u7684\u662f\u5982\u4f55\u5feb\u901f\u6269\u5bb9\u8fd9\u4e00\u96be\u9898\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9700\u8981\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u670d\u52a1\u5927\u91cf\u5546\u5bb6\uff1a\u4fbf\u5229\u5e97/\u8fde\u9501\u5546\u8d85\u7684 SKU\uff08\u6700\u5c0f\u5b58\u8d27\u5355\u4f4d\uff09\u89c4\u6a21\uff0c\u4ece\u51e0\u5343\u5230\u51e0\u4e07\uff0c\u591a\u70b9\u5f88\u96be\u505a\u5230\u7ed9\u6bcf\u4e2a\u5546\u5bb6\u72ec\u7acb\u90e8\u7f72\u4e00\u5957\u7cfb\u7edf\u3002\u56e0\u6b64\uff0c\u591a\u70b9 SaaS \u7cfb\u7edf\u652f\u6301\u4e0a\u767e\u4e2a\u4e2d\u5c0f\u5546\u5bb6\u5ba2\u6237\uff0c\u6240\u6709\u5546\u5bb6\u4ea7\u751f\u7684\u6570\u636e\uff0c\u5728\u5e95\u5c42\u5171\u4eab\u6570\u636e\u5e93\u8d44\u6e90\u3002\u8fd8\u6709\u4e00\u4e2a\u663e\u8457\u7279\u70b9\uff0c\u5728\u591a\u70b9\u7cfb\u7edf\u4e2d\u5b58\u5728\u975e\u5e38\u5927\u7684\u5355\u4e2a\u79df\u6237\uff0c\u6bd4\u5982\u5927\u578b\u8fde\u9501\u5546\u8d85\uff0c\u591a\u70b9\u5e0c\u671b\u80fd\u8ba9\u5927\u578b\u8fde\u9501\u5546\u8d85\u6240\u5728\u7684\u79df\u6237\u4e0e\u5176\u4ed6\u79df\u6237\u6709\u4e00\u5b9a\u7684\u8d44\u6e90\u9694\u79bb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u89e3\u51b3\u65b9\u6848-1",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OceanBase \u7684\u5927\u96c6\u7fa4\u6a21\u5f0f\uff0c\u5c06\u591a\u4e2a\u5355\u5b9e\u4f8b\u6574\u5408\u5230 OceanBase \u96c6\u7fa4\u4e2d\uff0c\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u7075\u6d3b\u8c03\u5ea6\uff0c\u6709\u6548\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u79df\u6237\u8fdb\u884c\u8d44\u6e90\u9694\u79bb\uff0c\u591a\u4e2a\u4e1a\u52a1\u6a21\u5757\u4e4b\u95f4\u6570\u636e\u72ec\u7acb\uff0c\u6309\u9700\u900f\u660e\u5347\u964d\u914d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 OceanBase \u5f3a\u5927\u7684\u667a\u80fd\u7ba1\u63a7\u5e73\u53f0\uff0c\u5178\u578b\u95ee\u9898\u81ea\u52a8\u5206\u6790\u548c\u611f\u77e5\uff0c\u8fd0\u7ef4\u6548\u7387\u5927\u5e45\u63d0\u5347\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u501f\u52a9 OMS \uff0c\u5728\u4e0d\u505c\u673a\u7684\u60c5\u51b5\u4e0b\u5168\u7ad9\u4e1a\u52a1\u5411 OceanBase \u5b9e\u73b0\u9ad8\u6548\u5feb\u6377\u7684\u8fc1\u79fb\uff0c\u4e1a\u52a1\u4ec5\u9700\u6781\u5c11\u6539\u9020\u751a\u81f3\u96f6\u6539\u9020\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 OceanBase \u96c6\u7fa4\u5f3a\u5927\u4e30\u5bcc\u7684 Leader \u5206\u5e03\u548c\u8bfb\u5199\u8def\u7531\u7b56\u7565\uff0c\u5c06\u8682\u8681\u96c6\u56e2\u591a\u5e74\u6c89\u6dc0\u7684\u9ad8\u5e76\u53d1\u6700\u4f73\u5b9e\u8df5\u8f93\u51fa\u7ed9\u7528\u6237\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(8898).A+"",width:"1710",height:"833"})}),"\n",(0,s.jsx)(n.h4,{id:"\u7528\u6237\u6536\u76ca",children:"\u7528\u6237\u6536\u76ca"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u5927\u96c6\u7fa4\u591a\u79df\u6237\uff0c\u5b9e\u73b0\u79d2\u7ea7\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u8d44\u6e90\u6269\u7f29\u5bb9\uff0c\u5728\u6574\u4f53\u96c6\u7fa4\u8d44\u6e90\u4f7f\u7528\u4e0d\u53d8\u7684\u524d\u63d0\u4e0b\uff0c\u7a33\u5b9a\u627f\u8f7d\u5927\u91cf\u4e1a\u52a1\u7684\u9ad8\u5cf0\u538b\u529b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u89e3\u51b3\u4e86\u4e1a\u52a1\u6269\u5c55\u6027\u96be\u9898\u7684\u540c\u65f6\uff0c\u4e5f\u5927\u5927\u964d\u4f4e\u4e86 DBA \u7684\u8fd0\u7ef4\u6210\u672c\u4ee5\u53ca\u51fa\u9519\u6982\u7387\u3002\u5728\u673a\u623f\u7ea7\u5bb9\u707e\u65b9\u9762\uff0c\u5b9e\u73b0 RPO = 0\uff0cRTO < 8s\uff0c\u7a33\u5b9a\u652f\u6491\u591a\u70b9\u4e0a\u4ebf\u7ea7\u7684\u7528\u6237\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e OceanBase \u7684\u9ad8\u7ea7\u538b\u7f29\u6280\u672f\uff0c\u5728\u4fdd\u8bc1\u6027\u80fd\u7684\u540c\u65f6\uff0c\u591a\u70b9\u7684\u6570\u636e\u5b58\u50a8\u7a7a\u95f4\u76f8\u6bd4\u539f\u5148\u8282\u7ea6\u4e86\u8fd1 6 \u500d\u3002\u540c\u7b49\u786c\u4ef6\u6295\u5165\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u5b58\u50a8\u66f4\u591a\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"OceanBase \u9ad8\u5ea6\u517c\u5bb9 MySQL \u7684 SQL\u3001\u5b58\u50a8\u8fc7\u7a0b\u53ca\u89e6\u53d1\u5668\u7b49\u9ad8\u7ea7\u7279\u6027\uff0c\u5bf9\u4f20\u7edf\u6570\u636e\u5e93\u5177\u5907\u9ad8\u517c\u5bb9\u80fd\u529b\uff0c\u8ba9\u591a\u70b9\u53ef\u4ee5\u5e73\u7a33\u3001\u5e73\u6ed1\u8fc1\u79fb\u8fc7\u5f80\u6570\u636e\uff0c\u4fdd\u8bc1\u5728\u8fc7\u6e21\u65f6\u671f\u7684\u5927\u91cf\u4e1a\u52a1\u4e0d\u53d7\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5176\u4ed6\u7528\u6237\u6848\u4f8b",children:"\u5176\u4ed6\u7528\u6237\u6848\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7ffc\u652f\u4ed8\uff1a",(0,s.jsx)(n.a,{href:"https://open.oceanbase.com/blog/4446837760",children:"https://open.oceanbase.com/blog/4446837760"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u884c\u4e1a\uff1a\u653f\u4f01 / \u8fd0\u8425\u5546"}),"\n",(0,s.jsx)(n.li,{children:"\u75db\u70b9\uff1a\u7531\u4e8e\u5728\u67d0\u56fd\u4ea7\u6570\u636e\u5e93\u96c6\u7fa4\u4e2d\u653e\u7f6e\u4e86\u5f88\u591a\u5e93\uff0c\u56e0\u6b64\u591a\u4e2a\u5e93\u4e4b\u95f4\u5171\u4eab\u96c6\u7fa4\u8d44\u6e90\uff0c\u5728\u67d0\u4e9b\u5e93\u5bf9\u5e94\u7684\u4e1a\u52a1\u6d41\u91cf\u9ad8\u5cf0\u671f\u65f6\uff0c\u4e1a\u52a1\u4e4b\u95f4\u4e92\u76f8\u5f71\u54cd\uff0c\u4e25\u91cd\u5f71\u54cd\u4f7f\u7528\u4f53\u9a8c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6536\u76ca\uff1a\u591a\u79df\u6237\u80fd\u529b\u53ca\u8d44\u6e90\u9694\u79bb\u4f18\u52bf\u660e\u663e\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u7684\u5546\u57ce\u4e1a\u52a1\u4f1a\u5206\u5f88\u591a\u5e93\uff0c\u4e3a\u4e86\u907f\u514d\u8fd9\u4e9b\u5e93\u4e4b\u95f4\u8d44\u6e90\u53d1\u751f\u4e89\u62a2\u4ece\u800c\u5bfc\u81f4\u5176\u4ed6\u5e93\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\uff0c\u5c06\u5e93\u6309\u79df\u6237\u8fdb\u884c\u5206\u79bb\uff0c\u5229\u7528\u79df\u6237\u7684\u8d44\u6e90\u9694\u79bb\u80fd\u529b\uff0c\u9650\u5236\u6bcf\u4e2a\u5e93\u7684\u4f7f\u7528\u8d44\u6e90\u989d\u5ea6\u3002\u5e76\u4e14\uff0c\u79df\u6237\u8d44\u6e90\u53ef\u4ee5\u7075\u6d3b\u8c03\u6574\uff0c\u6240\u4ee5\uff0c\u6bcf\u4e2a\u5e93\u7684\u8d44\u6e90\u4e5f\u53ef\u4ee5\u52a8\u6001\u8c03\u6574\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e1a\u52a1\u7684\u7a33\u5b9a\u6027\u548c\u7075\u6d3b\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e2d\u56fd\u8054\u901a\uff1a",(0,s.jsx)(n.a,{href:"https://open.oceanbase.com/blog/8185228352",children:"https://open.oceanbase.com/blog/8185228352"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u884c\u4e1a\uff1a\u653f\u4f01 / \u8fd0\u8425\u5546"}),"\n",(0,s.jsx)(n.li,{children:"\u75db\u70b9\uff1a\u51e0\u5341\u5230\u4e0a\u767e\u5957\u5206\u6563\u6570\u636e\u5e93\u73af\u5883\uff0c\u8fd0\u7ef4\u5de5\u4f5c\u590d\u6742\uff0c\u540c\u65f6\u6269\u5c55\u6027\u53d7\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6536\u76ca\uff1a\u4e00\u4e2a OceanBase \u96c6\u7fa4\u5185\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u6570\u636e\u5e93\u79df\u6237\uff0c\u6bcf\u4e2a\u79df\u6237\u53ef\u4ee5\u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5e93\u670d\u52a1\uff1b\u79df\u6237\u95f4\u6570\u636e\u548c\u8d44\u6e90\u4e92\u76f8\u9694\u79bb\uff0c\u5e76\u4e14\u5728\u96c6\u7fa4\u5185\u7edf\u4e00\u8c03\u5ea6\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u597d\u672a\u6765\uff1a",(0,s.jsx)(n.a,{href:"https://open.oceanbase.com/blog/7832546560",children:"https://open.oceanbase.com/blog/7832546560"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u884c\u4e1a\uff1a\u6559\u80b2"}),"\n",(0,s.jsx)(n.li,{children:"\u75db\u70b9\uff1a\u5355\u673a\u591a\u5b9e\u4f8b\u65b9\u5f0f\u90e8\u7f72\uff0c\u7f3a\u5c11\u8d44\u6e90\u7684\u9694\u79bb\u80fd\u529b\uff0c\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u8d44\u6e90\u788e\u7247\u3002\u8d44\u6e90\u90e8\u7f72\u6a21\u5f0f\u4e0d\u5177\u5907\u53ef\u5f39\u6269\u80fd\u529b\uff0c\u8d44\u6e90\u5728\u5206\u914d\u65f6\u4f1a\u7559\u6709\u8f83\u5927\u7684\u5197\u4f59\uff0c\u5bfc\u81f4\u8d44\u6e90\u5229\u7528\u7387\u4f4e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6536\u76ca\uff1a\u591a\u79df\u6237\uff0c\u5b9e\u73b0\u8d44\u6e90\u9694\u79bb\u53ca\u8d44\u6e90\u5f39\u6269\u3002\u6570\u636e\u538b\u7f29\uff0c\u83b7\u5f97\u989d\u5916\u7684\u6210\u672c\u6536\u76ca\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9633\u5149\u4fdd\u9669\uff1a",(0,s.jsx)(n.a,{href:"https://open.oceanbase.com/blog/8657676560",children:"https://open.oceanbase.com/blog/8657676560"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u884c\u4e1a\uff1a\u91d1\u878d"}),"\n",(0,s.jsx)(n.li,{children:"\u75db\u70b9\uff1a\u5f88\u591a\u5c0f\u578b\u4e1a\u52a1\u642d\u8f7d\u5728 MySQL \u4e0a\u7684\u8fd0\u7ef4\u590d\u6742\u95ee\u9898"}),"\n",(0,s.jsx)(n.li,{children:"\u6536\u76ca\uff1a\u901a\u8fc7\u591a\u79df\u6237\u5b9e\u73b0\u8d44\u6e90\u9694\u79bb\u3002\u6839\u636e\u4e1a\u52a1\u60c5\u51b5\u8bbe\u7f6e\u8d44\u6e90\u89c4\u5219\uff0c\u4f7f\u673a\u5668\u8d44\u6e90\u5f97\u5230\u5145\u5206\u5229\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53a6\u95e8\u79d1\u62d3\u901a\u8baf\uff1a",(0,s.jsx)(n.a,{href:"https://open.oceanbase.com/blog/7521893152",children:"https://open.oceanbase.com/blog/7521893152"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u884c\u4e1a\uff1a\u7269\u6d41\u4e0e\u51fa\u884c"}),"\n",(0,s.jsx)(n.li,{children:"\u75db\u70b9\uff1a\u57fa\u4e8e MySQL\uff0c\u65e0\u6cd5\u5b9e\u73b0\u6574\u4e2a\u5e73\u53f0 SaaS \u67b6\u6784\u7684\u5347\u7ea7\u3002\u6bcf\u4e2a\u96c6\u56e2\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u6570\u636e\u6ca1\u6709\u4ea4\u4e92\uff0c\u90e8\u5206\u96c6\u56e2\u4e5f\u6709\u6570\u636e\u9694\u79bb\u8fd9\u6837\u7684\u9700\u6c42\uff0cSaaS \u5316\u540e\u80fd\u51cf\u8f7b\u90e8\u5206\u79c1\u6709\u5316\u90e8\u7f72\u548c\u540e\u671f\u8fd0\u7ef4\u7684\u6210\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6536\u76ca\uff1a\u4f7f\u7528 OceanBase \u4e4b\u540e\uff0c\u7b80\u5316\u4e86\u79c1\u6709\u5316\u7684\u90e8\u7f72\u548c\u8fd0\u8425\u3002\u6839\u636e\u96c6\u56e2\u7684\u89c4\u6a21\uff0c\u9009\u62e9\u4e0d\u540c\u89c4\u683c\u7684\u79df\u6237\uff0c\u80fd\u591f\u66f4\u52a0\u6e05\u6670\u5730\u8ba1\u7b97\u6bcf\u4e2a\u96c6\u56e2\u4f7f\u7528\u7684\u8d44\u6e90\u548c\u8d39\u7528\u9884\u4f30\u3002\u8fdb\u884c\u8d44\u6e90\u9694\u79bb\u540e\uff0c\u6bcf\u4e2a\u96c6\u56e2\u7684\u6570\u636e\u4f53\u91cf\u76f8\u5bf9\u6240\u6709\u96c6\u56e2\u805a\u5408\u5230\u4e00\u8d77\u4f1a\u66f4\u5c0f\uff0c\u7cfb\u7edf\u5c31\u80fd\u62e5\u6709\u66f4\u597d\u7684\u6027\u80fd\u3001\u7a33\u5b9a\u6027\u3001\u6269\u5c55\u6027\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},48633:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/001-61aa7ae472a40c06b2814cc0884dab17.png"},8898:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/002-7aeacc0eadea5781403b05dd177a045e.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(96540);const a={},l=s.createContext(a);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);