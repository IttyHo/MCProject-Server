exec spGetProjects

select p.ProjectName,p.ProjectCompany,p.ProjectAdress,
pt.ProjectTypeName,e.EntrepreneurName,e.EntrepreneurCompany 
from Projects p 
inner join ProjectType pt
on pt.ProjectTypeId=p.ProjectType
inner join Entrepreneurs e
on e.EntrepreneurId=p.EntrepreneurId