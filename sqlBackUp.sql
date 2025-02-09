USE [master]
GO
/****** Object:  Database [MCProject]    Script Date: 29/08/2022 22:01:21 ******/
CREATE DATABASE [MCProject]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MCProject', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MCProject.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MCProject_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MCProject_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MCProject] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MCProject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MCProject] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MCProject] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MCProject] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MCProject] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MCProject] SET ARITHABORT OFF 
GO
ALTER DATABASE [MCProject] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MCProject] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MCProject] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MCProject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MCProject] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MCProject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MCProject] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MCProject] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MCProject] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MCProject] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MCProject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MCProject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MCProject] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MCProject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MCProject] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MCProject] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MCProject] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MCProject] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MCProject] SET  MULTI_USER 
GO
ALTER DATABASE [MCProject] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MCProject] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MCProject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MCProject] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MCProject] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MCProject] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [MCProject] SET QUERY_STORE = OFF
GO
USE [MCProject]
GO
/****** Object:  Table [dbo].[Counselors]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Counselors](
	[CounselorOfficeId] [int] IDENTITY(1,1) NOT NULL,
	[CounselorOfficeName] [nvarchar](50) NOT NULL,
	[CounselorOfficeAdress] [nvarchar](50) NOT NULL,
	[CounselorOfficePhone] [nvarchar](50) NOT NULL,
	[CounselorOfficeType] [int] NOT NULL,
	[CounselorOfficeManager] [nvarchar](50) NOT NULL,
	[CounselorOfficeManagerPhone] [nvarchar](50) NULL,
	[CounselorOfficeManagerMail] [nvarchar](50) NULL,
	[CounselorOfficeMainSecretary] [nvarchar](50) NOT NULL,
	[CounselorOfficeMainSecretaryPhone] [nvarchar](50) NOT NULL,
	[CounselorOfficeMainSecretaryMail] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CounselorsEmployees]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CounselorsEmployees](
	[CounselorName] [nvarchar](50) NOT NULL,
	[CounselorPhone] [nvarchar](50) NOT NULL,
	[CounselorMail] [nvarchar](50) NOT NULL,
	[CounselorOfficeTypeId] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Entrepreneurs]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Entrepreneurs](
	[EntrepreneurId] [int] IDENTITY(1,1) NOT NULL,
	[EntrepreneurCompany] [nvarchar](50) NOT NULL,
	[EntrepreneurName] [nvarchar](50) NOT NULL,
	[EntrepreneurPhone] [nvarchar](50) NOT NULL,
	[EntrepreneurMail] [nvarchar](50) NOT NULL,
	[OfficeAdress] [nvarchar](50) NULL,
	[EntrepreneurSecretary] [nvarchar](50) NOT NULL,
	[EntrepreneurSecretaryPhone] [nvarchar](50) NOT NULL,
	[EntrepreneurSecretaryMail] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OfficeType]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OfficeType](
	[TypeId] [nvarchar](50) NOT NULL,
	[TypeName] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectOffice]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectOffice](
	[ProjectId] [int] NOT NULL,
	[OfficeId] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Projects]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Projects](
	[ProjectId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [nvarchar](50) NOT NULL,
	[ProjectCompany] [nvarchar](50) NOT NULL,
	[ProjectAdress] [nvarchar](50) NULL,
	[ProjectType] [int] NOT NULL,
	[EntrepreneurId] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectType]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectType](
	[ProjectTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectTypeName] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Counselors] ON 

INSERT [dbo].[Counselors] ([CounselorOfficeId], [CounselorOfficeName], [CounselorOfficeAdress], [CounselorOfficePhone], [CounselorOfficeType], [CounselorOfficeManager], [CounselorOfficeManagerPhone], [CounselorOfficeManagerMail], [CounselorOfficeMainSecretary], [CounselorOfficeMainSecretaryPhone], [CounselorOfficeMainSecretaryMail]) VALUES (1, N'MC פרויקטים', N'דב  הוז 2', N'088658615', 1, N'יעקב מלבסקי', N'0548400840', N'jacob@melavsky.co.il', N'יחיאל ניימן', N'0548479187', N'yechiel@OnlineCopy.co.il')
INSERT [dbo].[Counselors] ([CounselorOfficeId], [CounselorOfficeName], [CounselorOfficeAdress], [CounselorOfficePhone], [CounselorOfficeType], [CounselorOfficeManager], [CounselorOfficeManagerPhone], [CounselorOfficeManagerMail], [CounselorOfficeMainSecretary], [CounselorOfficeMainSecretaryPhone], [CounselorOfficeMainSecretaryMail]) VALUES (3, N'אונליין קופי', N'דב הוז 1', N'089958585', 2, N'יצחק זיידמן', N'0527111707', N'ytzchak@onlineCopy.co.il', N'יחיאל ניימן', N'0548479187', N'yechial@onlineCopy.co.il')
INSERT [dbo].[Counselors] ([CounselorOfficeId], [CounselorOfficeName], [CounselorOfficeAdress], [CounselorOfficePhone], [CounselorOfficeType], [CounselorOfficeManager], [CounselorOfficeManagerPhone], [CounselorOfficeManagerMail], [CounselorOfficeMainSecretary], [CounselorOfficeMainSecretaryPhone], [CounselorOfficeMainSecretaryMail]) VALUES (4, N'יצירה בנוף', N'האתרוג 98', N'035707635', 5, N'ליאת טבאשי', N'0528910004', N'liat@tabashi.co.il', N'שפרה הלפרין', N'0527698413', N'shifra@tabashi.co.il')
INSERT [dbo].[Counselors] ([CounselorOfficeId], [CounselorOfficeName], [CounselorOfficeAdress], [CounselorOfficePhone], [CounselorOfficeType], [CounselorOfficeManager], [CounselorOfficeManagerPhone], [CounselorOfficeManagerMail], [CounselorOfficeMainSecretary], [CounselorOfficeMainSecretaryPhone], [CounselorOfficeMainSecretaryMail]) VALUES (5, N'עפרון', N'המלך יהושפט 15', N'088665179', 2, N'דמיטרי שמוקלר', N'0508922177', N'dmitri@iparon.co.il', N'לודמילה', N'0541390222', N'ludmila@iparon.co.il')
SET IDENTITY_INSERT [dbo].[Counselors] OFF
GO
SET IDENTITY_INSERT [dbo].[CounselorsEmployees] ON 

INSERT [dbo].[CounselorsEmployees] ([CounselorName], [CounselorPhone], [CounselorMail], [CounselorOfficeTypeId]) VALUES (N'ליאת טבאשי', N'0545422397', N'hjythder@liat.co.il', 1)
INSERT [dbo].[CounselorsEmployees] ([CounselorName], [CounselorPhone], [CounselorMail], [CounselorOfficeTypeId]) VALUES (N'כדאי בטיחות', N'039651782', N'sdfghjkl@kedai.co.il', 2)
SET IDENTITY_INSERT [dbo].[CounselorsEmployees] OFF
GO
SET IDENTITY_INSERT [dbo].[Entrepreneurs] ON 

INSERT [dbo].[Entrepreneurs] ([EntrepreneurId], [EntrepreneurCompany], [EntrepreneurName], [EntrepreneurPhone], [EntrepreneurMail], [OfficeAdress], [EntrepreneurSecretary], [EntrepreneurSecretaryPhone], [EntrepreneurSecretaryMail]) VALUES (1, N'י.ש.ס פרויקטים', N'יפים', N'0508841788', N'hgd@gmail.com', N'העצמאות 23', N'טליה', N'0524158927', N'talia@gmail.com')
INSERT [dbo].[Entrepreneurs] ([EntrepreneurId], [EntrepreneurCompany], [EntrepreneurName], [EntrepreneurPhone], [EntrepreneurMail], [OfficeAdress], [EntrepreneurSecretary], [EntrepreneurSecretaryPhone], [EntrepreneurSecretaryMail]) VALUES (3, N'רחמני בן נעים', N'קובי בן נעים', N'0547855341', N'kobi@bennaim.co.il', N'ירושלים 15', N'אורית', N'0532144566', N'orit@bennaim.co.il')
SET IDENTITY_INSERT [dbo].[Entrepreneurs] OFF
GO
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'1', N'נגישות')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'2', N'אינסטלציה')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'3', N'מיזוג אויר')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'4', N'חשמל')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'5', N'פיתוח')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'6', N'קונסטרוקציה')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'7', N'תנועה')
INSERT [dbo].[OfficeType] ([TypeId], [TypeName]) VALUES (N'8', N'בטיחות')
GO
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (1, 2)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (2, 1)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (3, 2)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (3, 1)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (2, 3)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (2, 4)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (1, 3)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (1, 9)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (1, 8)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (3, 3)
INSERT [dbo].[ProjectOffice] ([ProjectId], [OfficeId]) VALUES (1, 1)
GO
SET IDENTITY_INSERT [dbo].[Projects] ON 

INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (4, N'חומות רובע ז', N'MC פרויקטים', N'אברהם שפירא 15', 1, 1)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (5, N'מיכקשוילי 15', N'MC רימונים', N'מיכקשוילי 15', 2, 3)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (7, N'הפלמח 25', N'MC רימונים', N'הפלמח 25', 1, 2)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (8, N'aaa', N'bbbb', N'cccc', 1, 1)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (9, N'ראשון', N'חדש', N'אשדוד', 1, 1)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (11, N'project2', N'יוטי', N'איטי', 1, 1)
INSERT [dbo].[Projects] ([ProjectId], [ProjectName], [ProjectCompany], [ProjectAdress], [ProjectType], [EntrepreneurId]) VALUES (10, N'project', N'dfghj', N'yyy', 3, 2)
SET IDENTITY_INSERT [dbo].[Projects] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectType] ON 

INSERT [dbo].[ProjectType] ([ProjectTypeId], [ProjectTypeName]) VALUES (1, N'תב"ע ')
INSERT [dbo].[ProjectType] ([ProjectTypeId], [ProjectTypeName]) VALUES (2, N'תב"ע + אישורים')
SET IDENTITY_INSERT [dbo].[ProjectType] OFF
GO
/****** Object:  StoredProcedure [dbo].[spAddProject]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  [dbo].[spAddProject]  
	( 
	 @ProjectName nvarchar (50),
	 @ProjectCompany  nvarchar (50),
	 @ProjectAdress nvarchar (50),
	 @ProjectType int,
	 @EntrepreneurId int
	 )
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
 INSERT INTO Projects (ProjectName,ProjectCompany,ProjectAdress,ProjectType,EntrepreneurId)
 VALUES (@ProjectName,@ProjectCompany,@ProjectAdress,@ProjectType,@EntrepreneurId)
END
GO
/****** Object:  StoredProcedure [dbo].[spGetCounselorDetaileByOfficeId]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetCounselorDetaileByOfficeId]
@OfficeId int
as
select *
from CounselorsEmployees
where CounselorOfficeTypeId=@OfficeId
GO
/****** Object:  StoredProcedure [dbo].[spGetCounselorOfficeByProjectId]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--try again
create proc [dbo].[spGetCounselorOfficeByProjectId]
@ProjectId int
as 
select *
from ProjectOffice po
inner join Counselors c
on c.CounselorOfficeId=po.OfficeId
where po.ProjectId=@ProjectId
GO
/****** Object:  StoredProcedure [dbo].[spGetCounselors]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[spGetCounselors]
as
select 
c.CounselorOfficeName,c.CounselorOfficeAdress,c.CounselorOfficePhone,ot.TypeName as "CounselorOfficeType",c.CounselorOfficeManager,
c.CounselorOfficeManagerPhone,c.CounselorOfficeManagerMail,c.CounselorOfficeMainSecretary,
c.CounselorOfficeMainSecretaryPhone,c.CounselorOfficeMainSecretaryMail
from Counselors c inner join OfficeType ot
on c.CounselorOfficeType=ot.TypeId
GO
/****** Object:  StoredProcedure [dbo].[spGetCounselorsOfficeByOfficeId]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetCounselorsOfficeByOfficeId]
@OfficeId int
as
select * 
from Counselors
where CounselorOfficeId=@OfficeId
GO
/****** Object:  StoredProcedure [dbo].[spGetEntrepreneurs]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetEntrepreneurs]
as
select * from Entrepreneurs
GO
/****** Object:  StoredProcedure [dbo].[spGetProjectByEntrepreneurId]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetProjectByEntrepreneurId]
@EntrepreneurId int
as
select * from Projects p
inner join Entrepreneurs e
on e.EntrepreneurId=p.EntrepreneurId
where p.EntrepreneurId=@EntrepreneurId
GO
/****** Object:  StoredProcedure [dbo].[spGetProjectByEntrepreneurId2]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetProjectByEntrepreneurId2]
@EntrepreneurId int
as
exec spGetProjectById @id=1000

select * from Projects p
inner join Entrepreneurs e
on e.EntrepreneurId=p.EntrepreneurId
where p.EntrepreneurId=@EntrepreneurId

GO
/****** Object:  StoredProcedure [dbo].[spGetProjectById]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spGetProjectById]
@id int
as
select * from Projects p
inner join ProjectType pt
on pt.ProjectTypeId=p.ProjectType
where p.ProjectId=@id
GO
/****** Object:  StoredProcedure [dbo].[spGetProjects]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spGetProjects]
AS
BEGIN
select p.ProjectName,p.ProjectCompany,p.ProjectAdress,
pt.ProjectTypeName,e.EntrepreneurName,e.EntrepreneurCompany 
from Projects p 
full outer join ProjectType pt
on pt.ProjectTypeId=p.ProjectType
full outer join Entrepreneurs e
on e.EntrepreneurId=p.EntrepreneurId
END
GO
/****** Object:  StoredProcedure [dbo].[spTry]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spTry]
@ProjectId int
as 
select *
from ProjectOffice
where ProjectId=@ProjectId
GO
/****** Object:  StoredProcedure [dbo].[spTry1]    Script Date: 29/08/2022 22:01:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spTry1]
@ProjectId int
as 
select *
from ProjectOffice po
inner join Counselors c
on c.CounselorOfficeId=po.OfficeId
where po.ProjectId=@ProjectId
GO
USE [master]
GO
ALTER DATABASE [MCProject] SET  READ_WRITE 
GO
