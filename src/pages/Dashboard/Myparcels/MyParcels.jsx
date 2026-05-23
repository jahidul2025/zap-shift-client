import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxioesSecure";

const MyParcels = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    });


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-4">all of my parcels is : {parcels.length}</h1>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">my parcels</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;