"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8810],{25966:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=a(74848),t=a(28453);const s={title:"Datax",weight:2},c="\u4f7f\u7528 DataX \u8fc1\u79fb MySQL \u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93",o={id:"user_manual/user_best_practices/data_migration/datax",title:"Datax",description:"\u672c\u6587\u4ec5\u7ed9\u51fa\u4f7f\u7528 DataX \u8fc1\u79fb MySQL \u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93\u7684\u793a\u4f8b\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u67e5\u770b\u5bf9\u5e94\u5c0f\u8282\u7ed9\u51fa\u7684\u53c2\u8003\u6587\u6863\u3002",source:"@site/docs/user_manual/user_best_practices/data_migration/datax.md",sourceDirName:"user_manual/user_best_practices/data_migration",slug:"/user_manual/user_best_practices/data_migration/datax",permalink:"/docs/user_manual/user_best_practices/data_migration/datax",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/data_migration/datax.md",tags:[],version:"current",frontMatter:{title:"Datax",weight:2},sidebar:"legacySidebar",previous:{title:"Canal",permalink:"/docs/user_manual/user_best_practices/data_migration/canal"},next:{title:"OBLogProxy",permalink:"/docs/user_manual/user_best_practices/data_migration/oblogproxy"}},d={},i=[{value:"<strong>MySQL \u6570\u636e\u540c\u6b65\u5230 OceanBase</strong>",id:"mysql-\u6570\u636e\u540c\u6b65\u5230-oceanbase",level:2},{value:"<strong>\u52a0\u8f7d CSV \u6570\u636e\u6587\u4ef6\u5230 OceanBase \u6570\u636e\u5e93</strong>",id:"\u52a0\u8f7d-csv-\u6570\u636e\u6587\u4ef6\u5230-oceanbase-\u6570\u636e\u5e93",level:2},{value:"<strong>MySQL \u6570\u636e\u5bfc\u51fa\u4e3a CSV \u6587\u4ef6</strong>",id:"mysql-\u6570\u636e\u5bfc\u51fa\u4e3a-csv-\u6587\u4ef6",level:3},{value:"<strong>CSV \u6587\u4ef6\u5bfc\u5165\u5230 OceanBase</strong>",id:"csv-\u6587\u4ef6\u5bfc\u5165\u5230-oceanbase",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4f7f\u7528-datax-\u8fc1\u79fb-mysql-\u6570\u636e\u5230-oceanbase-\u6570\u636e\u5e93",children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528 DataX \u8fc1\u79fb MySQL \u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93"})})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ec5\u7ed9\u51fa\u4f7f\u7528 DataX \u8fc1\u79fb MySQL \u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93\u7684\u793a\u4f8b\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u67e5\u770b\u5bf9\u5e94\u5c0f\u8282\u7ed9\u51fa\u7684\u53c2\u8003\u6587\u6863\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"mysql-\u6570\u636e\u540c\u6b65\u5230-oceanbase",children:(0,r.jsx)(n.strong,{children:"MySQL \u6570\u636e\u540c\u6b65\u5230 OceanBase"})}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u8282\u4ec5\u7ed9\u51fa\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff0c\u8be6\u60c5\u53ef\u53c2\u7167 OceanBase \u6570\u636e\u5e93\u6587\u6863 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/community-observer-cn-10000000000900965",children:"\u4f7f\u7528 DataX \u8fc1\u79fb MySQL \u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93"})," \u4e00\u6587\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 4 \n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0.1\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "tpcc",\n                        "password": "********",\n                        "column": [\n                            "*"\n                        ],\n                        "connection": [\n                            {\n                                "table": [\n                                    "bmsql_oorder"\n                                ],\n                                "jdbcUrl": ["jdbc:mysql://127.0.0.1:3306/tpccdb?useUnicode=true&characterEncoding=utf8"]\n                            }\n                        ]\n                    }\n                },\n\n                "writer": {\n                    "name": "oceanbasev10writer",\n                    "parameter": {\n                        "obWriteMode": "insert",\n                        "column": [\n                            "*"\n                        ],\n                        "preSql": [\n                            "truncate table bmsql_oorder"\n                        ],\n                        "connection": [\n                            {\n                                "jdbcUrl": "||_dsc_ob10_dsc_||obdemo:oboracle||_dsc_ob10_dsc_||jdbc:mysql://127.0.0.1:2883/tpcc?useLocalSessionState=true&allowBatch=true&allowMultiQueries=true&rewriteBatchedStatements=true",\n                                "table": [\n                                    "bmsql_oorder"\n                                ]\n                            }\n                        ],\n                        "username": "tpcc",\n                        "password":"********",\n                        "writerThreadCount":10,\n                        "batchSize": 1000,\n                        "memstoreThreshold": "0.9"\n                    }\n                }\n            }\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u52a0\u8f7d-csv-\u6570\u636e\u6587\u4ef6\u5230-oceanbase-\u6570\u636e\u5e93",children:(0,r.jsx)(n.strong,{children:"\u52a0\u8f7d CSV \u6570\u636e\u6587\u4ef6\u5230 OceanBase \u6570\u636e\u5e93"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06 MySQL \u6570\u636e\u8fc1\u79fb\u5230 OceanBase \u6570\u636e\u5e93\u65f6\uff0c\u5982\u679c\u6e90\u7aef\u548c\u76ee\u6807\u7aef\u4e0d\u80fd\u540c\u65f6\u8ddf DataX \u670d\u52a1\u5668\u7f51\u7edc\u8054\u901a\uff0c\u5219\u9700\u8981\u901a\u8fc7 CSV \u6587\u4ef6\u4e2d\u8f6c\u3002\u672c\u8282\u4ec5\u7ed9\u51fa\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff0c\u8be6\u60c5\u53ef\u53c2\u7167 OceanBase \u6570\u636e\u5e93\u6587\u6863 ",(0,r.jsx)(n.a,{href:"https://www.oceanbase.com/docs/community-observer-cn-10000000000900960",children:"\u4f7f\u7528 DataX \u52a0\u8f7d CSV \u6570\u636e\u6587\u4ef6\u5230 OceanBase \u6570\u636e\u5e93"})," \u4e00\u6587\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"mysql-\u6570\u636e\u5bfc\u51fa\u4e3a-csv-\u6587\u4ef6",children:(0,r.jsx)(n.strong,{children:"MySQL \u6570\u636e\u5bfc\u51fa\u4e3a CSV \u6587\u4ef6"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06 MySQL \u6570\u636e\u5bfc\u51fa\u4e3a CSV \u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$cat job/bmsql_oorder_mysql2csv.json\n{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 4\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0.1\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "tpcc",\n                        "password": "********",\n                        "column": [\n                            "*"\n                        ],\n                        "connection": [\n                            {\n                                "table": [\n                                    "bmsql_oorder"\n                                ],\n                                "jdbcUrl": ["jdbc:mysql://127.0.0.1:3306/tpccdb?useUnicode=true&characterEncoding=utf8"]\n                            }\n                        ]\n                    }\n                },\n                "writer": {\n                    "name": "txtfilewriter",\n                    "parameter": {\n                        "path": "/tmp/tpcc/bmsql_oorder",\n                        "fileName": "bmsql_oorder",\n                        "encoding": "UTF-8",\n                        "writeMode": "truncate",\n                        "dateFormat": "yyyy-MM-dd hh:mm:ss" ,\n                        "nullFormat": "\\\\N" ,\n                        "fileFormat": "csv" ,\n                        "fieldDelimiter": ","\n                    }\n                }\n            }\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"csv-\u6587\u4ef6\u5bfc\u5165\u5230-oceanbase",children:(0,r.jsx)(n.strong,{children:"CSV \u6587\u4ef6\u5bfc\u5165\u5230 OceanBase"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u6e90\u7aef\u5bfc\u51fa\u7684 CSV \u6587\u4ef6\u590d\u5236\u5230\u76ee\u6807\u7aef\u7684 DataX \u670d\u52a1\u5668\u4e0a\uff0c\u7136\u540e\u5bfc\u5165\u5230\u76ee\u6807\u7aef OceanBase \u6570\u636e\u5e93\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$cat job/bmsql_oorder_csv2ob.json\n{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 4\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0.1\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "txtfilereader",\n                    "parameter": {\n                        "path": ["/tmp/tpcc/bmsql_oorder"],\n                        "fileName": "bmsql_oorder",\n                        "encoding": "UTF-8",\n                        "column": ["*"],\n                        "dateFormat": "yyyy-MM-dd hh:mm:ss" ,\n                        "nullFormat": "\\\\N" ,\n                        "fieldDelimiter": ","\n                    }\n                },\n                "writer": {\n                    "name": "oceanbasev10writer",\n                    "parameter": {\n                        "obWriteMode": "insert",\n                        "column": [\n                            "*"\n                        ],\n                        "preSql": [\n                            "truncate table bmsql_oorder"\n                        ],\n                        "connection": [\n                            {\n                                "jdbcUrl": "||_dsc_ob10_dsc_||obdemo:oboracle||_dsc_ob10_dsc_||jdbc:mysql://127.0.0.1:2883/tpcc?useLocalSessionState=true&allowBatch=true&allowMultiQueries=true&rewriteBatchedStatements=true",\n                                "table": [\n                                    "bmsql_oorder"\n                                ]\n                            }\n                        ],\n                        "username": "tpcc",\n                        "password":"********",\n                        "writerThreadCount":10,\n                        "batchSize": 1000,\n                        "memstoreThreshold": "0.9"\n                    }\n                }\n            }\n        ]\n    }\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>o});var r=a(96540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);