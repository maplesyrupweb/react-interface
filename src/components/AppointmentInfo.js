import { BiTrash } from "react-icons/bi"
import { BiEdit } from "react-icons/bi"

// appointment, onDeleteAppointment, onEditAppointment are in App.js

const AppointmentInfo = ({appointment, onDeleteAppointment, onEditAppointment }) => {

    return(
        <li className="px-3 py-3 flex items-start">
        <button onClick = { ()=> 
        // delete button
        onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>

        <button onClick = { ()=> 
        // edit button
        onEditAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiEdit /></button>

        <div className="flex-grow">
        <div><b className="font-bold text-blue-500">ID:</b> {appointment.id}</div>
        <div><b className="font-bold text-blue-500">Date:</b> {appointment.aptDate}</div>
        <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
        <div><b className="font-bold text-blue-500">Pet:</b> {appointment.petName}</div>
        <div><b className="font-bold text-blue-500">Notes:</b> {appointment.aptNotes}</div>
        </div>
        </li>

    )
}


export default AppointmentInfo;