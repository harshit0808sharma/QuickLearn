import BackButton from "@/app/components/other/BackButton";
import { Question } from "@/app/components/other/Question";

const page = async ({ params }) => {
    const unwrappedParams = await params;

    return (
        <>
            <Question unwrappedParams={unwrappedParams}/>
            <BackButton/>
        </>
    )
}

export default page;