import { useDispatch } from "react-redux";

export default function ListParticipant(props){
    const dispatch = useDispatch();
    const { participant, index } = props;

    const date = new Date(participant.collectedDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {participant.name}
            </th>
            <td className="px-6 py-4">
                {participant.age}
            </td>
            <td className="px-6 py-4">
                {participant.statusTest}
            </td>
            <td className="px-6 py-4">
                {formattedDate}
            </td>
        </tr>
            
    )
}