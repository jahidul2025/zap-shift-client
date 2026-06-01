import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxioesSecure";
import { FaEdit } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

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
console.log(parcels);

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
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => 
                            <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>Blue</td>
                                <button className='btn btn-square hover:bg-primary'>
                                    <FaMagnifyingGlass />
                                </button>
                                <button className='btn btn-square hover:bg-primary'>
                                    <FaEdit />
                                </button>
                                <button className='btn btn-square hover:bg-primary'>
                                    <FaRegTrashCan />
                                </button>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;