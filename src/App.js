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
  /* intialize sort by petName default */
  
  let [sortBy, setSortBy] = useState("petName");

  let [orderBy, setOrderBy] = useState('asc');

  const filteredAppointments = appointmentList.filter (
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) ||
        item.aptDate.toLowerCase().includes(query.toLowerCase()) ||
        item.id.includes(query)
      )
    }
  ).sort((a,b) => {
    /* asc is smallest to largest */
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() 
        ? -1 * order : 1 * order
    )
  })

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

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments Dude</h1>
        <AddAppointment />
        <Search 
          query={query}
          onQueryChange={myQuery => setQuery(myQuery)} 
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort) }
          sortBy={sortBy} 
          onSortByChange={mySort => setSortBy(mySort) }
          />
        
        
        <ul className="divide-y divide-gray-200">
          {filteredAppointments
            .map(appointment => (
              <AppointmentInfo key={appointment.id} 
                appointment={appointment}
                onDeleteAppointment={
                  appointmentId =>
                    setAppointmentList(appointmentList.filter(appointment =>
                      appointment.id !== appointmentId))
                }
              />
          ))
          }
        </ul>

    </div>
  );
}

export default App;