import VideoCard from "@/app/components/aboutcomponents/VideoCard";
import BackButton from "@/app/components/other/BackButton";

export default async function page({params}){
    const unwrappedParams = await params;
    return(
        <>
        <div className="w-full h-screen flex justify-center items-center bg-gray-900">
            <VideoCard unwrappedParams={unwrappedParams}/>
            <BackButton/>
        </div>
        </>
    )
}