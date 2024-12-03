"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6764],{94686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=s(74848),r=s(28453);const c={title:"CPU \u8d1f\u8f7d\u5f02\u5e38",weight:3},t=void 0,a={id:"user_manual/operation_and_maintenance/emergency_handbook/cpu_high",title:"CPU \u8d1f\u8f7d\u5f02\u5e38",description:"\u4e1a\u52a1\u53ca\u6570\u636e\u5e93\u8868\u73b0",source:"@site/docs/user_manual/operation_and_maintenance/emergency_handbook/03_cpu_high.md",sourceDirName:"user_manual/operation_and_maintenance/emergency_handbook",slug:"/user_manual/operation_and_maintenance/emergency_handbook/cpu_high",permalink:"/docs/user_manual/operation_and_maintenance/emergency_handbook/cpu_high",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/emergency_handbook/03_cpu_high.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"CPU \u8d1f\u8f7d\u5f02\u5e38",weight:3},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u7cfb\u7edf\u54cd\u5e94\u65f6\u95f4\u4e0d\u7b26\u5408\u9884\u671f",permalink:"/docs/user_manual/operation_and_maintenance/emergency_handbook/slow_response"},next:{title:"\u8282\u70b9\u5b95\u673a",permalink:"/docs/user_manual/operation_and_maintenance/emergency_handbook/node_breakdown"}},d={},o=[{value:"\u4e1a\u52a1\u53ca\u6570\u636e\u5e93\u8868\u73b0",id:"\u4e1a\u52a1\u53ca\u6570\u636e\u5e93\u8868\u73b0",level:2},{value:"\u6392\u67e5\u65b9\u5411\u548c\u6d41\u7a0b",id:"\u6392\u67e5\u65b9\u5411\u548c\u6d41\u7a0b",level:2},{value:"\u6392\u67e5\u8282\u70b9\u4e0a\u662f\u5426\u6709 CPU \u4f7f\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",id:"\u6392\u67e5\u8282\u70b9\u4e0a\u662f\u5426\u6709-cpu-\u4f7f\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",level:3},{value:"\u6392\u67e5 OBServer \u4e2d\u7684\u53ef\u7591\u7ebf\u7a0b",id:"\u6392\u67e5-observer-\u4e2d\u7684\u53ef\u7591\u7ebf\u7a0b",level:3},{value:"\u5982\u679c\u662f\u5de5\u4f5c\u7ebf\u7a0b\u7684 CPU \u5360\u7528\u5927",id:"\u5982\u679c\u662f\u5de5\u4f5c\u7ebf\u7a0b\u7684-cpu-\u5360\u7528\u5927",level:4},{value:"\u5982\u679c\u662f\u540e\u53f0\u7ebf\u7a0b\u7684 CPU \u5360\u7528\u5927",id:"\u5982\u679c\u662f\u540e\u53f0\u7ebf\u7a0b\u7684-cpu-\u5360\u7528\u5927",level:4},{value:"What&#39; more ?",id:"what-more-",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4e1a\u52a1\u53ca\u6570\u636e\u5e93\u8868\u73b0",children:"\u4e1a\u52a1\u53ca\u6570\u636e\u5e93\u8868\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"\u4e1a\u52a1\u8868\u73b0\uff1a\u4e1a\u52a1\u51fa\u73b0\u5076\u53d1\u5361\u987f\uff0c\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7387\u4e0a\u5347\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8868\u73b0\uff1a\u6536\u5230 CPU \u4f7f\u7528\u7387\u9ad8\u7684\u544a\u8b66\uff0cSQL \u54cd\u5e94\u5ef6\u8fdf\u7a81\u7136\u53d8\u9ad8\uff0c\u76d1\u63a7\u4e2d CPU \u4f7f\u7528\u7387\u98d9\u5347."}),"\n",(0,i.jsx)(n.h2,{id:"\u6392\u67e5\u65b9\u5411\u548c\u6d41\u7a0b",children:"\u6392\u67e5\u65b9\u5411\u548c\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(77008).A+"",width:"1120",height:"978"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6392\u67e5\u8282\u70b9\u4e0a\u662f\u5426\u6709-cpu-\u4f7f\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",children:"\u6392\u67e5\u8282\u70b9\u4e0a\u662f\u5426\u6709 CPU \u4f7f\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7 ps \u6216\u8005 top \u547d\u4ee4\uff0c\u786e\u8ba4\u8282\u70b9\u4e0a CPU \u4f7f\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b\u662f\u5426\u662f observer \u8fdb\u7a0b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ps -eo pid,user,%cpu,cmd --sort=-%cpu\nPID     USER     %CPU   CMD\n124648  user_a   99.9   other_process\n1332    user_b   50.5   observer\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u662f\u5176\u4ed6 user \u5728\u8282\u70b9\u4e0a\u5f00\u4e86\u5176\u4ed6 CPU \u5360\u7528\u8f83\u9ad8\u7684\u8fdb\u7a0b\uff0c\u9700\u8981\u8054\u7cfb\u76f8\u5173 user \u8fdb\u884c\u8c03\u6574\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6392\u67e5-observer-\u4e2d\u7684\u53ef\u7591\u7ebf\u7a0b",children:"\u6392\u67e5 OBServer \u4e2d\u7684\u53ef\u7591\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c CPU \u5360\u7528\u9ad8\u7684\u8fdb\u7a0b\u53ea\u6709 observer\uff0c\u5148\u901a\u8fc7 top -H \u770b\u4e0b\u662f\u5426\u662f\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u5360\u7528\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"top -p `pidof observer` -H\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u5982\u679c\u662f\u5de5\u4f5c\u7ebf\u7a0b\u7684-cpu-\u5360\u7528\u5927",children:"\u5982\u679c\u662f\u5de5\u4f5c\u7ebf\u7a0b\u7684 CPU \u5360\u7528\u5927"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("font",{color:"red",children:"\u5bf9\u4e8e 99% \u7684\u573a\u666f\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5173\u5fc3\u666e\u901a\u7ebf\u7a0b\uff08\u5373\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u800c\u975e\u540e\u53f0\u7ebf\u7a0b\uff09\uff0c\u5373 TNT_L0_G0_1001\uff083.1 \u7248\u672c\uff09 \u6216 T1001_L0_G0\uff084.x \u7248\u672c\uff09\u3002"})})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"By the way\uff1a\u8fd9\u91cc\u591a\u89e3\u91ca\u4e00\u53e5\uff0c4.x \u7ed9\u5de5\u4f5c\u7ebf\u7a0b\u6539\u540d\uff0c\u662f\u56e0\u4e3a 3.1 \u7248\u672c\u592a\u5bb9\u6613 grep \u9519\u3002\u6bd4\u5982\u60f3 grep TNT_L0_G0_1 \u7684\u65f6\u5019\uff0c\u5f88\u5bb9\u6613 grep \u51fa\u4e00\u5927\u5806 TNT_L0_G0_1001 \u4e4b\u7c7b\u7684\u7ebf\u7a0b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\u6709\u67d0\u4e2a\u79df\u6237\u6267\u884c\u7684 SQL \u5360\u7528\u4e86\u8d85\u591a CPU\uff0c\u5bfc\u81f4\u5176\u4ed6\u79df\u6237\u53d7\u5f71\u54cd\u4e86\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 top -H \u7ed3\u679c\u4e2d\u7684 T1002_L0_G100 \u770b\u51fa\u5177\u4f53\u662f\u54ea\u4e2a\u79df\u6237\u5728\u6574\u5e7a\u86fe\u5b50\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(42411).A+"",width:"1650",height:"612"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u793a\u4f8b\u5c31\u53ef\u4ee5\u901a\u8fc7 T1002_L0_xxxx \u770b\u51fa\u6765\u662f 1002 \u53f7\u79df\u6237\u5728\u72af\u574f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u53bb OCP \u4e0a\u53bb\u770b\u770b\u8fd9\u4e2a 1002 \u53f7\u79df\u6237\u5728\u6267\u884c\u4ec0\u4e48\u628a CPU \u5403\u5b8c\u7684 SQL \u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u5c31\u53c8\u56de\u5230\u4e86\u4e0a\u4e00\u5c0f\u8282\u7684\u5185\u5bb9\uff0c\u9700\u8981\u5206\u6790\u4e0b\u4e3a\u5565\u8fd9\u6761 SQL \u8fd9\u4e48\u7279\u6b8a\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(78754).A+"",width:"3796",height:"800"})}),"\n",(0,i.jsx)(n.h4,{id:"\u5982\u679c\u662f\u540e\u53f0\u7ebf\u7a0b\u7684-cpu-\u5360\u7528\u5927",children:"\u5982\u679c\u662f\u540e\u53f0\u7ebf\u7a0b\u7684 CPU \u5360\u7528\u5927"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c top -H \u770b\u5230\u5360\u7528 CPU \u7684\u662f T1_HBService\u3001RootBalance\u3001IO_GETEVENT0 \u8fd9\u7c7b\u770b\u4e0d\u61c2\u7684\u7ebf\u7a0b CPU \u5360\u7528\u9ad8\uff0c\u5efa\u8bae\u53bb\u793e\u533a\u8bba\u575b\u53d1\u5e16\uff0c\u8054\u7cfb\u5728\u8bba\u575b\u4e2d\u503c\u73ed\u7684\u6280\u672f\u652f\u6301\u540c\u5b66\uff0c\u8ba9\u4ed6\u4eec\u534f\u52a9\u4f60\u7559\u4e0b obstack \u6216\u8005 pstack \u7684\u5806\u6808\u4fe1\u606f\uff0c\u8fdb\u4e00\u6b65\u5206\u6790\u539f\u56e0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"what-more-",children:"What' more ?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e00\u5c0f\u8282\u7684\u7b2c\u4e00\u7248\uff0c\u5176\u5b9e\u5230\u8fd9\u91cc\u5c31\u7ed3\u675f\u4e86\u3002\u540e\u9762\u90fd\u662f\u518d\u7248\u65f6\u8865\u5145\u7684\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5199\u5b8c\u4e4b\u540e\uff0c\u7a81\u7136\u60f3\u8d77\u6211\u8001\u5927\u5728\u4e00\u6bb5\u65f6\u95f4\u4e4b\u524d\u597d\u50cf\u8ddf\u6211\u7b80\u5355\u63d0\u8fc7\u4e00\u53e5\uff0c\u8bf4\u6709\u673a\u4f1a\u7684\u8bdd\uff0c\u5e0c\u671b\u80fd\u591f\u5411\u7528\u6237\u4ecb\u7ecd\u5982\u4f55\u5145\u5206\u5229\u7528 OCP \u7684\u767d\u5c4f\u76d1\u63a7\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u76f4\u6ca1\u5199 OCP \u76d1\u63a7\u7684\u5185\u5bb9\uff0c\u539f\uff08ji\xe8\uff09\u56e0\uff08k\xf3\uff09\u662f\uff0c\u767d\u5c4f\u64cd\u4f5c\u592a\u6613\u7528\u4e86\uff0c\u81ea\u5df1\u968f\u610f\u62ff\u9f20\u6807\u70b9\u4e00\u70b9\uff0c\u5927\u6982\u7387\u4e5f\u5c31\u73a9\u513f\u660e\u767d\u4e86\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fde\u5b98\u7f51\u6587\u6863\u90fd\u4e0d\u9700\u8981\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6d4b\u8bd5\u4e00\u4e0b\u4e0d\u770b\u5b98\u65b9\u6587\u6863\uff0c\u76f4\u63a5\u901a\u8fc7 OCP \u6765\u5206\u6790 CPU \u8d1f\u8f7d\u5f02\u5e38\u5427\uff0c\u987a\u4fbf\u505a\u4e2a\u8bb0\u5f55\uff0c\u6b63\u597d\u5411\u5927\u5bb6\u8bc1\u660e OCP \u767d\u5c4f\u76d1\u63a7\u7684\u6613\u7528\u6027\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u5728 2024/11/21 20:37 \u5de6\u53f3\uff0c\u7ed9\u6570\u636e\u5e93\u52a0\u4e00\u70b9\u513f\u538b\u529b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u5728 OCP \u9996\u9875\u7684 \u201c\u6027\u80fd\u76d1\u63a7\u201d \u4e2d\u7684 \u201cOBServer \u6027\u80fd\u201d \u91cc\uff0c\u5c31\u80fd\u770b\u5230\u5bf9\u5e94\u96c6\u7fa4 CPU \u4f7f\u7528\u7387\u4e00\u4e0b\u5b50\u5c31\u5feb\u8dd1\u6ee1\u4e86\uff08\u201c\u6027\u80fd\u76d1\u63a7\u201d \u56db\u4e2a\u5b57\u5c31\u5728\u9996\u9875\uff0c\u4e0d\u9700\u8981\u5230\u5904\u627e\uff09\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(71549).A+"",width:"3764",height:"1170"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u518d\u7136\u540e\uff0c\u5728 \u201c\u6570\u636e\u5e93\u6027\u80fd\u201d \u91cc\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u96c6\u7fa4\u7684 SQL \u54cd\u5e94\u65f6\u95f4\u4e5f\u5927\u5e45\u4e0a\u5347\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(50420).A+"",width:"3752",height:"1168"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u518d\u518d\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u53bb\u770b\u4e0b\u8fd9\u4e2a\u96c6\u7fa4\u91cc\u5404\u4e2a\u79df\u6237\u7684\u60c5\u51b5\uff0c\u53d1\u73b0\u4e00\u4e2a\u53eb\u505a mysql \u7684\u7528\u6237\u79df\u6237\uff0c\u60c5\u51b5\u6bd4\u8f83\u7279\u6b8a\uff0cCPU \u4f7f\u7528\u7387\u5f88\u9ad8\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(72879).A+"",width:"3822",height:"1148"}),"\n",(0,i.jsx)(n.img,{alt:"image",src:s(87782).A+"",width:"3774",height:"1334"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u70b9\u4e00\u4e0b \u201cSQL \u8bca\u65ad\u201d\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u662f\u8fd9\u4e2a\u96c6\u7fa4\u91cc\uff0c\u4e00\u4e2a\u53eb mysql \u7684\u79df\u6237\uff0c\u6b63\u5728\u75af\u72c2\u91cd\u590d\u6267\u884c\u4e00\u6761\u8ba1\u7b97\u903b\u8f91\u8d85\u7ea7\u590d\u6742\u7684 SQL\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(43937).A+"",width:"3810",height:"1028"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5230\u6b64\u4e3a\u6b62\uff0c\u95ee\u9898\u5b9a\u4f4d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136\u6211\u8fd9\u4e2a\u662f\u5148\u77e5\u9053\u7b54\u6848\uff0c\u518d\u5c55\u793a\u89e3\u9898\u8fc7\u7a0b\u3002\u4e0d\u8fc7\uff0c\u8fd9\u91cc\u60f3\u8bc1\u660e\u7684\u5176\u5b9e\u662f\uff0c\u4e0d\u770b\u5b98\u7f51\u7684 OCP \u6587\u6863\uff0c\u5927\u5bb6\u4e5f\u80fd\u8f7b\u677e\u5229\u7528 OCP \u7684\u767d\u5c4f\u76d1\u63a7\u6765\u5206\u6790 CPU \u4f7f\u7528\u7387\u5f02\u5e38\u7684\u95ee\u9898\uff0c\u53ea\u8981\u81ea\u4fe1\u5730\u53bb\u7528\u5c31\u597d\u4e86\uff08\u5e0c\u671b\u522b\u88ab\u6211\u8001\u5927\u770b\u5230\uff09~"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},77008:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/001-e594da5ac62b2584177726f332b9f4b7.png"},42411:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/002-d3e9a1a8f3b17b4daa480920bc6bc31d.png"},78754:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/003-45f366b0e978a034fb8176d058184fa7.png"},71549:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/004-1f833985577044001d9588d0999ed0aa.png"},50420:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/005-67cd301e1c2ee705ab20ac57848218b6.png"},72879:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/006-68cd1bf8f4c3eaea43828cc632d24eeb.png"},87782:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/007-6c490a705c0c5555bc6aa42115b5d4bb.png"},43937:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/008-22249e87c35f3aed497d344c90b21138.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const r={},c=i.createContext(r);function t(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);