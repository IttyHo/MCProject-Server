exec spGetEntrepreneurs --יזם
exec spGetProjectByEntrepreneurId @EntrepreneurId=1
exec spGetProjects
exec spGetProjectById @id=4
exec spGetCounselors -- יועץ
exec spGetCounselorDetaileByOfficeId @OfficeId=2
exec spGetCounselorsOfficeByOfficeId @OfficeId=3
exec spGetCounselorOfficeByProjectId @ProjectId=2
exec spGetProjectByEntrepreneurId @EntrepreneurId=1

select * from CounselorsEmployees
select 
c.CounselorOfficeName,c.CounselorOfficeAdress,c.CounselorOfficePhone,ot.TypeName as "CounselorOfficeType",c.CounselorOfficeManager,
c.CounselorOfficeManagerPhone,c.CounselorOfficeManagerMail,c.CounselorOfficeMainSecretary,
c.CounselorOfficeMainSecretaryPhone,c.CounselorOfficeMainSecretaryMail
from Counselors c inner join OfficeType ot
on c.CounselorOfficeType=ot.TypeId

select * from OfficeType