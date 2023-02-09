import logo from './icelandair-logo.svg';
import './App.css';

import Tabs from './Components/Tabs';
import TabPane from './Components/Tabs/TabPane';
import AnswerWrapper from './Components/Answers/AnswerWrapper';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Icelandair" className="logo" />
        <button className="header-btn">Ask questions</button>
      </header>
      
      <main>
          <div className='searchWrapper'>
            <input placeholder='Seach your questoin here' className='search-input' />
          </div>
      </main>
      <Tabs>
          <TabPane title="Popular">
            <div className='tabcontainer'>
              <AnswerWrapper />
            </div>
          </TabPane>
          <TabPane title="Valflokkur 1">
            <div className='tabcontainer'>Valflokkur 1</div>
          </TabPane>
          <TabPane title="Valflokkur 2">
            <div className='tabcontainer'>Valflokkur 2</div>
          </TabPane>
          <TabPane title="Valflokkur 3">
            <div className='tabcontainer'>Valflokkur 3</div>
          </TabPane>
          <TabPane title="Valflokkur 4">
            <div className='tabcontainer'>Valflokkur 4</div>
          </TabPane>
        </Tabs>
    </>
  );
}

export default App;
