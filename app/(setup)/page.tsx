import { db } from "@/lib/db";
import {redirect} from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage =async () => {
    const profile = await initialProfile();
    // console.log("Profile:", profile);


    //if user is already in a server, then start of the website show that server
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });
    if(server){
        redirect(`/server/${server.id}`);
    }


    // if not a part of a server then create a server or join the server
    return(
        <InitialModal />
    );
}

export default SetupPage;