import { useQueryClient, useMutation } from "@tanstack/react-query";
//import { deleteCabin } from "../../services/apicabins";
import { toast } from "react-hot-toast";
//import { deleteCabinApi as deleteCabin  } from "../../services/apicabins";

export function useDeleteCabin() {

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabinApi } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

   return { isDeleting, deleteCabinApi };
}