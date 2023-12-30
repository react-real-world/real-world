import NavBar from './components/navBar'
import NavLogo from './components/navLogo'
import UserPost from './components/userPost'
import TitleHello from './components/TitleHello'
import Like from './components/Like'
import Profile from "./components/profile"
import GLobalFeed from "./components/GlobalFeed"
import ReadMore from "./components/readMore"
import PopularTags from "./components/PopularTags"

import './App.css';

function App() {
  const userInfo = [
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!',
      mainText: 'Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.',
      like: 2310,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!',
      mainText: 'Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.',
      like: 2290,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'Try to generate the TCP bus, maybe it will override the neural bandwidth!',
      mainText: 'Est sed deserunt eligendi in velit saepe. Dolorem quis illo vero qui ut recusandae occaecati dolores quae. Voluptatem vero aliquam alias adipisci reiciendis odit nobis est. Vel laboriosam quia commodi rerum. Voluptatum et sed et nesciunt iure ipsum iste aut enim.',
      like: 449,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'We need to bypass the redundant RAM pixel!',
      mainText: 'Eveniet qui aperiam et. Rem incidunt sapiente architecto earum consectetur officia. Assumenda voluptatem sed aperiam sed temporibus sunt in. Totam molestiae aspernatur quia non rem facilis expedita harum veritatis. Culpa ipsam quo dolor.',
      like: 53,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'You cant transmit the firewall without copying the 1080p SDD interface!',
      mainText: 'Est sed deserunt eligendi in velit saepe. Dolorem quis illo vero qui ut recusandae occaecati dolores quae. Voluptatem vero aliquam alias adipisci reiciendis odit nobis est. Vel laboriosam quia commodi rerum. Voluptatum et sed et nesciunt iure ipsum iste aut enim.',
      like: 449,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'You cant connect the interface without programming the virtual PNG protocol!',
      mainText: 'Vel facere dolorem sit hic non. Veniam nihil cumque sed et delectus. Maiores minus quisquam nostrum. Eius quasi nostrum. Molestiae recusandae ut. Suscipit natus aliquam eos sit aut.',
      like: 300,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'Try to bypass the SAS card, maybe it will transmit the solid state system!',
      mainText: 'Est iste totam accusamus dolorem est. Quis non sit impedit similique incidunt odio aspernatur aut rem. Architecto est eum.',
      like: 282,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'Use the auxiliary EXE monitor, then you can hack the haptic port!',
      mainText: 'Et id harum unde et ratione minima non. Suscipit ipsum rem. Sed asperiores quaerat dolorum autem nihil voluptatem et hic ut. Molestiae rerum autem. Dolores nam soluta officia pariatur debitis.',
      like: 401,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'quantifying the microchip wont do anything, we need to index the online SQL hard drive!',
      mainText: 'Minima soluta sed sed et optio explicabo at distinctio repudiandae. Magnam deleniti a ea. Non velit accusamus veniam qui. Necessitatibus velit ad aut officiis in officiis quasi. Sunt nulla dolores voluptatem esse magnam ut.',
      like: 271,
    },
    {
      name: 'Anah Benešová',
      date: new Date(2020, 9, 9),
      title: 'We need to calculate the bluetooth JBOD bus!',
      mainText: 'Ipsa nemo eos sequi nulla id accusamus nam ratione dolore. Omnis sint quisquam accusamus rem rem nihil. Non minus animi cum dolorem earum odit sequi. Rem non inventore sed dicta atque modi. Sed dolorem iste molestiae. Sed eum iste aliquid aliquid.',
      like: 608,
    },
  ];
  
  return (
    <div className="App">
      <nav className="Nav-header">
        <NavLogo/>
        <NavBar/>
      </nav>
      <header className="App-header">
        <TitleHello />
      </header>
      <body className="App-body">
      <GLobalFeed/>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[0].name} date={userInfo[0].date} />
            <Like like={userInfo[0].like} />
          </div>
          <UserPost title={userInfo[0].title} mainText={userInfo[0].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[1].name} date={userInfo[1].date} />
            <Like like={userInfo[1].like} />
          </div>
          <UserPost title={userInfo[1].title} mainText={userInfo[1].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[2].name} date={userInfo[2].date} />
            <Like like={userInfo[2].like} />
          </div>
          <UserPost title={userInfo[2].title} mainText={userInfo[2].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[3].name} date={userInfo[3].date} />
            <Like like={userInfo[3].like} />
          </div>
          <UserPost title={userInfo[3].title} mainText={userInfo[3].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[4].name} date={userInfo[4].date} />
            <Like like={userInfo[4].like} />
          </div>
          <UserPost title={userInfo[4].title} mainText={userInfo[4].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[5].name} date={userInfo[5].date} />
            <Like like={userInfo[5].like} />
          </div>
          <UserPost title={userInfo[5].title} mainText={userInfo[5].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[6].name} date={userInfo[6].date} />
            <Like like={userInfo[6].like} />
          </div>
          <UserPost title={userInfo[6].title} mainText={userInfo[6].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[7].name} date={userInfo[7].date} />
            <Like like={userInfo[7].like} />
          </div>
          <UserPost title={userInfo[7].title} mainText={userInfo[7].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[8].name} date={userInfo[8].date} />
            <Like like={userInfo[8].like} />
          </div>
          <UserPost title={userInfo[8].title} mainText={userInfo[8].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
        <div className="App-body-left">
          <div className="App-body-left-header">
            <Profile name={userInfo[9].name} date={userInfo[9].date} />
            <Like like={userInfo[9].like} />
          </div>
          <UserPost title={userInfo[9].title} mainText={userInfo[9].mainText} />
          <div className="App-body-left-footer">
            <ReadMore/>
          </div>
        </div>
      </body>
      <aside className="aside">
        <PopularTags/>
      </aside>
    </div>
  );
}

export default App;
