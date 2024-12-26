"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[449],{9185:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var s=a(74848),l=a(28453);const c={title:"Canal",weight:3},r="\u4f7f\u7528 Canal \u4ece MySQL \u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93",t={id:"user_manual/user_best_practices/data_migration/canal",title:"Canal",description:"Canal \u662f Alibaba \u5f00\u6e90\u7684\u4e00\u4e2a\u4ea7\u54c1\uff0c\u4e3b\u8981\u7528\u9014\u662f\u57fa\u4e8e MySQL \u6570\u636e\u5e93\u589e\u91cf\u65e5\u5fd7\u89e3\u6790\uff0c\u63d0\u4f9b\u589e\u91cf\u6570\u636e\u8ba2\u9605\u548c\u6d88\u8d39\u3002",source:"@site/docs/user_manual/user_best_practices/data_migration/canal.md",sourceDirName:"user_manual/user_best_practices/data_migration",slug:"/user_manual/user_best_practices/data_migration/canal",permalink:"/docs/user_manual/user_best_practices/data_migration/canal",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/data_migration/canal.md",tags:[],version:"current",frontMatter:{title:"Canal",weight:3},sidebar:"legacySidebar",previous:{title:"\u6570\u636e\u8fc1\u79fb\u5e73\u53f0 - OMS",permalink:"/docs/user_manual/user_best_practices/deploy_tools/deploy_oms"},next:{title:"Datax",permalink:"/docs/user_manual/user_best_practices/data_migration/datax"}},d={},i=[{value:"<strong>\u67b6\u6784\u539f\u7406</strong>",id:"\u67b6\u6784\u539f\u7406",level:2},{value:"<strong>\u64cd\u4f5c\u6b65\u9aa4</strong>",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"<strong>\u6b65\u9aa4\u4e00\uff1aMySQL \u76f8\u5173\u8bbe\u7f6e</strong>",id:"\u6b65\u9aa4\u4e00mysql-\u76f8\u5173\u8bbe\u7f6e",level:3},{value:"<strong>\u6b65\u9aa4\u4e8c\uff1aCanal \u7684\u4e0b\u8f7d\u548c\u5b89\u88c5</strong>",id:"\u6b65\u9aa4\u4e8ccanal-\u7684\u4e0b\u8f7d\u548c\u5b89\u88c5",level:3},{value:"<strong>\u6b65\u9aa4\u4e09\uff1a\u90e8\u7f72 RDB \u9002\u914d\u5668</strong>",id:"\u6b65\u9aa4\u4e09\u90e8\u7f72-rdb-\u9002\u914d\u5668",level:3},{value:"<strong>\u529f\u80fd\u9650\u5236</strong>",id:"\u529f\u80fd\u9650\u5236",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u4f7f\u7528-canal-\u4ece-mysql-\u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u5230-oceanbase-\u6570\u636e\u5e93",children:(0,s.jsx)(e.strong,{children:"\u4f7f\u7528 Canal \u4ece MySQL \u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u5230 OceanBase \u6570\u636e\u5e93"})})}),"\n",(0,s.jsx)(e.p,{children:"Canal \u662f Alibaba \u5f00\u6e90\u7684\u4e00\u4e2a\u4ea7\u54c1\uff0c\u4e3b\u8981\u7528\u9014\u662f\u57fa\u4e8e MySQL \u6570\u636e\u5e93\u589e\u91cf\u65e5\u5fd7\u89e3\u6790\uff0c\u63d0\u4f9b\u589e\u91cf\u6570\u636e\u8ba2\u9605\u548c\u6d88\u8d39\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 Canal \u7684 canal.deployer \u548c canal.adapter \u7ec4\u4ef6\u4ece MySQL \u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u81f3 OceanBase \u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u53c2\u8003\u5b98\u7f51 OceanBase \u6570\u636e\u5e93\u6587\u6863 ",(0,s.jsx)(e.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-10000000001697230",children:"\u4f7f\u7528 Canal \u4ece OceanBase \u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u5230 MySQL \u6570\u636e\u5e93"})," \u4e00\u6587\u4f7f\u7528 Canal \u548c oblogproxy \u7ec4\u4ef6\u4ece OceanBase \u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\u81f3 MySQL \u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u67b6\u6784\u539f\u7406",children:(0,s.jsx)(e.strong,{children:"\u67b6\u6784\u539f\u7406"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"canal deployer\uff1aCanal \u7684 Server \u7aef\uff0c\u8fdb\u884c binlog \u5230 CanalEntry \u7684\u8f6c\u6362\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"canal adapter\uff1aCanal \u7684\u5ba2\u6237\u7aef\u9002\u914d\u5668\uff0c\u89e3\u6790 CanalEntry \u5e76\u5c06\u589e\u91cf\u53d8\u52a8\u540c\u6b65\u5230\u76ee\u7684\u7aef\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Canal \u76f8\u5173\u4fe1\u606f\u8bbf\u95ee\u5730\u5740\uff1a[",(0,s.jsx)(e.a,{href:"https://github.com/alibaba/canal/releases%5D%E3%80%82",children:"https://github.com/alibaba/canal/releases]\u3002"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c\u6b65\u9aa4"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa4\u4e00mysql-\u76f8\u5173\u8bbe\u7f6e",children:(0,s.jsx)(e.strong,{children:"\u6b65\u9aa4\u4e00\uff1aMySQL \u76f8\u5173\u8bbe\u7f6e"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539 MySQL \u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.code,{children:"my.cnf"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.code,{children:"my.cnf"})," \u4f4d\u7f6e\uff1a",(0,s.jsx)(e.code,{children:"/etc/my.cnf"}),"\u3002\u5148\u5f00\u542f binlog \u5199\u5165\u529f\u80fd\uff0c\u914d\u7f6e binlog-format \u4e3a ROW \u6a21\u5f0f\uff0c\u914d\u7f6e\u540e\u9700\u91cd\u542f MySQL \u751f\u6548\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"log-bin=mysql-bin # \u5f00\u542f binlog\nbinlog-format=ROW # \u9009\u62e9 ROW \u6a21\u5f0f\nserver_id=1 # \u914d\u7f6e MySQL replaction \u9700\u8981\u5b9a\u4e49\uff0c\u4e0d\u8981\u548c canal \u7684 slaveId \u91cd\u590d\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a MySQL \u7528\u6237\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5 MySQL \u7684\u7528\u6237\uff0c\u7528\u6237\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"canal"}),"\uff0c\u5e76\u4e3a ",(0,s.jsx)(e.code,{children:"canal"})," \u6388\u4e88\u6240\u6709\u5e93\u7684\u8bfb\u5199\u6743\u9650\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"MySQL [(none)]> CREATE USER 'canal'@'%' IDENTIFIED BY '******';\nQuery OK, 0 rows affected\n\nMySQL [(none)]> GRANT SELECT,REPLICATION SLAVE,REPLICATION CLIENT ON *.* TO 'canal'@'%';\nQuery OK, 0 rows affected\n\nMySQL [(none)]> FLUSH PRIVILEGES;\nQuery OK, 0 rows affected\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa\u6570\u636e\u5e93 ",(0,s.jsx)(e.code,{children:"test_mysql_to_ob"}),"\uff0c\u8868 ",(0,s.jsx)(e.code,{children:"tbl1"})," \u548c ",(0,s.jsx)(e.code,{children:"tbl2"}),"\uff0c\u5e76\u63d2\u5165\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"MySQL [(none)]> CREATE DATABASE test_mysql_to_ob;\nQuery OK, 1 row affected\n\nMySQL [(none)]> USE test_mysql_to_ob;\nDatabase changed\n\nMySQL [test_mysql_to_ob]> CREATE TABLE tbl1(col1 INT PRIMARY KEY, col2 VARCHAR(20),col3 INT);\nQuery OK, 0 rows affected\n\nMySQL [test_mysql_to_ob]> INSERT INTO tbl1 VALUES(1,'China',86),(2,'Taiwan',886),(3,'Hong Kong',852),(4,'Macao',853),(5,'North Korea',850);\nQuery OK, 5 rows affected\nRecords: 5  Duplicates: 0  Warnings: 0\n\nMySQL [test_mysql_to_ob]> CREATE TABLE tbl2(col1 INT PRIMARY KEY,col2 VARCHAR(20));\nQuery OK, 0 rows affected\n\nMySQL [test_mysql_to_ob]> INSERT INTO tbl2 VALUES(86,'+86'),(886,'+886'),(852,'+852'),(853,'+853'),(850,'+850');\nQuery OK, 5 rows affected\nRecords: 5  Duplicates: 0  Warnings: 0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa4\u4e8ccanal-\u7684\u4e0b\u8f7d\u548c\u5b89\u88c5",children:(0,s.jsx)(e.strong,{children:"\u6b65\u9aa4\u4e8c\uff1aCanal \u7684\u4e0b\u8f7d\u548c\u5b89\u88c5"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u8282\u4ee5 Canal V1.1.5 \u4e3a\u4f8b\u63d0\u4f9b\u64cd\u4f5c\u6307\u5bfc\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u63a8\u8350\u4f7f\u7528 Canal V1.1.5 \u7248\u672c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8f7d\u8f6f\u4ef6\u5305\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d ",(0,s.jsx)(e.a,{href:"https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.deployer-1.1.5.tar.gz",children:"canal.deployer-1.1.5.tar.gz"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"wget https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.deployer-1.1.5.tar.gz\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5c06\u538b\u7f29\u5305\u89e3\u538b\u81f3\u76ee\u5f55 ",(0,s.jsx)(e.code,{children:"/Canal_Home/canal"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"mkdir /Canal_Home/canal && tar -zxvf canal.deployer-1.1.5.tar.gz -C /Canal_Home/canal\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["canal.deployer \u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,s.jsx)(e.code,{children:"conf/canal.properties"})," \u548c ",(0,s.jsx)(e.code,{children:"conf/example/instance.properties"}),"\u3002\u8fd9\u91cc\u662f\u9ed8\u8ba4\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"instance"})," \u53eb ",(0,s.jsx)(e.code,{children:"example"}),"\u3002\u9700\u8981\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"example"})," \u7684\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002",(0,s.jsx)(e.code,{children:"canal.instance.connectionCharset"})," \u4ee3\u8868\u6570\u636e\u5e93\u7684\u7f16\u7801\u65b9\u5f0f\u5bf9\u5e94\u5230 Java \u4e2d\u7684\u7f16\u7801\u7c7b\u578b\uff0c\u6bd4\u5982 ",(0,s.jsx)(e.code,{children:"UTF-8"}),"\uff0c",(0,s.jsx)(e.code,{children:"GBK"}),"\uff0c",(0,s.jsx)(e.code,{children:"ISO-8859-1"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"vi conf/example/instance.properties\n\n# mysql serverId\ncanal.instance.mysql.slaveId = 1234\n#position info\uff0c\u9700\u8981\u6539\u6210\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4fe1\u606f\ncanal.instance.master.address = xxx.xxx.xxx.xxx:3306\ncanal.instance.master.journal.name =\ncanal.instance.master.position =\ncanal.instance.master.timestamp =\n#canal.instance.standby.address =\n#canal.instance.standby.journal.name =\n#canal.instance.standby.position =\n#canal.instance.standby.timestamp =\n#username/password\uff0c\u9700\u8981\u6539\u6210\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4fe1\u606f\ncanal.instance.dbUsername = canal\ncanal.instance.dbPassword = ******\ncanal.instance.defaultDatabaseName =\ncanal.instance.connectionCharset = UTF-8\n#table regex\ncanal.instance.filter.regex = .*\\\\..*\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 Canal Server\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd /Canal_Home/canal && sh bin/startup.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b server \u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cat logs/canal/canal.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b instance \u7684\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"tail -f logs/canal/canal.log\ntail -f logs/example/example.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u9700\u505c\u6b62\u670d\u52a1\u53ef\u6267\u884c\u4e0b\u8ff0\u547d\u4ee4\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd /Canal_Home/canal && sh bin/stop.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa4\u4e09\u90e8\u7f72-rdb-\u9002\u914d\u5668",children:(0,s.jsx)(e.strong,{children:"\u6b65\u9aa4\u4e09\uff1a\u90e8\u7f72 RDB \u9002\u914d\u5668"})}),"\n",(0,s.jsx)(e.p,{children:"Canal Adapter \u63d0\u4f9b\u4e86\u5bf9\u591a\u79cd\u76ee\u6807\u5bb9\u5668\u7684\u652f\u6301\uff0c\u5bf9\u4e8e OceanBase \u6765\u8bf4\uff0c\u4e3b\u8981\u4f7f\u7528\u5b83\u7684 rdb \u6a21\u5757\uff0c\u76ee\u7684\u7aef\u5bb9\u5668\u4e3a OceanBase\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8f7d\u8f6f\u4ef6\u5305\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d ",(0,s.jsx)(e.a,{href:"https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.adapter-1.1.5.tar.gz",children:"canal.adapter-1.1.5.tar.gz"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"wget https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.adapter-1.1.5.tar.gz\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5c06\u538b\u7f29\u5305\u89e3\u538b\u81f3\u76ee\u5f55 ",(0,s.jsx)(e.code,{children:"/Canal_Home/adapter"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"mkdir /Canal_Home/adapter && tar -zxvf canal.adapter-1.1.5.tar.gz -C /Canal_Home/adapter\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4fee\u6539\u542f\u52a8\u5668\u914d\u7f6e\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539\u542f\u52a8\u5668\u914d\u7f6e\uff1a",(0,s.jsx)(e.code,{children:"conf/application.yml"}),"\u3002\u9996\u5148\u6307\u5b9a ",(0,s.jsx)(e.code,{children:"adapter"})," \u6e90\u7aef\u7c7b\u578b\uff0c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"mode"})," \u6307\u5b9a\uff0c\u8fd9\u91cc\u9009\u62e9 ",(0,s.jsx)(e.code,{children:"tcp"}),"\u3002\u540e\u9762\u5c31\u8981\u6307\u5b9a ",(0,s.jsx)(e.code,{children:"canal.tcp"})," \u76f8\u5173\u5c5e\u6027\uff0c\u5305\u62ec ",(0,s.jsx)(e.code,{children:"canal server"})," \u7684 IP \u548c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\u7684\u8fde\u63a5\u7528\u6237\u548c\u5bc6\u7801\u3002\u4e4b\u540e\u6307\u5b9a ",(0,s.jsx)(e.code,{children:"adapter"})," \u76ee\u6807\u7aef\u8fde\u63a5\u4fe1\u606f\u3002",(0,s.jsx)(e.code,{children:"instance"})," \u662f\u6e90\u7aef\u5b9e\u4f8b\u540d\u79f0\uff0c\u5728 canal \u90e8\u7f72\u7684\u65f6\u5019\u5b9a\u4e49\u7684\u3002key \u662f\u81ea\u5b9a\u4e49\uff0c\u540d\u5b57\u540e\u9762\u6709\u7528\u3002jdbc \u76f8\u5173\u5c5e\u6027\u662f\u76ee\u6807\u7aef OceanBase \u7684\u8fde\u63a5\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 MySQL \u81ea\u5e26\u7684\u9a71\u52a8\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"mode: tcp #tcp kafka rocketMQ rabbitMQ\nflatMessage: true\nzookeeperHosts:\nsyncBatchSize: 1000\nretries: 0\ntimeout:\naccessKey:\nsecretKey:\nconsumerProperties:\n# canal tcp consumer\n    canal.tcp.server.host: 127.0.0.1:11111\n    canal.tcp.zookeeper.hosts:\n    canal.tcp.batch.size: 500\n    canal.tcp.username:\n    canal.tcp.password:\ncanalAdapters:\n- instance: example # canal instance Name or mq topic name\n  groups:\n  - groupId: g1\n    outerAdapters:\n    - name: logger\n    - name: rdb\n      key: test_mysql_to_ob\n      properties:\n        jdbc.driverClassName: com.mysql.jdbc.Driver\n        jdbc.url: jdbc:mysql://xxx.xxx.xxx.xxx:2883/test_data?useUnicode=true\n        jdbc.username: root@mysql001#test4000\n        jdbc.password: ******\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"RDB \u6620\u5c04\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"conf/rdb/mytest_user.yml"})," \u6587\u4ef6\u3002\u5176\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"destination"})," \u6307\u5b9a\u7684\u662f ",(0,s.jsx)(e.code,{children:"canal instance"})," \u540d\u79f0\uff1b",(0,s.jsx)(e.code,{children:"outerAdapterKey"})," \u662f\u524d\u9762\u5b9a\u4e49\u7684 ",(0,s.jsx)(e.code,{children:"key"}),"\uff1b",(0,s.jsx)(e.code,{children:"mirrorDb"})," \u6307\u5b9a\u6570\u636e\u5e93\u7ea7\u522b DDL \u548c DML \u955c\u50cf\u540c\u6b65\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6620\u5c04\u6709\u4e24\u79cd\uff1a\u4e00\u662f\u6309\u8868\u6620\u5c04\uff1b\u4e8c\u662f\u6574\u5e93\u6620\u5c04\u3002\u4e0b\u9762\u4ee5\u6574\u5e93\u6620\u5c04\u4e3a\u4f8b\u8fdb\u884c\u914d\u7f6e\uff0c\u6ce8\u91ca\u90e8\u5206\u4e3a\u6309\u8868\u6620\u5c04\u7684\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'[root@obce00 adapter]# cat conf/rdb/mytest_user.yml\n#dataSourceKey: defaultDS\n#destination: example\n#groupId: g1\n#outerAdapterKey: mysql1\n#concurrent: true\n#dbMapping:\n#  database: mytest\n#  table: user\n#  targetTable: mytest\n#  targetPk:\n#    id: id\n#  mapAll: true\n#  targetColumns:\n#    id:\n#    name:\n#    role_id:\n#    c_time:\n#    test1:\n#  etlCondition: "where c_time>={}"\n#  commitBatch: 3000 # \u6279\u91cf\u63d0\u4ea4\u7684\u5927\u5c0f\n# Mirror schema synchronize config\ndataSourceKey: defaultDS\ndestination: example\ngroupId: g1\nouterAdapterKey: test_mysql_to_ob\nconcurrent: true\ndbMapping:\nmirrorDb: true\ndatabase: test_data\ncommitBatch: 1000\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 RDB\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f7f\u7528\u4e86 OceanBase \u7684\u9a71\u52a8\uff0c\u5219\u5c06\u76ee\u6807\u5e93 OceanBase \u9a71\u52a8\u5305\u653e\u5165 ",(0,s.jsx)(e.code,{children:"lib"})," \u6587\u4ef6\u5939\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 canal-adapter \u542f\u52a8\u5668\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd /Canal_Home/adapter && sh bin/startup.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b RDB \u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"tail -f logs/adapter/adapter.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u6570\u636e\u540c\u6b65\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 MySQL \u6e90\u7aef\u5199\u5165\u6570\u636e\uff0c\u5728 OceanBase \u76ee\u6807\u7aef\u67e5\u770b\u6570\u636e\u540c\u6b65\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u9700\u505c\u6b62\u670d\u52a1\u53ef\u6267\u884c\u4e0b\u8ff0\u547d\u4ee4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"cd /Canal_Home/adapter && sh bin/stop.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd\u9650\u5236",children:(0,s.jsx)(e.strong,{children:"\u529f\u80fd\u9650\u5236"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u540c\u6b65\u7684\u8868\u5fc5\u987b\u6709\u4e3b\u952e\u3002\u5426\u5219\uff0c\u6e90\u7aef\u5220\u9664\u65e0\u4e3b\u952e\u8868\u7684\u4efb\u610f\u4e00\u7b14\u8bb0\u5f55\uff0c\u540c\u6b65\u5230\u76ee\u6807\u7aef\u4f1a\u5bfc\u81f4\u6574\u4e2a\u8868\u88ab\u5220\u9664\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"DDL \u652f\u6301\u65b0\u5efa\u8868\u3001\u65b0\u589e\u5217\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>t});var s=a(96540);const l={},c=s.createContext(l);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);