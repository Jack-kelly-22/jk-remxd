import { useParams } from '@remix-run/react';
import { Link } from "@remix-run/react";
// import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const url = 'https://ripe-anteater-2a0.notion.site/Jack-Kelly-cfbf034984dd4e46963679c53e8853d0';
  const data =  await fetch(url)
  console.log(data);
  return data;
    
  

};
export default function IFrame() {
    const params = useParams();
    const url = params.url;
    
  return (
    <div className="bg-black text-white rounded-lg p-2 m-3 bg-blue">
        <p className='text-4xl text-white bg-green'>{params.iurl}</p>
     <iframe src={"https://ripe-anteater-2a0.notion.site/Jack-Kelly-cfbf034984dd4e46963679c53e8853d0"} className="w-full " />

    </div>
  );
}