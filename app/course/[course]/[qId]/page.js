import BackButton from "@/app/components/other/BackButton";
import { Question } from "@/app/components/other/Question";

const Page = async ({ params }) => {
    const unwrappedParams = await params;

    return (
        <>
            <Question unwrappedParams={unwrappedParams}/>
            <BackButton/>
        </>
    )
}

export default Page;