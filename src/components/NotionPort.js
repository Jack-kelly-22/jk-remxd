import { Client } from '@notionhq/client';
// Initializing a client
import { useState, useEffect } from 'react';

const notion = new Client({
    auth: "secret_10ToXugsB2EqaoxzB8nF3rzK9q6OcdeFMLc52GVMGbl",
    
  })
  async function getPage(id) {
      const req = await notion.pages.retrieve({page_id:id});
      return req;
  }
  
  function NotionPort(){
    const [notionData, setNotionData] = useState({});
    const [notionDataLoaded, setNotionDataLoaded] = useState(false);

    useEffect(() => {
        getPage("42d453e2f83f433598d6a994664cdab9").then(res => {
            setNotionData(res);
            setNotionDataLoaded(true);
        }
        )
    }, []);
        
    return (
        <div>
        <h1>NotionPort</h1>
        <div>{notionDataLoaded ? notionData.title : 'Loading...'}</div>
        </div>
    );
}

export default NotionPort;