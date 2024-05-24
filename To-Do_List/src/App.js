import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Additems from './Additems';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest'

function App() {

  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const API_URL = 'http://localhost:3500/items';

  //TO fetch the data from local host server
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems)
      }
      catch (error) {
        setErrorMsg(error.message)
      }
      finally {
        setIsLoading(false)
      }
    }

    //Set loading Time in list loading...
    setTimeout(() => { (async () => await fetchItems())() }, 5);
  }, [])

  const changeCheckList = async (id) => {
    const ListItems = items.map(items => (items.id == id) ? { ...items, checked: !items.checked } : items);
    setItems(ListItems);

    const myItems = ListItems.filter((items) => items.id == id)

    const updateOptions = {
      method: 'PATCH',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: myItems[0].checked })
    }

    const updateUrl = `${API_URL}/${id}`
    const result = await apiRequest(updateUrl, updateOptions)

    if (result) setErrorMsg(result)
  }

  const changeDelete = async (id) => {
    const ListItems = items.filter(items => items.id !== id);
    setItems(ListItems);

    const deleteOption = { method: 'DELETE' }
    const updateUrl = `${API_URL}/${id}`
    const result = await apiRequest(updateUrl, deleteOption)

    if (result) setErrorMsg(result)
  }

  const addItem = async (activity) => {
    const id = (items.length) ? (items[items.length - 1].id) + 1 : 1
    const addNewItem = { id, activity, checked: false }
    
    const ListItems = [...items, addNewItem]
    setItems(ListItems)
    const posOptions = {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL, posOptions)
    if (result) setErrorMsg(result)
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className="div">
      <Header title="To-Do Lists" />
      <SearchItem search={search} setSearch={setSearch} />
      <Additems newItem={newItem} setNewItem={setNewItem} handleSumbit={handleSumbit} />
      <main>
        {errorMsg ? <p>{`${errorMsg}`}</p> : null}
        {isLoading && <p>Items Loading...</p>}
        {!isLoading && !errorMsg && <Content items={items.filter(items => ((items.activity).toLowerCase().includes(search.toLowerCase())))} changeDelete={changeDelete} handleChange={changeCheckList} />
        }
      </main>
      <Footer items={items} />
    </div>
  );
}

export default App;
