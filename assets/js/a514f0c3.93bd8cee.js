"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6130],{13103:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(74848),i=s(28453);const a={title:"Compatibility between OceanBase Database and MySQL",weight:2},r="4.1 Compatibility between OceanBase Database and MySQL",d={id:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/compatibility_introduction",title:"Compatibility between OceanBase Database and MySQL",description:"To migrate or synchronize data between heterogeneous databases, you need to first learn about the compatibility between these databases in terms of, for example, data types, character sets, collations, and indexes. Data migration or synchronization between incompatible databases will inevitably fail. That is why you need to grasp features and characteristics of source databases, and check whether they are compatible with destination databases before migration, and if not, whether other better alternatives are available. This topic describes the compatibility between OceanBase Database V4.2.1 and MySQL 8.x. You can check the compatibility between OceanBase Database and other databases by referring to this topic.",source:"@site/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/01_compatibility_introduction.md",sourceDirName:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase",slug:"/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/compatibility_introduction",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/compatibility_introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/01_compatibility_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Compatibility between OceanBase Database and MySQL",weight:2},sidebar:"quick_starts_and_hands_on_practices_in_englishSidebar",previous:{title:"Introduction",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/introduction"},next:{title:"Ecosystem components for data migration and synchronization",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/ecological_tools_of_migration_synchronization"}},c={},o=[{value:"Data types",id:"data-types",level:2},{value:"Length comparison of string types",id:"length-comparison-of-string-types",level:2},{value:"PL features",id:"pl-features",level:2},{value:"System views",id:"system-views",level:2},{value:"Character sets and collations",id:"character-sets-and-collations",level:2},{value:"Indexes",id:"indexes",level:2},{value:"SQL_MODE",id:"sql_mode",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Backup and restore",id:"backup-and-restore",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"41-compatibility-between-oceanbase-database-and-mysql",children:"4.1 Compatibility between OceanBase Database and MySQL"})}),"\n",(0,t.jsx)(n.p,{children:"To migrate or synchronize data between heterogeneous databases, you need to first learn about the compatibility between these databases in terms of, for example, data types, character sets, collations, and indexes. Data migration or synchronization between incompatible databases will inevitably fail. That is why you need to grasp features and characteristics of source databases, and check whether they are compatible with destination databases before migration, and if not, whether other better alternatives are available. This topic describes the compatibility between OceanBase Database V4.2.1 and MySQL 8.x. You can check the compatibility between OceanBase Database and other databases by referring to this topic."}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database in MySQL mode is compatible with most features and statements of MySQL 5.7 or 8.0. In this topic, differences between OceanBase Database in MySQL mode and native MySQL are described in the following aspects: data types, strings, procedural language (PL) features, system views, character sets, collations, indexes, SQL_MODE, partitions, and backup and restore."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["For information about compatibility between OceanBase Database of other versions and MySQL, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103402",children:"Compatibility with MySQL"})," in OceanBase Database documentation of the target versions."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-types",children:"Data types"}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database supports all data types of MySQL except the ",(0,t.jsx)(n.code,{children:"SERIAL"})," type."]}),"\n",(0,t.jsx)(n.h2,{id:"length-comparison-of-string-types",children:"Length comparison of string types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"MySQL 8.0"}),(0,t.jsx)(n.th,{children:"OceanBase Database V4.2.1"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CHAR"}),(0,t.jsx)(n.td,{children:"255 characters"}),(0,t.jsx)(n.td,{children:"256 characters"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VARCHAR"}),(0,t.jsx)(n.td,{children:"65,535 characters (around 16,383 characters in fact)"}),(0,t.jsx)(n.td,{children:"262,144 characters"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BINARY"}),(0,t.jsx)(n.td,{children:"255 bytes"}),(0,t.jsx)(n.td,{children:"256 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VARBINARY"}),(0,t.jsx)(n.td,{children:"65,535 bytes (around 65,532 characters in fact)"}),(0,t.jsx)(n.td,{children:"1,048,576 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TINYBLOB"}),(0,t.jsx)(n.td,{children:"255 bytes"}),(0,t.jsx)(n.td,{children:"255 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BLOB"}),(0,t.jsx)(n.td,{children:"65,535 bytes"}),(0,t.jsx)(n.td,{children:"65,536 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MEDIUMBLOB"}),(0,t.jsx)(n.td,{children:"16,777,215 bytes"}),(0,t.jsx)(n.td,{children:"16,777,216 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LONGBLOB"}),(0,t.jsx)(n.td,{children:"4,294,967,295 bytes (4 GB)"}),(0,t.jsx)(n.td,{children:"536,870,911 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TINYTEXT"}),(0,t.jsx)(n.td,{children:"255 bytes"}),(0,t.jsx)(n.td,{children:"255 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TEXT"}),(0,t.jsx)(n.td,{children:"65,535 bytes"}),(0,t.jsx)(n.td,{children:"65,536 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MEDIUMTEXT"}),(0,t.jsx)(n.td,{children:"16,777,215 bytes"}),(0,t.jsx)(n.td,{children:"6,777,216 bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LONGTEXT"}),(0,t.jsx)(n.td,{children:"4,294,967,295 bytes (4 GB)"}),(0,t.jsx)(n.td,{children:"536,870,911 bytes"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"pl-features",children:"PL features"}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database Community Edition is compatible with most PL features of MySQL. For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001104171",children:"PL reference"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database supports the following PL features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data types"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stored procedures"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Custom functions"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Triggers"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exception handling"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database also provides particular MySQL PL packages, such as ",(0,t.jsx)(n.code,{children:"DBMS_RESOURCE_MANAGER"}),", ",(0,t.jsx)(n.code,{children:"DBMS_STATS"}),", ",(0,t.jsx)(n.code,{children:"DBMS_UDR"}),", ",(0,t.jsx)(n.code,{children:"DBMS_XPLAN"})," and ",(0,t.jsx)(n.code,{children:"DBMS_WORKLOAD_REPOSITORY"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"system-views",children:"System views"}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database implements most views of two internal databases: ",(0,t.jsx)(n.code,{children:"information_schema"})," and ",(0,t.jsx)(n.code,{children:"mysql"}),". However, due to the differences from MySQL in architecture, OceanBase Database cannot implement all the views of MySQL or ensure consistency with MySQL in definitions of all columns in the views."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about the columns in system views, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103435",children:"Overview"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"character-sets-and-collations",children:"Character sets and collations"}),"\n",(0,t.jsx)(n.p,{children:"This section describes only the character sets and collations supported by OceanBase Database Community Edition V4.2.1."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.p,{children:["The supported character sets and collations may vary in different versions. If you use OceanBase Database Community Edition of a version other than V4.2.1, run the ",(0,t.jsx)(n.code,{children:"show charset"})," and ",(0,t.jsx)(n.code,{children:"show collation"})," commands to view the supported character sets and collations."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following table describes the character sets and collations supported by OceanBase Database Community Edition."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Character set"}),(0,t.jsx)(n.th,{children:"Collation"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"utf8mb4"}),(0,t.jsx)(n.td,{children:"utf8mb4_general_ci"}),(0,t.jsx)(n.td,{children:"A general collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"utf8mb4"}),(0,t.jsx)(n.td,{children:"utf8mb4_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"binary"}),(0,t.jsx)(n.td,{children:"binary"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gbk"}),(0,t.jsx)(n.td,{children:"gbk_chinese_ci"}),(0,t.jsx)(n.td,{children:"A collation for Chinese."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gbk"}),(0,t.jsx)(n.td,{children:"gbk_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"utf16"}),(0,t.jsx)(n.td,{children:"utf16_general_ci"}),(0,t.jsx)(n.td,{children:"A general collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"utf16"}),(0,t.jsx)(n.td,{children:"utf16_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030"}),(0,t.jsx)(n.td,{children:"gb18030_chinese_ci"}),(0,t.jsx)(n.td,{children:"A collation for Chinese."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030"}),(0,t.jsx)(n.td,{children:"gb18030_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"latin1"}),(0,t.jsx)(n.td,{children:"latin1_swedish_ci"}),(0,t.jsx)(n.td,{children:"A collation for Swedish/Finnish."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"latin1"}),(0,t.jsx)(n.td,{children:"latin1_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_bin"}),(0,t.jsx)(n.td,{children:"A binary collation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_chinese_ci"}),(0,t.jsx)(n.td,{children:"A Pinyin collation for Chinese. The collation is case-insensitive. This is the default collation for this character set in MySQL mode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_chinese_cs"}),(0,t.jsx)(n.td,{children:"A Pinyin collation for Chinese. The collation is case-sensitive."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_radical_ci"}),(0,t.jsx)(n.td,{children:"A radical stroke collation for Chinese. The collation is case-insensitive."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_radical_cs"}),(0,t.jsx)(n.td,{children:"A radical stroke collation for Chinese. The collation is case-sensitive."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_stroke_ci"}),(0,t.jsx)(n.td,{children:"A stroke collation for Chinese. The collation is case-insensitive."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gb18030_2022"}),(0,t.jsx)(n.td,{children:"gb18030_2022_stroke_cs"}),(0,t.jsx)(n.td,{children:"A stroke collation for Chinese. The collation is case-sensitive."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about character sets and collations, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001106903",children:"Character set and collation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"indexes",children:"Indexes"}),"\n",(0,t.jsx)(n.p,{children:"The following table describes index types that are supported in MySQL but not in OceanBase Database."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Index type"}),(0,t.jsx)(n.th,{children:"Index data structure"}),(0,t.jsx)(n.th,{children:"MySQL"}),(0,t.jsx)(n.th,{children:"OceanBase Database"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Index extension"}),(0,t.jsx)(n.td,{children:"B-tree"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Descending index"}),(0,t.jsx)(n.td,{children:"B-tree"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Full-text index"}),(0,t.jsx)(n.td,{children:"B-tree"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HASH index"}),(0,t.jsx)(n.td,{children:"B-tree"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LOCK option"}),(0,t.jsx)(n.td,{children:"/"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Index merge"}),(0,t.jsx)(n.td,{children:"B-tree"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about indexes, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001106626",children:"Indexes"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"sql_mode",children:"SQL_MODE"}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database V4.2.1 supports all SQL_MODE values that are supported by MySQL. For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001105329",children:"sql_mode"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"partitions",children:"Partitions"}),"\n",(0,t.jsx)(n.p,{children:"The partition support feature of OceanBase Database is different from that of MySQL."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"OceanBase Database supports partitioning, template-based subpartitioning, and non-template-based subpartitioning. MySQL does not support non-template-based subpartitioning."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"OceanBase Database supports the following subpartitioning methods: HASH, KEY, RANGE, RANGE COLUMNS, LIST, and LIST COLUMNS. MySQL supports only HASH and KEY subpartitioning."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001105785",children:"Create and manage partitions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"backup-and-restore",children:"Backup and restore"}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database is compatible with some backup and restore features of MySQL. For example, OceanBase Database supports the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Full backup and incremental backup."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hot backup."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Table-level restore."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database does not support the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cluster-level backup or restore."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cold backup."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Validation of backup data."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Backup or restore for some databases within tenants."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);