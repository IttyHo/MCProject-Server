USE [MCProject]
GO
/****** Object:  StoredProcedure [dbo].[spGetProjects]    Script Date: 28/08/2022 21:45:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetProjects]
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
