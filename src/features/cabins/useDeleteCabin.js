import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apicabins";
import { toast, ToastContainer } from "react-hot-toast";
import { deleteCabin as deleteCabinAPi } from "../../services/apicabins";

export function useDeleteCabin() {

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabinAPi } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            toast.success("Cabin successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

   return { isDeleting, deleteCabin };
}