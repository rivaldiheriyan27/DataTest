import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import ListParticipant from "./participantComponent/ListParticipant";
import {participantsAll, resetState} from "./slice"
import DatePicker from "react-datepicker";

export default function Participant() { 
    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const participantPackageData = useSelector(state => state.participantPackage)
    const {participantPackage} = participantPackageData

    console.log(participantPackage, "ini data")

    const dataParticipant = async e => {
        const data = await dispatch(participantsAll({}))
        console.log(data)
    }

    useEffect(() =>{
        dataParticipant()
    }, [])

    const handleDateSelect = (range) => {
        setStartDate(range.startDate);
        setEndDate(range.endDate);
      };
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    const dataTanggal = async e =>{
        console.log(e)
    }

    // const handleDateFilter = () => {
    //     const filtered = participantPackage.dataParticipant.filter((participant) => {
    //       const participantDate = new Date(participant.date); // ganti `date` dengan nama property tanggal di data participant
    //       return participantDate >= startDate && participantDate <= endDate;
    //     });
      
    //     setFilteredData(filtered);
    //   };
      

    return(  
        <div>
            <Navbar/>  
            <div className="container md:container md:mx-auto bg-clay py-2 mt-4">
            
            <div className=" w-full flex flex-row h-12 mb-2" >
                {/* <div className="basis-1/4 ...">
                    01
                </div> */}
                <div className="flex-initial w-64 bg-emerald-500 rounded-md flex items-center justify-center text-white mr-3">
                    Jumlah Peserta : {participantPackage.NumberOfParticipants}
                </div>
                <div className="flex-initial w-64 bg-red-400 rounded-md flex items-center justify-center text-white">
                    Peserta Selsai : {participantPackage.ParticipantsCompleted}
                </div>
            </div>
            <div className="m-5">
            <DatePicker
             selected={startDate}
             onSelect={handleDateSelect}
             onChange={dataTanggal}
            //  onCalendarClose={handleDateFilter}
          />
            </div>
             <table className="w-1/2 md:w-full text-sm text-left text-gray-500 dark:text-gray-400">
                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                         <th scope="col" className="px-6 py-3">
                             Name
                         </th>
                         <th scope="col" className="px-6 py-3">
                             Usia
                         </th>
                         <th scope="col" className="px-6 py-3">
                             StatusTest
                         </th>
                         <th scope="col" className="px-6 py-3">
                             Date
                         </th>
                     </tr>
                 </thead>
                <tbody>
                    {participantPackage.dataParticipant.map((el, index) => {
                                            return (
                                                <ListParticipant
                                                participant={el}
                                                index={index + 1}
                                                key={el.id}
                                                />
                                            );
                                        })}
                </tbody>
             </table>
        </div>    
    </div>
    )
}