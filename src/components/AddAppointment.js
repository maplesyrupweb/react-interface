import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({onSendAppointment,lastId}) => {

const clearData = {

      ownerName: "",
      petName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: ""
}
 
let [toggleForm, setToggleForm] = useState(false);
let [formData, setFormData] = useState(clearData);

/***********************************************
 *  1. Get an appointmentInfo object
 *  2. onSendAppointment used in App.js
 *  3. Clear the add appointment form
 *  4. Hide the form after submission
************************************************/

function formDataPublish() {

  // appointment info object
  const appointmentInfo = {
    //increment by 1
    id: lastId + 1,
    ownerName: formData.owerName,
    petName: formData.petName,
    aptDate: formData.aptDate + " " + formData.aptTime,
    aptNotes: formData.aptNotes
  }
  // used in App.js
  onSendAppointment(appointmentInfo);
  
  //clear the form
  setFormData(clearData);
  
  //Hides / toggles te form
  setToggleForm(!toggleForm);
}

    /*************************************************
     * Return the form for adding an appintment
     ************************************************/
    return (
        <div>
          <button onClick={() => { setToggleForm(!toggleForm) }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
        <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
      </button>
      {
        toggleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">

            {/* add appointment form */}
            {/* ...formData is spread operator */}

            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Owner Name
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input 
                type="text" 
                // repeated for every form input field
                onChange={(event) => {setFormData({...formData, owerName: event.target.value})}}
                value={formData.owerNameName}
                name="ownerName" 
                id="ownerName"
                required
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pet Name
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input 
                type="text" 
                // repeated for every form input field
                onChange={(event) => {setFormData({...formData, petName: event.target.value})}}
                value={formData.petName}
                name="petName" 
                id="petName"
                required
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Date
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input 
                type="date" 
                // repeated for every form input field
                onChange={(event) => {setFormData({...formData, aptDate: event.target.value})}}
                value={formData.aptDate}
                name="aptDate" 
                id="aptDate"
                required
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" /
                >
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Time
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input 
                type="time" 
                // repeated for every form input field
                onChange={(event) => {setFormData({...formData, aptTime: event.target.value})}}
                value={formData.aptTime}
                name="aptTime" 
                id="aptTime"
                required
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Notes
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea 
              // repeated for every form input field
                onChange={(event) => {setFormData({...formData, aptNotes: event.target.value})}}
                value={formData.aptNotes}
                id="aptNotes" 
                name="aptNotes" 
                rows="3"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>


          <div className="pt-5">
            <div className="flex justify-end">
              <button 
                //formDataPublish
                onClick={formDataPublish}
                type="submit" 
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
            </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AddAppointment;