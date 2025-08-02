import Member from "@/app/components/aboutcomponents/Member";
import BackButton from "@/app/components/other/BackButton";



export default async function SingleTeamMember({params}) {
  const unwrappedParams = await params;

  return (
    <>
        <Member unwrappedParams={unwrappedParams}/>
        <BackButton/>
    </>
  );
}
