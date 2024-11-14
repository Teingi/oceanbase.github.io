"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7373],{90969:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var s=i(74848),c=i(28453);const l={title:"\u6570\u636e\u5e93\u5bf9\u8c61\u8bbe\u8ba1\u53ca\u4f7f\u7528\u89c4\u8303",weight:1},r=void 0,d={id:"user_manual/operation_and_maintenance/development_specification/object_specification",title:"\u6570\u636e\u5e93\u5bf9\u8c61\u8bbe\u8ba1\u53ca\u4f7f\u7528\u89c4\u8303",description:"\u8bf4\u660e\uff1a",source:"@site/docs/user_manual/operation_and_maintenance/development_specification/01_object_specification.md",sourceDirName:"user_manual/operation_and_maintenance/development_specification",slug:"/user_manual/operation_and_maintenance/development_specification/object_specification",permalink:"/docs/user_manual/operation_and_maintenance/development_specification/object_specification",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/development_specification/01_object_specification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6570\u636e\u5e93\u5bf9\u8c61\u8bbe\u8ba1\u53ca\u4f7f\u7528\u89c4\u8303",weight:1},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u5176\u4ed6",permalink:"/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_03_htap/others"},next:{title:"\u5b57\u7b26\u96c6\u4f7f\u7528\u89c4\u8303",permalink:"/docs/user_manual/operation_and_maintenance/development_specification/charset_specification"}},a={},t=[{value:"\u5bf9\u8c61\u540d\u5b9a\u4e49\u89c4\u8303",id:"\u5bf9\u8c61\u540d\u5b9a\u4e49\u89c4\u8303",level:2},{value:"tenant\uff08\u79df\u6237\uff09\u4f7f\u7528\u89c4\u8303",id:"tenant\u79df\u6237\u4f7f\u7528\u89c4\u8303",level:2},{value:"database\uff08\u5e93\uff09\u4f7f\u7528\u89c4\u8303",id:"database\u5e93\u4f7f\u7528\u89c4\u8303",level:2},{value:"table\uff08\u8868\uff09\u8bbe\u8ba1\u89c4\u8303",id:"table\u8868\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"column\uff08\u5217\uff09\u8bbe\u8ba1\u89c4\u8303",id:"column\u5217\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"partition\uff08\u5206\u533a\uff09\u8bbe\u8ba1\u89c4\u8303",id:"partition\u5206\u533a\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3},{value:"index\uff08\u7d22\u5f15\uff09\u8bbe\u8ba1\u89c4\u8303",id:"index\u7d22\u5f15\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"\u7d22\u5f15\u521b\u5efa\u7684\u89c4\u5219",id:"\u7d22\u5f15\u521b\u5efa\u7684\u89c4\u5219",level:3},{value:"\u5168\u5c40\u7d22\u5f15\u7684\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f",id:"\u5168\u5c40\u7d22\u5f15\u7684\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f",level:3},{value:"\u7d22\u5f15\u8bbe\u8ba1\u7684\u5efa\u8bae",id:"\u7d22\u5f15\u8bbe\u8ba1\u7684\u5efa\u8bae",level:3},{value:"\u7d22\u5f15\u4f7f\u7528\u7684\u5efa\u8bae",id:"\u7d22\u5f15\u4f7f\u7528\u7684\u5efa\u8bae",level:3},{value:"increment column\uff08\u81ea\u589e\u5217\uff09\u8bbe\u8ba1\u89c4\u8303",id:"increment-column\u81ea\u589e\u5217\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"recycle bin\uff08\u56de\u6536\u7ad9\uff09\u8bbe\u8ba1\u89c4\u8303",id:"recycle-bin\u56de\u6536\u7ad9\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"tablegroup\uff08\u8868\u7ec4\uff09\u8bbe\u8ba1\u89c4\u8303",id:"tablegroup\u8868\u7ec4\u8bbe\u8ba1\u89c4\u8303",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u672c\u5c0f\u8282\u7ea2\u5b57\u90e8\u5206\u7684\u5185\u5bb9\u4e3a\u7528\u6237 \u201c\u5fc5\u987b\u201d \u9075\u5faa\u7684\u884c\u4e3a\u3002"})})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4f59\u5185\u5bb9\u4ec5\u4f9b\u53c2\u8003\uff0c\u53ea\u662f \u201c\u63a8\u8350\u201d \u7528\u6237\u505a\u7684\u5185\u5bb9\uff0c\u5e76\u4e0d \u201c\u5f3a\u5236\u201d \u7528\u6237\u5fc5\u987b\u9075\u5faa\u3002\u5927\u5bb6\u6839\u636e\u771f\u5b9e\u4e1a\u52a1\u9700\u6c42\u51b3\u5b9a\u662f\u5426\u91c7\u53d6\u8fd9\u4e9b\u5efa\u8bae\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5bf9\u8c61\u540d\u5b9a\u4e49\u89c4\u8303",children:"\u5bf9\u8c61\u540d\u5b9a\u4e49\u89c4\u8303"}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u79cd\u5bf9\u8c61\u7684\u547d\u540d\u89c4\u8303\u5c31\u4e0d\u518d\u8001\u751f\u5e38\u8c08\u4e86\uff0c\u65e0\u975e\u5c31\u662f\u540d\u5b57\u957f\u5ea6\u4e0d\u8981\u8d85\u7ea7\u957f\uff0c\u8981\u80fd\u591f\u671b\u6587\u751f\u4e49\uff0c\u8868\u793a\u51fa\u7279\u5b9a\u7684\u5bf9\u8c61\u7c7b\u578b\u4ee5\u53ca\u5bf9\u5e94\u7684\u4e1a\u52a1\u542b\u4e49\u7b49\u7b49\uff0c\u4f8b\u5982 tbl_student_id\u3002\u5927\u5bb6\u7684\u547d\u540d\u98ce\u683c\u90fd\u6709\u6240\u4e0d\u540c\uff0c\u4e2a\u4eba\u89c9\u5f97\u6ca1\u6709\u6240\u8c13\u7684\u6b63\u786e\u548c\u9519\u8bef\uff0c\u4e5f\u6ca1\u5fc5\u8981\u5f3a\u884c\u7edf\u4e00\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u53ea\u5efa\u8bae\u5927\u5bb6\uff1a",(0,s.jsx)(e.strong,{children:"\u9664\u975e\u6709\u7279\u6b8a\u539f\u56e0\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u7279\u6b8a\u5b57\u7b26\u6216\u8005\u5173\u952e\u5b57\u4f5c\u4e3a\u5bf9\u8c61\u540d"}),"\u3002\u539f\u56e0\u662f\u770b\u7740\u522b\u626d\uff0c\u7528\u7740\u66f4\u522b\u626d\uff0c\u7eaf\u5c5e\u81ea\u5df1\u7ed9\u81ea\u5df1\u627e\u522b\u626d\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e4b\u524d\u89c1\u8fc7\u6709\u4e2a\u522b\u7684\u7528\u6237\u7ed9\u8868\u547d\u540d\u4e3a: table\uff08\u4fdd\u7559\u5173\u952e\u5b57\uff09\uff0c\u7ed9\u5217\u547d\u540d\u4e3a: `(\u8868\u793a\u8f6c\u4e49\u7684\u7279\u6b8a\u5b57\u7b26)\u3002\u770b\u7740\u5c31\u8ddf\u52a0\u5bc6\u8fc7\u4f3c\u7684\u3002\u81ea\u5df1\u4eba\u7528\u7740\u8212\u4e0d\u8212\u670d\u6682\u4e14\u4e0d\u63d0\uff0c\u5982\u679c\u51fa\u4e86\u95ee\u9898\uff0c\u6280\u672f\u652f\u6301\u540c\u5b66\u6392\u67e5\u8d77\u6765\u4e5f\u8981\u5410\u4e0a\u51e0\u5347\u8840\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"obclient [test]> create table `table` (```` int);\nQuery OK, 0 rows affected (0.050 sec)\n\nobclient [test]> insert into `table` values(123);\nQuery OK, 1 row affected (0.007 sec)\n\nobclient [test]> select ```` from `table`;\n+------+\n| `    |\n+------+\n|  123 |\n+------+\n1 row in set (0.000 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u4e3a\u5404\u79cd\u5bf9\u8c61\u540d rename \u90fd\u5f88\u65b9\u4fbf\uff0c\u6240\u4ee5\u8fd9\u90e8\u5206\u5c31\u76f4\u63a5\u7565\u8fc7\u4e86\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"tenant\u79df\u6237\u4f7f\u7528\u89c4\u8303",children:"tenant\uff08\u79df\u6237\uff09\u4f7f\u7528\u89c4\u8303"}),"\n",(0,s.jsxs)(e.p,{children:["\u79df\u6237\u7684\u6982\u5ff5\u53ef\u4ee5\u7c7b\u6bd4\u4e3a MySQL \u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u6982\u5ff5\u8be6\u89c1\u8fd9\u4e2a\u6559\u7a0b\u7684",(0,s.jsx)(e.a,{href:"https://oceanbase.github.io/docs/user_manual/operation_and_maintenance/scenario_best_practices/chapter_01_multi_tenants/background_knowledge",children:"\u300a\u79df\u6237\u80cc\u666f\u77e5\u8bc6\u300b"}),"\u5c0f\u8282\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u7981\u6b62\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 sys \u79df\u6237\u5b58\u653e\u7528\u6237\u6570\u636e\uff01\u9700\u8981\u521b\u5efa\u65b0\u7684\u7528\u6237\u79df\u6237\u6765\u4f7f\u7528\uff01"})})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"sys \u79df\u6237\u662f\u88ab\u8bbe\u8ba1\u7528\u6765\u5b58\u653e\u5176\u4ed6\u7528\u6237\u79df\u6237\u5143\u4fe1\u606f\u7684\u79df\u6237\uff0c\u4e0d\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u5e93\u529f\u80fd\uff0c\u8bef\u7528\u53ef\u80fd\u4f1a\u5e26\u6765\u4e25\u91cd\u540e\u679c\uff01"})})}),"\n",(0,s.jsx)(e.h2,{id:"database\u5e93\u4f7f\u7528\u89c4\u8303",children:"database\uff08\u5e93\uff09\u4f7f\u7528\u89c4\u8303"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u7981\u6b62\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 information_schema\u3001oceanbase \u7b49\u7cfb\u7edf\u81ea\u5e26\u5143\u6570\u636e\u5e93\u6765\u5b58\u653e\u7528\u6237\u6570\u636e\u3002\u8bef\u7528\u53ef\u80fd\u4f1a\u5e26\u6765\u4e25\u91cd\u540e\u679c\uff01"})})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"obclient [test]> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| obproxy            |\n| oceanbase          |\n| test               |\n+--------------------+\n5 rows in set (0.007 sec)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"table\u8868\u8bbe\u8ba1\u89c4\u8303",children:"table\uff08\u8868\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u5efa\u7acb\u51fa\u5197\u4f59\u66f4\u5c0f\u3001\u7ed3\u6784\u66f4\u5408\u7406\u7684\u8868\uff0c\u5728\u8fdb\u884c\u6570\u636e\u5e93\u521b\u5efa\u7684\u65f6\u5019\u8981\u9075\u5faa\u4e00\u5b9a\u7684\u539f\u5219\uff0c\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u8fd9\u79cd\u89c4\u8303\u88ab\u79f0\u4e3a\u8303\u5f0f\u3002\u8bf7\u5927\u5bb6\u5148\u81ea\u884c\u4e86\u89e3\u6570\u636e\u5e93\u7684\u4e09\u5927\u8303\u5f0f\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8868\u7ed3\u6784\u8bbe\u8ba1\u5e94\u8be5\u5728\u4e09\u5927\u8303\u5f0f\u601d\u60f3\u7684\u57fa\u7840\u4e0a\uff0c\u4ee5\u4e1a\u52a1\u6027\u80fd\u4e3a\u6307\u5bfc\uff0c\u9002\u5f53\u8fdb\u884c\u6570\u636e\u5197\u4f59\u5b58\u50a8\uff0c\u4ee5\u51cf\u5c11\u8868\u7684\u5173\u8054\u4ece\u800c\u63d0\u5347\u4e1a\u52a1\u6027\u80fd\u3002\u5197\u4f59\u5b57\u6bb5\u5e94\u9075\u5faa\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0d\u662f\u9891\u7e41\u4fee\u6539\u7684\u5b57\u6bb5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0d\u662f\u8d85\u957f\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5efa\u8868\u65f6\u5e94\u8be5\u8bbe\u5b9a\u4e3b\u952e\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5efa\u8bae\u4f7f\u7528\u4e1a\u52a1\u5b57\u6bb5\u505a\u4e3b\u952e\u6216\u505a\u8054\u5408\u4e3b\u952e\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u81ea\u589e\u5217\u505a\u4e3b\u952e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["OceanBase \u6570\u636e\u5e93\u7684\u8868\u5b58\u50a8\u6a21\u578b\u4e3a\u7d22\u5f15\u805a\u96c6\u8868\u6a21\u578b(",(0,s.jsx)(e.code,{children:"IOT"}),")\uff0c\u5982\u679c\u7528\u6237\u672a\u6307\u5b9a\u4e3b\u952e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u9690\u85cf\u4e3b\u952e\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8868\u3001\u5b57\u6bb5\u5efa\u8bae\u6709 ",(0,s.jsx)(e.code,{children:"COMMENT"})," \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8868\u4e2d\u5b57\u6bb5\u5982\u679c\u9700\u8981\u4fdd\u8bc1\u975e\u7a7a\uff0c\u5efa\u8bae\u663e\u5f0f\u6307\u5b9a ",(0,s.jsx)(e.code,{children:"NOT NULL"})," \u5c5e\u6027"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8868\u4e2d\u5efa\u8bae\u6839\u636e\u9700\u8981\u5b9a\u4e49 ",(0,s.jsx)(e.code,{children:"DEFAULT"})," \u503c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0d\u540c\u8868\u4e2d\u7684\u76f8\u540c\u5217\uff0c\u5c3d\u91cf\u4fdd\u8bc1\u5217\u5b9a\u4e49\u5b8c\u5168\u4e00\u81f4\uff0c\u907f\u514d\u5728\u8ba1\u7b97\u65f6\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u9690\u5f0f\u8f6c\u6362\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8fdb\u884c ",(0,s.jsx)(e.code,{children:"join"})," \u7684\u5173\u8054\u5b57\u6bb5\uff0c\u6570\u636e\u7c7b\u578b\u4fdd\u8bc1\u4e00\u81f4\uff0c\u907f\u514d\u5728\u8ba1\u7b97\u65f6\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u9690\u5f0f\u8f6c\u6362\u3002",(0,s.jsx)(e.strong,{children:"\u9664\u4e86\u6570\u636e\u7c7b\u578b\uff0c\u8fd8\u8981\u5173\u6ce8 collation\u3001precision\u3001scale \u7b49\u6570\u636e\u7c7b\u578b\u7684\u9644\u5c5e\u5c5e\u6027\uff0c\u8fd9\u91cc\u5c5e\u6027\u4e0d\u540c\u5f88\u5bb9\u6613\u4f1a\u9020\u6210\u7d22\u5f15\u5931\u6548\u3001\u8ba1\u5212\u4e0d\u4f18\u7b49\u95ee\u9898\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"column\u5217\u8bbe\u8ba1\u89c4\u8303",children:"column\uff08\u5217\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5efa\u8bae\u5728\u521b\u5efa\u81ea\u589e\u5217\u5b57\u6bb5\u65f6\u4f7f\u7528 bigint \u7c7b\u578b\u3002\u5982\u679c\u4f7f\u7528 int \u7c7b\u578b\uff0c\u5219\u5bb9\u6613\u8fbe\u5230 max value\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5efa\u8bae\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u9009\u62e9\u5408\u9002\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u3001\u4ee5\u53ca\u6570\u5b57\u7684 precision\u3001scale\u3002\u53ef\u4ee5\u8282\u7ea6\u5b58\u50a8\u7a7a\u95f4\uff0c\u5e76\u80fd\u591f\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u5217\u8fdb\u884c\u6bd4\u8f83\u65f6\uff0c\u4f1a\u53d1\u751f\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\u3002\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\u65f6\uff0c\u7531\u6807\u51c6 SQL \u5b9a\u4e49\u7684\u8f6c\u6362\u65b9\u5411\u5927\u81f4\u662f\uff1a\u5b57\u7b26\u4e32\u7c7b\u578b -> \u6570\u5b57\u7c7b\u578b -> \u65f6\u95f4\u7c7b\u578b\u3002\u4e3a\u4e86\u660e\u786e\u4e1a\u52a1\u771f\u5b9e\u9700\u8981\u7684\u7c7b\u578b\u8f6c\u6362\u65b9\u5411\uff0c\u4ee5\u53ca\u4e3a\u4e86\u5145\u5206\u5229\u7528\u7d22\u5f15\u52a0\u901f\u67e5\u8be2\uff0c\u5efa\u8bae\u5728\u6bd4\u8f83\u524d\uff0c\u4f7f\u7528 cast \u6216 convert \u7b49\u65b9\u5f0f\u6765\u8fdb\u884c\u663e\u5f0f\u7c7b\u578b\u8f6c\u6362\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"partition\u5206\u533a\u8bbe\u8ba1\u89c4\u8303",children:"partition\uff08\u5206\u533a\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u7684\u4f18\u52bf\u5728\u4e8e\u5bf9\u4e8e\u7a7a\u95f4\u95ee\u9898\u548c\u8bf7\u6c42\u8bbf\u95ee\u95ee\u9898\u5206\u800c\u6cbb\u4e4b\u3002\u9488\u5bf9\u6bcf\u4e2a\u5206\u533a\u7684\u8bbf\u95ee\uff0c\u7531\u8be5\u5206\u533a\u6240\u5728\u7684\u8282\u70b9\u54cd\u5e94\u5373\u53ef\u3002"})," \u5373\u4f7f\u8be5 SQL \u5e76\u53d1\u5f88\u9ad8\uff0c\u7531\u4e8e\u8bbf\u95ee\u7684\u662f\u4e0d\u540c\u7684\u5206\u533a\uff0c\u5206\u522b\u7531\u4e0d\u540c\u7684\u8282\u70b9\u63d0\u4f9b\u670d\u52a1\u3002\u6bcf\u4e2a\u8282\u70b9\u81ea\u8eab\u4e5f\u6709\u4e00\u5b9a\u80fd\u529b\u6ee1\u8db3\u4e00\u5b9a\u7684 QPS\uff0c\u6240\u6709\u8282\u70b9\u96c6\u4e2d\u5728\u4e00\u8d77\u5c31\u80fd\u63d0\u4f9b\u66f4\u5927\u7684 QPS\u3002\u8fd9\u4e2a\u65f6\u5019\u5982\u679c\u6269\u5bb9\u8282\u70b9\u6570\u91cf\uff0c\u8be5 SQL \u603b\u7684 QPS \u4e5f\u80fd\u83b7\u5f97\u76f8\u5e94\u7684\u63d0\u5347\uff0c\u8fd9\u662f\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u91cc\u6700\u597d\u7684\u60c5\u5f62\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5206\u533a\u7684\u76ee\u6807\u662f\u5c06\u5927\u91cf\u6570\u636e\u548c\u8bbf\u95ee\u8bf7\u6c42\u5747\u5300\u5206\u5e03\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\uff0c\u4e00\u662f\u60f3\u5145\u5206\u5229\u7528\u8d44\u6e90\u8fdb\u884c\u5e76\u884c\u8ba1\u7b97\uff0c\u6d88\u9664\u67e5\u8be2\u70ed\u70b9\u95ee\u9898\uff1b\u4e8c\u662f\u60f3\u5229\u7528\u5206\u533a\u88c1\u526a\u6765\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"})," \u5982\u679c\u6bcf\u4e2a\u8282\u70b9\u5747\u5300\u627f\u62c5\u6570\u636e\u548c\u8bf7\u6c42\uff0c\u90a3\u4e48\u7406\u8bba\u4e0a 10 \u4e2a\u8282\u70b9\u5c31\u5e94\u8be5\u80fd\u627f\u62c5 10 \u500d\u4e8e\u5355\u8282\u70b9\u7684\u6570\u636e\u91cf\u548c\u8bbf\u95ee\u91cf\u3002\u7136\u800c\u5982\u679c\u5206\u533a\u662f\u4e0d\u5747\u5300\u7684\uff0c\u4e00\u4e9b\u5206\u533a\u7684\u6570\u636e\u91cf\u6216\u8005\u8bf7\u6c42\u91cf\u4f1a\u76f8\u5bf9\u6bd4\u8f83\u9ad8\uff0c\u51fa\u73b0\u6570\u636e\u504f\u659c\uff08skew\uff09\uff0c\u8fd9\u4e2a\u53ef\u80fd\u5bfc\u81f4\u8282\u70b9\u8d44\u6e90\u5229\u7528\u7387\u548c\u8d1f\u8f7d\u4e5f\u4e0d\u5747\u8861\u3002\u504f\u659c\u96c6\u4e2d\u7684\u6570\u636e\u6211\u4eec\u53c8\u79f0\u4e3a\u70ed\u70b9\u6570\u636e\u3002\u907f\u514d\u70ed\u70b9\u6570\u636e\u7684\u76f4\u63a5\u65b9\u6cd5\u5c31\u662f\u6570\u636e\u5b58\u50a8\u65f6\u968f\u673a\u5206\u914d\uff08\u6ca1\u6709\u89c4\u5219\uff09\u7ed9\u8282\u70b9\uff0c\u7f3a\u70b9\u662f\u8bfb\u53d6\u7684\u65f6\u5019\u4e0d\u77e5\u9053\u53bb\u54ea\u4e2a\u5206\u533a\u627e\u8be5\u8bb0\u5f55\uff0c\u53ea\u6709\u626b\u63cf\u6240\u6709\u5206\u533a\u4e86\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65b9\u6cd5\u610f\u4e49\u4e0d\u5927\u3002\u5b9e\u9645\u5e38\u7528\u7684\u5206\u533a\u7b56\u7565\u90fd\u662f\u6709\u4e00\u5b9a\u7684\u89c4\u5219\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u7528\u6237\u5fc5\u987b\u5728\u4e1a\u52a1\u67e5\u8be2\u6761\u4ef6\u660e\u786e\u7684\u60c5\u51b5\u4e0b\uff0c\u6839\u636e\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u8fdb\u884c\u5206\u533a\u89c4\u5212\uff0c\u4e0d\u8981\u5728\u573a\u666f\u4e0d\u660e\u786e\u7684\u60c5\u51b5\u4e0b\u968f\u610f\u8fdb\u884c\u5206\u533a\u89c4\u5219\u3002"})})," \u5728\u89c4\u5212\u5206\u533a\u65f6\uff0c\u5efa\u8bae\u5c3d\u91cf\u4fdd\u8bc1\u5404\u4e2a\u5206\u533a\u7684\u6570\u636e\u91cf\u76f8\u5bf9\u5747\u8861\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5e38\u7528\u7684\u4e09\u79cd\u5206\u533a\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"HASH \u5206\u533a\uff1a\u4e00\u822c\u9002\u7528\u4e8e\u5206\u533a\u5217 NDV\uff08\u4e0d\u540c\u503c\u7684\u79cd\u7c7b\uff09\u8f83\u5927\uff0c\u4e14\u96be\u4ee5\u5212\u5206\u51fa\u660e\u786e\u8303\u56f4\u7684\u60c5\u51b5\u3002\u4f18\u70b9\u662f\u5bb9\u6613\u8ba9\u6ca1\u6709\u7279\u5b9a\u89c4\u5219\u7684\u6570\u636e\u4e5f\u80fd\u591f\u5728\u4e0d\u540c\u7684\u5206\u533a\u5185\u5747\u5300\u5206\u5e03\uff0c\u7f3a\u70b9\u662f\u5728\u8303\u56f4\u67e5\u8be2\u65f6\u96be\u4ee5\u8fdb\u884c\u5206\u533a\u88c1\u526a\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"RANGE \u5206\u533a\uff1a\u4e00\u822c\u9002\u7528\u4e8e\u5206\u533a\u952e\u5bb9\u6613\u5212\u5206\u51fa\u660e\u786e\u7684\u8303\u56f4\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u53ef\u4ee5\u628a\u8bb0\u5f55\u6d41\u6c34\u4fe1\u606f\u7684\u5927\u8868\uff0c\u6839\u636e\u8868\u793a\u4fe1\u606f\u65f6\u95f4\u7684\u5217\u505a RANGE \u5206\u533a\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"LIST \u5206\u533a\uff1a\u4e00\u822c\u9002\u7528\u4e8e\u9700\u8981\u663e\u5f0f\u63a7\u5236\u5404\u884c\u6570\u636e\u5982\u4f55\u6620\u5c04\u5230\u5177\u4f53\u7684\u67d0\u4e00\u4e2a\u5206\u533a\u65f6\uff0c\u4f18\u70b9\u662f\u53ef\u4ee5\u5bf9\u65e0\u5e8f\u6216\u65e0\u5173\u7684\u6570\u636e\u96c6\u8fdb\u884c\u7cbe\u51c6\u5206\u533a\uff0c\u7f3a\u70b9\u662f\u5728\u8303\u56f4\u67e5\u8be2\u65f6\u96be\u4ee5\u8fdb\u884c\u5206\u533a\u88c1\u526a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3a\u4e86\u66f4\u597d\u5730\u652f\u6301\u5e76\u884c\u8ba1\u7b97\u548c\u5206\u533a\u88c1\u526a\uff0cOceanBase \u8fd8\u652f\u6301\u4e8c\u7ea7\u5206\u533a\u3002OceanBase \u6570\u636e\u5e93 MySQL \u6a21\u5f0f\u76ee\u524d\u652f\u6301 ",(0,s.jsx)(e.code,{children:"HASH"}),"\u3001",(0,s.jsx)(e.code,{children:"RANGE"}),"\u3001",(0,s.jsx)(e.code,{children:"LIST"}),"\u3001",(0,s.jsx)(e.code,{children:"KEY"}),"\u3001",(0,s.jsx)(e.code,{children:"RANGE COLUMNS"})," \u548c ",(0,s.jsx)(e.code,{children:"LIST COLUMNS"})," \u516d\u79cd\u5206\u533a\u7c7b\u578b\uff0c\u4e8c\u7ea7\u5206\u533a\u4e3a\u4efb\u610f\u4e24\u79cd\u5206\u533a\u7c7b\u578b\u7684\u7ec4\u5408\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\u5728\u7528\u6237\u8d26\u5355\u9886\u57df\uff0c\u6570\u636e\u5e93\u5f80\u5f80\u9700\u8981\u6309\u7167 user_id \u505a HASH \u4e00\u7ea7\u5206\u533a\uff0c\u7136\u540e\u518d\u5728\u5404\u4e2a\u4e00\u7ea7\u5206\u533a\u5185\u90e8\uff0c\u7ee7\u7eed\u6309\u7167\u8d26\u5355\u521b\u5efa\u65f6\u95f4\u505a RANGE \u4e8c\u7ea7\u5206\u533a\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image",src:i(77021).A+"",width:"1054",height:"514"})}),"\n",(0,s.jsx)(e.p,{children:"\u5c3d\u7ba1 OceanBase \u6570\u636e\u5e93\u5728\u7ec4\u5408\u5206\u533a\u4e0a\u652f\u6301 RANGE + HASH \u548c HASH + RANGE \u4e24\u79cd\u7ec4\u5408\uff0c\u4f46\u662f\u5bf9\u4e8e RANGE \u5206\u533a\u7684\u5206\u533a\u64cd\u4f5c add / drop\uff0c\u5fc5\u987b\u662f RANGE \u5206\u533a\u505a\u4e3a\u4e00\u7ea7\u5206\u533a\u7684\u65b9\u5f0f\u3002\u6240\u4ee5\u9488\u5bf9\u4f8b\u5982\u6570\u636e\u91cf\u8f83\u5927\u7684\u6d41\u6c34\u8868\uff0c\u4e3a\u4e86\u7ef4\u62a4\u65b9\u4fbf\uff08\u65b0\u589e\u548c\u5220\u9664\u5206\u533a\uff09\uff0c\u5efa\u8bae\u4f7f\u7528 RANGE + HASH \u7ec4\u5408\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u63a8\u8350\u9605\u8bfb",children:"\u63a8\u8350\u9605\u8bfb"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5206\u533a\u76f8\u5173\u5185\u5bb9\uff0c\u63a8\u8350\u5927\u5bb6\u9605\u8bfb OceanBase \u5b98\u7f51\u6587\u6863",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001430973",children:"\u300a\u521b\u5efa\u548c\u7ba1\u7406\u5206\u533a\u300b"}),"\u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5f53\u5206\u533a\u5212\u5206\u540e\uff0c\u6570\u636e\u5728\u5404\u4e2a\u5206\u533a\u4e0d\u5747\u8861\u65f6\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a\u6570\u636e\u503e\u659c\u5bfc\u81f4\u67e5\u8be2\u6027\u80fd\u4e0d\u4f18\u7684\u95ee\u9898\u3002\u63a8\u8350\u5927\u5bb6\u901a\u8fc7 OceanBase \u7684 SQL plan monitor \u8fd9\u4e2a\u5de5\u5177\uff0c\u6765\u786e\u8ba4\u67e5\u8be2\u6027\u80fd\u4e0d\u4f18\u662f\u5426\u662f\u7531\u4e8e\u6570\u636e\u503e\u659c\u9020\u6210\u7684\u3002\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1\uff1a",(0,s.jsx)(e.a,{href:"https://open.oceanbase.com/blog/8810787744",children:"\u300a\u8bd5\u7528 obdiag \u8fdb\u884c\u4fe1\u606f\u6536\u96c6\u548c\u95ee\u9898\u8bca\u65ad\u300b"}),"\u8fd9\u7bc7\u535a\u5ba2\u7684 \u201c\u6536\u96c6 sql_plan_monitor \u4fe1\u606f\u201d \u90e8\u5206\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"index\u7d22\u5f15\u8bbe\u8ba1\u89c4\u8303",children:"index\uff08\u7d22\u5f15\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsx)(e.h3,{id:"\u7d22\u5f15\u521b\u5efa\u7684\u89c4\u5219",children:"\u7d22\u5f15\u521b\u5efa\u7684\u89c4\u5219"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\u300aOceanBase DBA \u5165\u95e8\u6559\u7a0b\u300b\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390071",children:"\u201c\u5e38\u89c1\u7684 SQL \u8c03\u4f18\u65b9\u5f0f\u201d"})," \u5c0f\u8282\u7684 \u201c\u7d22\u5f15\u8c03\u4f18\u201d \u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5168\u5c40\u7d22\u5f15\u7684\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f",children:"\u5168\u5c40\u7d22\u5f15\u7684\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f"}),"\n",(0,s.jsx)(e.p,{children:"OceanBase \u7684 MySQL \u79df\u6237\u4e0b\uff0c\u7d22\u5f15\u88ab\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a\u672c\u5730\u7d22\u5f15\u548c\u5168\u5c40\u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e24\u8005\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e\uff1a\u672c\u5730\u7d22\u5f15\u4e0e\u4e3b\u8868\u5206\u533a\u65b9\u5f0f\u4fdd\u6301\u4e00\u81f4\uff0c\u5168\u5c40\u7d22\u5f15\u53ef\u5355\u72ec\u8bbe\u7f6e\u7d22\u5f15\u7684\u5206\u533a\u89c4\u5219\u3002MySQL \u6a21\u5f0f\u7684\u79df\u6237\uff0c\u4e0d\u663e\u5f0f\u6307\u5b9a\u7d22\u5f15\u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u7684\u521b\u5efa\u7684\u662f\u672c\u5730\u7d22\u5f15\uff08local index\uff09\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5168\u5c40\u7d22\u5f15\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u5728 MySQL \u4e0a\u7684\u4e00\u79cd\u6269\u5c55\u529f\u80fd\uff0c\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f\u8be6\u89c1\u300aOceanBase DBA \u5165\u95e8\u6559\u7a0b\u300b\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390115",children:"\u201cOceanBase \u6570\u636e\u5e93\u5728 MySQL \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u6269\u5c55\u529f\u80fd\u201d"})," \u5c0f\u8282\u7684 \u201c\u5168\u5c40\u7d22\u5f15\u201d \u90e8\u5206 \u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7d22\u5f15\u8bbe\u8ba1\u7684\u5efa\u8bae",children:"\u7d22\u5f15\u8bbe\u8ba1\u7684\u5efa\u8bae"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5148\u770b\u5b8c\u4e0a\u9762\u7684 \u201c\u7d22\u5f15\u521b\u5efa\u7684\u89c4\u5219\u201d \u548c \u201c\u5168\u5c40\u7d22\u5f15\u7684\u6982\u5ff5\u53ca\u9002\u7528\u573a\u666f\u201d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u975e\u5fc5\u8981\u60c5\u51b5\u4e0b\u4e0d\u8981\u4f7f\u7528\u5168\u5c40\u7d22\u5f15\uff08\u9700\u8981\u5148\u4e86\u89e3\u4e0a\u9762\u7684\u5168\u5c40\u7d22\u5f15\u9002\u7528\u573a\u666f\uff09\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5168\u5c40\u7d22\u5f15\u5728\u67e5\u8be2\u65f6\u7684\u56de\u8868\u4ee3\u4ef7\u975e\u5e38\u9ad8\uff0c\u662f\u672c\u5730\u7d22\u5f15\u4ee3\u4ef7\u7684\u5341\u500d\u5de6\u53f3\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u5c40\u7d22\u5f15\u589e\u5220\u6539\u7684\u7ef4\u62a4\u4ee3\u4ef7\u4e5f\u6bd4\u8f83\u9ad8\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u964d\u4f4e DML \u7684\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa\u5168\u5c40\u7d22\u5f15\u65f6\uff0c\u5efa\u8bae\u6307\u5b9a\u5206\u533a\u89c4\u5219\uff0c\u4e0d\u6307\u5b9a\u65f6\u9ed8\u8ba4\u4e0d\u5206\u533a\u3002\u6307\u5b9a\u5206\u533a\u89c4\u5219\u65f6\uff0c\u5efa\u8bae\u9009\u62e9 NDV\uff08\u5217\u4e2d\u4e0d\u540c\u503c\u7684\u6570\u91cf\uff09\u9ad8\u7684\u5b57\u6bb5\u4f5c\u4e3a\u5168\u5c40\u5206\u533a\u7d22\u5f15\u7684\u5206\u533a\u952e\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u591a\u8868\u5173\u8054\u67e5\u8be2\u65f6\uff0c\u5efa\u8bae\u8981\u4fdd\u8bc1\u88ab\u5173\u8054\u7684\u5b57\u6bb5\u4e0a\u5efa\u6709\u7d22\u5f15\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u5347 join \u6027\u80fd\u3002\u9700\u8981 join \u7684\u5b57\u6bb5\uff0c\u6570\u636e\u7c7b\u578b\u5c3d\u91cf\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u9700\u8981\u8fdb\u884c\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\u800c\u65e0\u6cd5\u5229\u7528\u7d22\u5f15\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u8003\u8651\u901a\u8fc7\u521b\u5efa\u8986\u76d6\u7d22\u5f15\uff0c\u6765\u907f\u514d\u7d22\u5f15\u56de\u8868\u5e26\u6765\u7684\u5f00\u9500\u3002\u88ab\u7d22\u5f15\u8986\u76d6\u7684\u5197\u4f59\u5217\uff0c\u5c3d\u91cf\u4e0d\u8981\u662f\u5927\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u7d22\u5f15\u5305\u542b\u591a\u4e2a\u5217\uff0cNDV\uff08\u5217\u4e2d\u4e0d\u540c\u503c\u7684\u6570\u91cf\uff09\u9ad8\u7684\u5217\uff0c\u5efa\u8bae\u653e\u5728\u524d\u9762\u3002\u4f8b\u5982\u8fc7\u6ee4\u6761\u4ef6\u662f ",(0,s.jsx)(e.code,{children:"where a= ? and b= ?"}),"\uff0cb \u5217\u7684 NDV \u8fdc\u9ad8\u4e8e a \u5217\uff0c\u90a3\u4e48\u7d22\u5f15\u53ef\u4ee5\u521b\u5efa\u4e3a idx(b, a)\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u82e5\u5b58\u5728 ",(0,s.jsx)(e.code,{children:"where a= ? and b= ?"})," \u8fd9\u6837\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5efa\u8bae\u4f7f\u7528\u7ec4\u5408\u7d22\u5f15 idx_ab(a,b)\u3002\u4e0d\u8981\u5206\u522b\u5728 a\u3001b \u5b57\u6bb5\u4e0a\u5efa\u7acb idx_a(a)\uff0cidx_b(b) \u591a\u4e2a\u7d22\u5f15\uff0c\u56e0\u4e3a\u540c\u4e00\u5f20\u8868\u4e0a\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u65e0\u6cd5\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u7d22\u5f15\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7d22\u5f15\u4f7f\u7528\u7684\u5efa\u8bae",children:"\u7d22\u5f15\u4f7f\u7528\u7684\u5efa\u8bae"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u7d22\u5f15\u4fee\u6539\u6d41\u7a0b\u4e3a\uff1a\u65b0\u5efa\u7d22\u5f15\u65f6\uff0c\u5fc5\u987b\u786e\u8ba4\u65b0\u7d22\u5f15\u521b\u5efa\u5b8c\u6210\uff08\u5373\u65b0\u7d22\u5f15\u5df2\u7ecf\u751f\u6548\uff09\uff0c\u5e76\u786e\u4fdd\u65e7\u7d22\u5f15\u4e0d\u4f1a\u88ab\u4f7f\u7528\u540e\uff0c\u518d\u5220\u9664\u65e7\u7d22\u5f15\u3002"})})}),"\n",(0,s.jsx)(e.p,{children:"by the way\uff1a\u8fd9\u6761\u5efa\u8bae\uff0c\u6709\u70b9\u513f\u50cf\u9ad8\u8003\u524d\u5efa\u8bae\u5927\u5bb6\u5e26\u597d\u51c6\u8003\u8bc1\u3002\u867d\u7136\u770b\u4f3c\u7b80\u5355\u4e14\u5bb9\u6613\u7406\u89e3\uff0c\u4f46\u662f\u5728\u8682\u8681\u96c6\u56e2\u5185\u90e8\uff0c\u6bcf\u5e74\u90fd\u4f1a\u6709\u4e2a\u522b\u540c\u5b66\u5728\u65b0\u7d22\u5f15\u8fd8\u6ca1\u5efa\u597d\u65f6\uff0c\u5c31\u628a\u65e7\u7d22\u5f15\u7ed9\u5220\u4e86\uff0c\u7136\u540e\u9020\u6210\u652f\u4ed8\u5b9d\u5728\u67d0\u4e2a\u4e1a\u52a1\u4e0a\u4e00\u6bb5\u65f6\u95f4\u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\uff0c\u4ea7\u751f\u5927\u91cf\u8d44\u635f\uff0c\u6700\u540e\u4e0d\u5f97\u4e0d\u5904\u7f5a\u51e0\u4e2a DBA \u6765\u5e73\u606f\u6c11\u6124\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5e0c\u671b\u5404\u4f4d OceanBase \u793e\u533a\u7248\u7684\u7528\u6237\uff0c\u5728\u521b\u5efa\u7d22\u5f15\u65f6\uff0c\u5343\u4e07\u4e0d\u8981\u72af\u8fd9\u4e2a\u4f4e\u7ea7\u4e14\u53ef\u80fd\u4f1a\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\u7684\u9519\u8bef\uff01"}),"\n",(0,s.jsx)(e.h2,{id:"increment-column\u81ea\u589e\u5217\u8bbe\u8ba1\u89c4\u8303",children:"increment column\uff08\u81ea\u589e\u5217\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\u300aOceanBase DBA \u5165\u95e8\u6559\u7a0b\u300b\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390115",children:"\u201cOceanBase \u6570\u636e\u5e93\u5728 MySQL \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u6269\u5c55\u529f\u80fd\u201d"})," \u5c0f\u8282\u7684 \u201c\u5e8f\u5217\u201d \u90e8\u5206 \u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5148\u770b\u5b8c\u4e0a\u9762\u8fd9\u4e2a\u63a8\u8350\u5927\u5bb6\u9605\u8bfb\u7684\u5c0f\u8282\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u521b\u5efa\u81ea\u589e\u5217\u65f6\uff0c\u9ed8\u8ba4\u4e3a ORDER \u5c5e\u6027\uff08\u4e3a\u4e86\u548c MySQL \u884c\u4e3a\u517c\u5bb9\uff09\u3002","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u8981\u6c42\u5e8f\u5217\u503c\u9012\u589e\uff0c\u53ea\u8981\u6c42\u552f\u4e00\uff0c\u5efa\u8bae\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u4e3a NOORDER\uff0c\u53ef\u4ee5\u5927\u5927\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u9700\u8981\u907f\u514d NOORDER \u6a21\u5f0f\u5728\u5206\u5e03\u5f0f\u573a\u666f\u4e0b\uff0c\u5728\u4e0d\u540c\u7684\u7684\u8282\u70b9\u4e0a\u7533\u8bf7\u81ea\u589e\u503c\u5bfc\u81f4\u7684\u81ea\u589e\u503c\u8df3\u53d8\u7684\u95ee\u9898\uff0c\u9700\u8981\u5c06\u8be5\u5c5e\u6027\u8c03\u6574\u4e3a ORDER\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"recycle-bin\u56de\u6536\u7ad9\u8bbe\u8ba1\u89c4\u8303",children:"recycle bin\uff08\u56de\u6536\u7ad9\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\u300aOceanBase DBA \u5165\u95e8\u6559\u7a0b\u300b\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390115",children:"\u201cOceanBase \u6570\u636e\u5e93\u5728 MySQL \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u6269\u5c55\u529f\u80fd\u201d"})," \u5c0f\u8282\u7684 \u201c\u56de\u6536\u7ad9\u201d \u90e8\u5206 \u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5148\u770b\u5b8c\u4e0a\u9762\u8fd9\u4e2a\u63a8\u8350\u5927\u5bb6\u9605\u8bfb\u7684\u5c0f\u8282\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9\u4e8e table \u5bf9\u8c61\uff0c\u867d\u7136\u652f\u6301\u901a\u8fc7\u88ab\u5220\u9664\u524d\u7684\u539f\u540d\uff08ORIGINAL_NAME\uff09\u8fdb\u884c flashback \u548c purge\uff0c\u5e76\u4e14\u770b\u4e0a\u53bb\u5f88\u6613\u7528\u3002\u4f46\u8fd8\u662f\u5efa\u8bae\u5927\u5bb6\u5c3d\u91cf\u901a\u8fc7\u53ef\u4ee5\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\u7684\u65b0\u540d\u5b57\uff08OBJECT_NAME\uff09\u5bf9\u56de\u6536\u7ad9\u5bf9\u8c61\u8fdb\u884c\u8fd8\u539f\u548c\u6e05\u7a7a\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u7531\u4e8e\u8bb0\u9519\u901a\u8fc7\u5bf9\u8c61\u539f\u540d\u8fdb\u884c\u64cd\u4f5c\u7684\u89c4\u5219\u800c\u9020\u6210\u7684\u635f\u5931\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"tablegroup\u8868\u7ec4\u8bbe\u8ba1\u89c4\u8303",children:"tablegroup\uff08\u8868\u7ec4\uff09\u8bbe\u8ba1\u89c4\u8303"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u4e3a\u8868\u7ec4\u662f\u6269\u5c55\u529f\u80fd\uff08\u5373 MySQL \u6ca1\u6709\u7684\u529f\u80fd\uff09\uff0c\u6240\u4ee5\u5355\u72ec\u62ff\u51fa\u6765\u518d\u63d0\u4e00\u53e5\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\u300aOceanBase DBA \u5165\u95e8\u6559\u7a0b\u300b\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/community-tutorials-cn-1000000001390115",children:"\u201cOceanBase \u6570\u636e\u5e93\u5728 MySQL \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u6269\u5c55\u529f\u80fd\u201d"})," \u5c0f\u8282\u7684 \u201c\u8868\u7ec4\u201d \u90e8\u5206 \u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},77021:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/001-36526834e62a4131579315a511e96920.png"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var s=i(96540);const c={},l=s.createContext(c);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);