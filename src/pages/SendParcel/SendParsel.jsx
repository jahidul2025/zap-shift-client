import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const warehouseCenters = useLoaderData();
    const regionsDuplicate = warehouseCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];
    
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({control, name:'receiverRegion'})

    const districtsByRegion = (region) => {
        const regionDistrict = warehouseCenters.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district);
        return district;
    }

    const handleSendParcel = data => {
        console.log(data);
    }
    return (
        <div>
            <h2 className=" font-bold text-5xl ">Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4 text-black">
                {/* parcel type div */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" value="document" {...register('parcelType')} className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio" value="non-document" {...register('parcelType')} className="radio" />
                        Non-Document
                    </label>
                </div>
                {/* parcel info: name, weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" className="input w-full" {...register('parcelName')} placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight</label>
                        <input type="number" className="input w-full" {...register('parcelWeight')} placeholder="Parcel Weight" />
                    </fieldset>
                </div>
                {/* two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* sender details */}

                    <fieldset className="fieldset">
                        <h3 className="text-2xl font-semibold mt-4">Sender Details</h3>
                        {/* sender Name */}
                        <label className="label mt-4 ">Sender Name</label>
                        <input type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />
                        {/* sender email */}
                        <label className="label mt-4 ">Sender Email</label>
                        <input type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />

                        {/* sender region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">sender region</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* sender district */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">sender district</legend>
                            <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>
                                {
                                    districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* sender Address */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Sender Address" />

                        {/* sender phone number */}
                        <label className="label mt-4">Sender Phone Number</label>
                        <input type="number" className="input w-full" {...register('senderPhoneNo')} placeholder="Sender Phone Number" />



                        {/* pick up instruction */}
                        <label className="label mt-4">Pick Up Instruction</label>
                        <input type="text" className="input w-full" {...register('pickUpInstruction')} placeholder="Pick Up Instruction" />
                    </fieldset>
                    {/* receiver details */}
                    <fieldset className="fieldset">
                        <h3 className="text-2xl font-semibold mt-4">Receiver Details</h3>
                        {/* receiver Name */}
                        <label className="label mt-4 ">Receiver Name</label>
                        <input type="text" className="input w-full" {...register('receiverName')} placeholder="Receiver Name" />

                        {/* receiver email */}
                        <label className="label mt-4 ">Receiver Email</label>
                        <input type="email" className="input w-full" {...register('receiverEmail')} placeholder="Receiver Email" />

                        {/* receiver region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">receiver region</legend>
                            <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>


                        {/* receiver district */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">receiver district</legend>
                            <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>
                                {
                                    districtsByRegion(receiverRegion).map((d, i) =>
                                        <option key={i} value={d}>{d}</option>
                                    )
                                }
                            </select>
                        </fieldset>

                        {/* receiver Address */}
                        <label className="label mt-4">Receiver Address</label>
                        <input type="text" className="input w-full" {...register('receiverAddress')} placeholder="Receiver Address" />

                        {/* receiver phone number */}
                        <label className="label mt-4">Receiver Phone Number</label>
                        <input type="number" className="input w-full" {...register('receiverPhoneNo')} placeholder="Receiver Phone Number" />



                        {/* Delivery Instruction instruction */}
                        <label className="label mt-4">Delivery Instruction</label>
                        <input type="text" className="input w-full" {...register('deliveryInstruction')} placeholder="Delivery Instruction" />
                    </fieldset>
                </div>
                <input type="submit" className="text-black btn mt-8 btn-primary" value="Send Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;