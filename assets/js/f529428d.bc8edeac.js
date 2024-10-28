"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2321],{62888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=s(74848),a=s(28453);const o={title:"Deploy OceanBase Database in a production environment",weight:5},r="2.4 Deploy OceanBase Database in a production environment",i={id:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/deploy-production-environment",title:"Deploy OceanBase Database in a production environment",description:"High availability deployment solutions",source:"@site/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/04_deploy-production-environment.md",sourceDirName:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database",slug:"/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/deploy-production-environment",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/deploy-production-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/04_deploy-production-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Deploy OceanBase Database in a production environment",weight:5},sidebar:"quick_starts_and_hands_on_practices_in_englishSidebar",previous:{title:"Deploy OceanBase Database in an experience environment",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/deploy_personal_environment"},next:{title:"View the resource usage of an OceanBase cluster",permalink:"/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/view-resources"}},c={},d=[{value:"High availability deployment solutions",id:"high-availability-deployment-solutions",level:2},{value:"Plan the deployment of an OceanBase cluster",id:"plan-the-deployment-of-an-oceanbase-cluster",level:2},{value:"Deploy an OceanBase cluster by using OCP",id:"deploy-an-oceanbase-cluster-by-using-ocp",level:2},{value:"Install OCP",id:"install-ocp",level:3},{value:"Deploy an OceanBase cluster by using OCP",id:"deploy-an-oceanbase-cluster-by-using-ocp-1",level:3},{value:"Deploy an OceanBase cluster by using OBD",id:"deploy-an-oceanbase-cluster-by-using-obd",level:2},{value:"Install OBD",id:"install-obd",level:3},{value:"Deploy an OceanBase cluster by using OBD",id:"deploy-an-oceanbase-cluster-by-using-obd-1",level:3},{value:"Common OBD commands",id:"common-obd-commands",level:3},{value:"Deploy an OceanBase cluster by using ob-operator",id:"deploy-an-oceanbase-cluster-by-using-ob-operator",level:2},{value:"Prerequisites for deployment in a production environment",id:"prerequisites-for-deployment-in-a-production-environment",level:3},{value:"Deployment requirements",id:"deployment-requirements",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"24-deploy-oceanbase-database-in-a-production-environment",children:"2.4 Deploy OceanBase Database in a production environment"})}),"\n",(0,t.jsx)(n.h2,{id:"high-availability-deployment-solutions",children:"High availability deployment solutions"}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database Community Edition uses a shared-nothing architecture with multiple replicas to ensure zero single point of failure (SPOF) and system continuity. It supports high availability and disaster recovery at the node, Internet data center (IDC), and region levels. You can deploy OceanBase Database Community Edition in a single IDC, two IDCs in the same region, three IDCs across two regions, or five IDCs across three regions."}),"\n",(0,t.jsxs)(n.p,{children:["At present, OceanBase Database provides seven high availability deployment solutions, the following four of which are supported by the Community Edition. For more information about the high availability solutions, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103376",children:"HA deployment solutions for OceanBase clusters"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Three replicas in three IDCs in the same region"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Five replicas in five IDCs across three regions"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Primary/Standby deployment of two IDCs in the same region"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Primary/Standby deployment of three IDCs across two regions"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In OceanBase Database V4.1.0 and later, the Physical Standby Database solution is provided in the form of primary/standby tenants. Clusters are no longer assigned the primary or standby role and are only containers of primary and standby tenants. For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103965",children:"Overview"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database Community Edition does not support the arbitration service. Therefore, you cannot use high availability deployment solutions related to the arbitration service."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"plan-the-deployment-of-an-oceanbase-cluster",children:"Plan the deployment of an OceanBase cluster"}),"\n",(0,t.jsx)(n.p,{children:"For the requirements for deployment in a production environment, see '2.1 Preparations before deployment'. This section describes how to plan the deployment of an OceanBase cluster."}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database runs as a cluster. In a production environment, an OceanBase cluster contains at least three servers (nodes). In other words, the business data in the cluster is available in three replicas, so the cluster is also referred to as a three-replica cluster."}),"\n",(0,t.jsxs)(n.p,{children:["In a production environment, an ",(0,t.jsx)(n.code,{children:"observer"})," process runs on each server, with each server representing a node. By default, the ",(0,t.jsx)(n.code,{children:"observer"})," process on each node listens on ports ",(0,t.jsx)(n.code,{children:"2881"})," and ",(0,t.jsx)(n.code,{children:"2882"}),". The data directory and transaction log directory are deployed on separate disks for each node. The minimum memory required to start the ",(0,t.jsx)(n.code,{children:"observer"})," process is 6 GB per node. However, in a production environment, at least 16 GB of memory is required, with 32 GB recommended for optimal performance."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.p,{children:["In this context, the minimum memory refers to the remaining memory shown in the ",(0,t.jsx)(n.code,{children:"free"})," column of the ",(0,t.jsx)(n.code,{children:"free -g"})," command output, not the total server memory listed in the ",(0,t.jsx)(n.code,{children:"total"})," column."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After you deploy OceanBase Database, you need to deploy OceanBase Database Proxy (ODP), also known as OBProxy. ODP is also a single-process software solution and a reverse proxy used to access OceanBase Database. You can directly access OBServer nodes. However, we recommend that you access the OceanBase cluster through ODP."}),"\n",(0,t.jsx)(n.p,{children:"You can deploy ODP on the application server, an independent server, or an OBServer node. You can deploy multiple ODPs. We recommend that you deploy at least two ODPs in a production environment."}),"\n",(0,t.jsx)(n.h2,{id:"deploy-an-oceanbase-cluster-by-using-ocp",children:"Deploy an OceanBase cluster by using OCP"}),"\n",(0,t.jsx)(n.p,{children:"The following table describes the architecture of a common OceanBase cluster deployed by using OceanBase Cloud Platform (OCP)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Four-node environment"}),(0,t.jsx)(n.th,{children:"Deployed components"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node A"}),(0,t.jsx)(n.td,{children:"OCP and MetaDB"}),(0,t.jsx)(n.td,{children:"Serves as the node shared by OCP and MetaDB. We recommend that you do not mix MetaDB with the business cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node B"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OCP-Agent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OCP-Agent service node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node C"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OCP-Agent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OCP-Agent service node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node D"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OCP-Agent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OCP-Agent service node."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Why is OCP recommended for deploying and managing an OceanBase cluster?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enterprise-grade cluster management"}),"\n",(0,t.jsx)(n.p,{children:"OCP is an enterprise-grade management platform designed for OceanBase Database. It provides comprehensive cluster management features, such as installation, O&M, performance monitoring, configuration, upgrade, deletion, and full-lifecycle host and tenant management. It can help you improve the O&M efficiency and reduce the IT costs."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tenant and resource management"}),"\n",(0,t.jsx)(n.p,{children:"OCP provides comprehensive management features for OceanBase Database tenants, including creation, topology display, performance monitoring, session management, and parameter management. It also enables resource management for OceanBase Database, covering hosts, networks, and software packages, to ensure efficient resource utilization and optimization."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monitoring and alerting"}),"\n",(0,t.jsx)(n.p,{children:"OCP implements a multidimensional monitoring and alerting mechanism, which comprises the real-time monitoring and custom alerting strategies for clusters, tenants, and hosts to help detect and handle potential issues in a timely manner."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Automatic O&M"}),"\n",(0,t.jsx)(n.p,{children:"You can use OCP to install, upgrade, scale out, and uninstall OceanBase clusters with a few clicks. This simplifies the O&M process and reduces human errors."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enhanced security"}),"\n",(0,t.jsx)(n.p,{children:"OCP provides user management and role management features for fine-grained control of database access permissions. It also supports the management of personal settings, passwords, and alert subscription."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"GUI and user experience"}),"\n",(0,t.jsx)(n.p,{children:"OCP is built based on an object-oriented architecture to provide clear feature modules and smooth operation paths. It visually displays the topologies of clusters and tenants, along with resource usage information, enabling O&M personnel to efficiently manage database clusters in an intuitive manner."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cluster takeover"}),"\n",(0,t.jsx)(n.p,{children:"OCP can take over clusters deployed by using OceanBase Deployer (OBD), OBShell, or OCP."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, OCP can significantly improve the cluster management and O&M efficiency for OceanBase Database, ensuring system stability and security to better support business growth."}),"\n",(0,t.jsx)(n.h3,{id:"install-ocp",children:"Install OCP"}),"\n",(0,t.jsx)(n.p,{children:"Before installing OCP, you need to understand the following key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What is MetaDB?"}),"\n",(0,t.jsx)(n.p,{children:"MetaDB is a database dedicated to the storage of OCP metadata and monitoring data. At present, only OceanBase Database can serve as the MetaDB. You can deploy OceanBase Database to be serve as the MetaDB in standalone or cluster mode. You can deploy it on the same server as OCP or separately."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsx)(n.p,{children:"We recommend that you do not use MetaDB as a business database in a production environment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are MetaDB meta tenants?"}),"\n",(0,t.jsxs)(n.p,{children:["MetaDB meta tenants include the ",(0,t.jsx)(n.code,{children:"ocp_meta"})," tenant for metadata management and the ",(0,t.jsx)(n.code,{children:"ocp_monitor"})," tenant for monitoring data management. You can define the tenant names."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.p,{children:["It is prohibited to use two different users in the same tenant to replace the ",(0,t.jsx)(n.code,{children:"ocp_meta"})," tenant and ",(0,t.jsx)(n.code,{children:"ocp_monitor"})," tenant. In other words, the ",(0,t.jsx)(n.code,{children:"ocp_meta"})," tenant and ",(0,t.jsx)(n.code,{children:"ocp_monitor"})," tenant must be two different tenants."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"How to implement OCP high availability?"}),"\n",(0,t.jsx)(n.p,{children:"To implement OCP high availability, you need to implement high availability for both the OCP service and the MetaDB. Specifically, you must deploy the OCP service on at least two nodes and the MetaDB on at least three nodes. Generally, you can use three servers to deploy a three-node OCP cluster and a three-node MetaDB cluster to implement OCP high availability."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are the resource requirements for an OCP server?"}),"\n",(0,t.jsxs)(n.p,{children:["Assume that no more than 10 OBServer nodes are managed in OCP. If the MetaDB and OCP are deployed on the same server, the physical server requires 17 CPU cores and 60 GB of memory. For more information about the resource requirements, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001484440",children:"Host planning"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Module"}),(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{children:"Memory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OCP-Server"}),(0,t.jsx)(n.td,{children:"4 cores"}),(0,t.jsx)(n.td,{children:"8 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sys tenant of MetaDB"}),(0,t.jsx)(n.td,{children:"5 cores"}),(0,t.jsx)(n.td,{children:"28 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"ocp_meta"})," tenant of MetaDB"]}),(0,t.jsx)(n.td,{children:"4 cores"}),(0,t.jsx)(n.td,{children:"8 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"ocp_monitor"})," tenant of MetaDB"]}),(0,t.jsx)(n.td,{children:"4 cores"}),(0,t.jsx)(n.td,{children:"16 GB"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsx)(n.p,{children:"For other resource requirements for MetaDB deployment, see the deployment requirements of OceanBase Database."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend that you deploy OCP of the latest version on the GUI. For the deployment process, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483897",children:"Installation process"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-an-oceanbase-cluster-by-using-ocp-1",children:"Deploy an OceanBase cluster by using OCP"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying an OceanBase cluster by using OCP, you need to understand the following key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Which software packages need to be uploaded for the deployment?"}),"\n",(0,t.jsxs)(n.p,{children:["Log on to the OCP console, choose ",(0,t.jsx)(n.strong,{children:"System Management"})," > ",(0,t.jsx)(n.strong,{children:"Packages"}),", and check whether the installation packages listed in the following table are present. The absence of any of these installation packages will cause the cluster deployment process to fail."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Package name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OCP-Agent"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"ocp-agent-ce-*.x86_64.rpm"}),(0,t.jsx)("li",{children:"ocp-agent-ce-*.aarch64.rpm"})]})}),(0,t.jsx)(n.td,{children:"The package for deploying OCP-Agent, which is automatically uploaded after OCP is deployed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OceanBase"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"oceanbase-ce-*.rpm"}),(0,t.jsx)("li",{children:"oceanbase-ce-libs-*.rpm"}),(0,t.jsx)("li",{children:"oceanbase-ce-utils-*.rpm"})]})}),(0,t.jsxs)(n.td,{children:["The packages for deploying the following components respectively: ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"OceanBase Database"}),(0,t.jsx)("li",{children:"OceanBase libraries"}),(0,t.jsx)("li",{children:"OceanBase utilities"})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ODP"}),(0,t.jsx)(n.td,{children:"obproxy-ce-*.rpm"}),(0,t.jsx)(n.td,{children:"The package for deploying ODP."})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are the considerations for adding a host?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Disable the firewall and SELinux on the host node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use a static IP address for the host node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Synchronize the clock source of the host node with that of the OCP node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the credential user for the host node in advance."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that the deployment (credential) user of the host node has ",(0,t.jsx)(n.code,{children:"sudo"})," permissions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that the deployment (credential) user of the host node and OCP node has the permission to run the ",(0,t.jsx)(n.code,{children:"clockdiff"})," command. If this user does not have the required permission, you can run the ",(0,t.jsx)(n.code,{children:"setcap cap_net_raw+ep /usr/sbin/clockdiff"})," command as the ",(0,t.jsx)(n.code,{children:"root"})," user to grant the permission."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are the considerations for creating a cluster?"}),"\n",(0,t.jsxs)(n.p,{children:["To customize system parameters, such as the number of system log files to retain and the size of preallocated disk space, see the ",(0,t.jsx)(n.strong,{children:"Common resource parameters of OceanBase Database and their calculation methods"})," section in '2.1 Preparations before deployment'."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are the considerations after deployment?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a user tenant for business. The default tenant ",(0,t.jsx)(n.code,{children:"sys"})," has a few resources and is used only for cluster management."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy an ODP cluster. We recommend that you deploy an ODP cluster that comprises at least two nodes. If the business volume is large, we recommend that you deploy the ODP cluster on dedicated servers."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about how to deploy an OceanBase cluster, create a user tenant, and deploy an ODP cluster, see topics under ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483664",children:"Quick Start"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-an-oceanbase-cluster-by-using-obd",children:"Deploy an OceanBase cluster by using OBD"}),"\n",(0,t.jsx)(n.p,{children:"OBD supports the deployment and management of multiple ecosystem components of OceanBase Database, and will incorporate more ecosystem components in later versions. Apart from GUI-based deployment to simplify automatic deployment, OBD provides general O&M capabilities such as package manager, stress test software, and cluster management."}),"\n",(0,t.jsx)(n.p,{children:"The following table describes the architecture of a common OceanBase cluster deployed by using OBD."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Four-node environment"}),(0,t.jsx)(n.th,{children:"Deployed components"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node A"}),(0,t.jsx)(n.td,{children:"OBD and OCP Express"}),(0,t.jsx)(n.td,{children:"Serves as the central control node for OBD deployment management, O&M, and monitoring services. OCP Express does not have an independent MetaDB. An OCP Express meta tenant will be created in the business cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node B"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OBAgent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OBAgent service node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node C"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OBAgent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OBAgent service node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node D"}),(0,t.jsx)(n.td,{children:"OceanBase Database, ODP, and OBAgent"}),(0,t.jsx)(n.td,{children:"Serves as an OBServer node, an ODP service node, and an OBAgent service node."})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"The central control node of OBD does not have high requirements for the server configurations. We recommend that you configure at least four CPU cores and 8 GB of memory for it."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-obd",children:"Install OBD"}),"\n",(0,t.jsx)(n.p,{children:"Apart from running a script to use the all-in-one package for quick OBD deployment, you can also use an RPM package for local deployment or configure a YUM repository for online deployment."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181584",children:"Install and configure OBD"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-an-oceanbase-cluster-by-using-obd-1",children:"Deploy an OceanBase cluster by using OBD"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying an OceanBase cluster by using OBD, you need to understand the following key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When do you need to choose OCP Express?"}),"\n",(0,t.jsx)(n.p,{children:"OCP Express is the lightweight edition of OCP and applies to development environments, test environments, and small- and medium-scale production environments, such as a standalone or three-node OceanBase cluster. At present, OCP Express does not support the core cluster O&M and management features, such as deployment, upgrade, scaling, backup and restore, and monitoring and alerting."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What are the considerations for deploying a cluster by using OBD?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["OBD remotely performs installation and deployment by using the Secure Shell (SSH) protocol. The OCP Express service relies on ",(0,t.jsx)(n.code,{children:"java-1.8.0-openjdk"}),". Therefore, you must use SSH to verify whether the Java environment is available."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the node where OBD resides cannot connect to the Internet, download the desired installation packages in advance, run the ",(0,t.jsx)(n.code,{children:"obd mirror clone *.rpm"})," command to add the packages to the local repository of OBD, and run the ",(0,t.jsx)(n.code,{children:"obd mirror disable remote"})," command to disable all remote repositories."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For the deployment procedure, visit the following links based on the deployment method:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GUI-based deployment: See ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181583",children:"Deploy an OceanBase cluster on the GUI"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["CLI-based deployment: See ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001104023",children:"Deploy OceanBase Database in a production environment by using the CLI"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["If an error is returned when you deploy a cluster by using OBD, you can find the solution by referring to ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181558",children:"Error codes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"common-obd-commands",children:"Common OBD commands"}),"\n",(0,t.jsx)(n.p,{children:"OBD provides a wide range of commands, including the quick deployment command, cluster commands, mirror and repository commands, testing commands, tool commands, and obdiag commands. Here are some common OBD commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# View the repository list.\nobd mirror list\n\n# Disable remote repositories.\nobd mirror disable remote\n\n# Enable remote repositories.\nobd mirror enable remote\n\n# View the list of deployed services.\nobd cluster list\n\n# View the details of a deployed service.\nobd cluster display <deploy name>\n\n# Specify the configuration file for installing a service.\nobd cluster deploy <deploy name> -c <deploy file>\n\n# Destroy a deployed service. This operation is highly risky and will clear all data of the service.\nobd cluster destroy <deploy name>\n\n# Edit or view the deployment configuration file.\nobd cluster edit-config <deploy name>\n\n# Start, stop, or restart a service.\nobd cluster start/stop/restart <deploy name>\n\n# Start, stop, or restart a service module. You can run the obd cluster edit-config command to view the module name.\nobd cluster start/stop/restart <deploy name> -c <component name>\n\n# Start, stop, or restart the specified nodes of a service module. You can run the obd cluster edit-config command to view the module name and node IP addresses.\nobd cluster start/stop/restart <deploy name> -c <component name> -s IP1,IP2\n\n# Reload the configurations of a service. After you run the obd cluster edit-config command to modify the configurations, the CLI will prompt you to run this command to reload them.\nobd cluster reload <deploy name>\n\n# Create a standalone OceanBase cluster with the minimum specifications of two CPU cores and 6 GB of memory.\nobd demo\n\n# Deploy a service with the specified service name and ports in a demon environment.\nobd demo -c oceanbase-ce --oceanbase-ce.mysql_port=3881 --oceanbase-ce.rpc_port=3882\n\n# Create a user tenant to make full use of the remaining resources.\nobd cluster tenant create <deploy name> -n <tenant name>\n\n# Run a performance test. At present, you can run the mysqltest test, Sysbench benchmark, TPC-H benchmark, and TPC-C benchmark.\nobd test mysqltest/sysbench/tpch/tpcc\n\n# Use obdiag to inspect an OceanBase cluster.\nobd obdiag check --cases=<deploy name>\n\n# Collect the diagnostic information of the specified OceanBase cluster.\nobd obdiag gather all <deploy name>\n\n# Analyze the system logs in the specified period of the specified OceanBase cluster.\nobd obdiag analyze log <deploy name> --from 2024-02-06 18:00:00 --to 2024-02-06 18:10:00\n\n# Analyze the trace logs of the specified OceanBase cluster for end-to-end diagnostics.\nobd obdiag analyze flt_trace <deploy name>\n\n# Perform root cause analysis in the following scenarios: ODP disconnection, holding of a cluster major compaction, and lock conflict.\nobd obdiag rca --scene=disconnection/major_hold/lock_conflict\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information about OBD commands, see topics under ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181577",children:"OBD Command"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-an-oceanbase-cluster-by-using-ob-operator",children:"Deploy an OceanBase cluster by using ob-operator"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites-for-deployment-in-a-production-environment",children:"Prerequisites for deployment in a production environment"}),"\n",(0,t.jsx)(n.p,{children:"Make sure that the following conditions are met:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You have an available Kubernetes cluster with at least nine CPUs, 33 GB of memory, and 360 GB storage space."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You have installed cert-manager in the Kubernetes cluster. For more information about how to install cert-manager, see ",(0,t.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/",children:"Installation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Your Kubernetes cluster has at least one available storage class. If no storage class is available, you can install local-path-provisioner and make sure that the specified destination has sufficient storage space. It will provide the ",(0,t.jsx)(n.code,{children:"local-path"})," storage class and use the local storage on cluster nodes. For more information about how to install local-path-provisioner, see ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/local-path-provisioner",children:"Installation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You have deployed ob-operator. For the deployment procedure, see ",(0,t.jsx)(n.a,{href:"https://oceanbase.github.io/ob-operator/docs/manual/deploy-ob-operator",children:"Deploy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deployment-requirements",children:"Deployment requirements"}),"\n",(0,t.jsx)(n.p,{children:"The following table describes the requirements for deployment by using ob-operator."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service"}),(0,t.jsx)(n.th,{children:"Requirement"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ob-operator"}),(0,t.jsx)(n.td,{children:"ob-operator V2.x is required."}),(0,t.jsx)(n.td,{children:"We recommend that you use ob-operator of the latest version for more complete features."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OceanBase Database"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"The OceanBase Database version must be V4.0.0 or later. A Long-Term Support (LTS) version, such as V4.2.1, is recommended. "}),(0,t.jsx)("li",{children:"We recommend that you deploy a three-node cluster and configure physical server resources as recommended. "})]})}),(0,t.jsx)(n.td,{children:"If OceanBase Database requires 16 CPU cores and 32 GB of memory, the minimum resource configurations for the container are 16 CPU cores and 36 GB of memory. By default, 90% of the memory is allocated to OceanBase Database."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kubernetes"}),(0,t.jsx)(n.td,{children:"ob-operator has been adapted to the Calico network plug-in. To ensure that each node in a normal cluster has a unique pod IP address, use Calico as the network plug-in of Kubernetes."}),(0,t.jsx)(n.td,{children:"ob-operator supports pod affinity settings. We recommend that you use nodeSelector to distribute the OBServer nodes to different hosts."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For information about how to deploy OceanBase Database by using ob-operator, see ",(0,t.jsx)(n.a,{href:"https://oceanbase.github.io/ob-operator/docs/manual/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",children:"Create a cluster"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);