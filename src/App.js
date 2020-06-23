import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

function App() {

  return (
    <>
    <header className="main_page_header">
      <ColumnItem title={"Посещаемое"} news={news}>
      <h2>В Германии</h2>
      <h2>Рекомендуем</h2>
      <span>date</span>
      </ColumnItem>
      <div className="advertise_block">
        <Advertising />
      </div>
    </header>
    <main>
      <SearchWidget example={example}>
        {data.banner}
      </SearchWidget>
    </main>
    <aside>
      <div className="column">
        <Weather />
        <ColumnItem title={"Посещаемое"} news={visited} />
      </div>
      <div className="column">
        <ColumnItem title={"Карта германии"} news={transportSchedule} />
        <ColumnItem title={"Телепрограмма"} news={tvSchedule}>
        <span className="broadcast">Эфир</span>
        </ColumnItem>
      </div>
      <div className="column">
        <ColumnItem title={"Эфир"} news={broadcast} />
      </div>
    </aside>
    </>

  )
  
}

export default App;
