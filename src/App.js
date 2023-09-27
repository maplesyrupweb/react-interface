import { useState, useEffect, useCallback } from "react";
import { BiCalendar} from "react-icons/bi" 
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";



function App() {

  let [appointmentList, setAppointmentList] = useState([]);

  /* intialize empty string */
  let [query,setQuery] = useState("");

  /* sortby state, setSordBy method */

  /*default sort order is by largest ID */

  let [sortBy, setSortBy] = useState("id");

  let [orderBy, setOrderBy] = useState('desc');

  let onQueryChange = "";
  let onOrderByChange = "";
    
  let onSortByChange = "";

  console.log("Number of appointments " + appointmentList.length)
  
  const filteredAppointments = appointmentList.filter (
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) ||
        item.aptDate.toLowerCase().includes(query.toLowerCase()) ||
        item.id.incudes(query)
      )
    }
  // ascending is 1, descending is -1 
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    {console.log("*** Order *** " + (orderBy) )}
    {console.log("*** OrderBy is ASC *** " + (orderBy === 'asc') )}
    
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })
 
  // useCallback is a React hook
  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, [])
  
  useEffect(() => {
    fetchData()
  }, [fetchData])

  /* ... is spread operator */

  /* reducer returns the accumulated result */ 

  

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments Dude</h1>
        {/* console.log("Number:  " + Number(item.id)   */}
        <AddAppointment
        
          onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
          
          
          //Number converts JSON of item.id to number
          lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max,0 )}
          
         />
        <Search 
          query={query}
          onQueryChange={myQuery => setQuery(myQuery)} 
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort) }
          sortBy={sortBy} 
          onSortByChange={mySort => setSortBy(mySort) }
          />
        
        {console.log("query " + query)}
        {console.log("onQueryChange " + onQueryChange)}
        {console.log("orderBy " + orderBy)}
        {console.log("onOrderByChange " + onOrderByChange)}
        {console.log("sortBy " + sortBy)}
        {console.log("onSortByChange " + onSortByChange)}
        
        <ul className="divide-y divide-gray-200">
          {filteredAppointments
            //map creates a new array
            
            .map(appointment => (
              <AppointmentInfo 
                key={appointment.id} 
                appointment={appointment}

                // delete an appointment
                onDeleteAppointment={
                  appointmentId =>
                    // filter creates a new array of appointments
                    setAppointmentList(appointmentList.filter(appointment =>
                      appointment.id !== appointmentId))
                } // end of delete

                /**
                 * placeholder foe edit. it currently deletes all items that does't match the ID
                 * 
                 * re-use the addAppointment form for edit
                 * 
                 */
                
                onEditAppointment={
                  appointmentId =>
                    // filter creates a new array of appointments
                    setAppointmentList(appointmentList.filter(appointment =>
                      appointment.id === appointmentId))
                } // end of delete

              />
          ))
          }
        </ul>

    </div>
  );
}

export default App;