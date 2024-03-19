"use client";
import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogHeader,
    DialogFooter,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import{zodResolver} from "@hookform/resolvers/zod";


const formSchema = z.object({
    name: z.string().min(1,{message:"Sever name is required"}),
    imageUrl: z.string().min(1,{message:"Image URL is required"}),
});

export const InitialModal = () => {
    const form =useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        },
    });
    const isLoading=form.formState.isSubmitting;
    const onSubmit = async(values:z.infer<typeof formSchema>) => {
        console.log("Form Values:", values);
    };
    
    return (
    <Dialog open>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">Twicord for everyone</DialogTitle>
                <DialogDescription className="text-center text-zinc-500">
                    Twicord is a social platform for developers to connect and share their work.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <button className="text-black font-bold">Get started</button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    );
};