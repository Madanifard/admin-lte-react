import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowUp,
  faCaretDown,
  faCaretLeft,
  faCaretUp,
  faCloudDownloadAlt,
  faCog,
  faComment,
  faComments,
  faHeart,
  faMinus,
  faPlus,
  faShoppingCart,
  faTag,
  faThumbsUp,
  faTimes,
  faUsers,
  faWrench,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chart from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";
import IranMap from "./Components/IranMap/IranMap";
import user1 from "../../assets/images/user1-128x128.jpg";
import user2 from "../../assets/images/user2-160x160.jpg";
import user7 from "../../assets/images/user7-128x128.jpg";
import user3 from "../../assets/images/user3-128x128.jpg";
import user5 from "../../assets/images/user5-128x128.jpg";
import user6 from "../../assets/images/user6-128x128.jpg";
import user8 from "../../assets/images/user8-128x128.jpg";
import user4 from "../../assets/images/user4-128x128.jpg";
import defualt_image from "../../assets/images/default-150x150.png"

const Dashboard = () => {

  const [monthlyRecapReportActions, setMonthlyRecapReportActions] = useState("");
  const [monthlyRecapReportMinus, setMonthlyRecapReportMinus] = useState("");
  const [monthlyRecapReportRemove, setMonthlyRecapReportRemove] = useState("show");
  const [mapBoxRemove, setMapBoxRemove] = useState("show");
  const [mapBoxMinus, setMapBoxMinus] = useState("");
  const [directChatMinus, setDirectChatMinus] = useState("");
  const [directChatRemove, setDirectChatRemove] = useState("show");
  const [showListAccount, setShowListAccount] = useState("");
  const [lastOrderMinus, setLastOrderMinus] = useState("");
  const [lastOrderRemove, setLastOrderRemove] = useState("show");
  const [userListRemove, setUserListRemove] = useState("show");
  const [userlistMinus, setUserListMinus] = useState("");
  const [browserUsage, setBrowserUsage] = useState("show");
  const [productListRemove, setProductListRemove] = useState("show");
  const [productListMinus, setProductListMinus] = useState("");

  const shwoMonthlyRecapReportDropDown = () => {
    if (monthlyRecapReportActions.length == 0) {
      setMonthlyRecapReportActions("show");
    } else {
      setMonthlyRecapReportActions("");
    }
  }

  const doMonthlyRecapReportMinus = () => {
    if (monthlyRecapReportMinus == "") {
      setMonthlyRecapReportMinus("collapsed-card");
    } else {
      setMonthlyRecapReportMinus("");
    }
  }

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const doMapBoxMinus = () => {
    if (mapBoxMinus == "") {
      setMapBoxMinus("collapsed-card");
    } else {
      setMapBoxMinus("");
    }
  }

  const doDirectChatMinus = () => {
    if (directChatMinus == "") {
      setDirectChatMinus("collapsed-card");
    } else {
      setDirectChatMinus("");
    }
  }

  const doListAccount = () => {
    if (showListAccount == "") {
      setShowListAccount("direct-chat-contacts-open");
    } else {
      setShowListAccount("");
    }
  }

  const doLastOrderMinus = () => {
    if (lastOrderMinus == "") {
      setLastOrderMinus("collapsed-card");
    } else {
      setLastOrderMinus("");
    }
  }

  const doUserListMinus = () => {
    if (userlistMinus == "") {
      setUserListMinus("collapsed-card");
    } else {
      setUserListMinus("");
    }
  }

  const doBrowserUsageMinus = () => {
    if (browserUsage == "") {
      setBrowserUsage("collapsed-card");
    } else {
      setBrowserUsage("");
    }
  }

  const doProductLIstMinus = () => {
    if (productListMinus == "") {
      setProductListMinus("collapsed-card");
    } else {
      setProductListMinus("");
    }
  }

  const dataPie = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {/* Info boxes */}
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-info elevation-1">
            <FontAwesomeIcon icon={(fas, faCog)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">
                10
                <small>%</small>
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-danger elevation-1">
              <FontAwesomeIcon icon={(fas, faThumbsUp)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        {/* fix for small devices only */}
        <div className="clearfix hidden-md-up" />
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-success elevation-1">
              <FontAwesomeIcon icon={(fas, faShoppingCart)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Sales</span>
              <span className="info-box-number">760</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-warning elevation-1">
            <FontAwesomeIcon icon={(fas, faUsers)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">New Members</span>
              <span className="info-box-number">2,000</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <div className={`card ${monthlyRecapReportMinus}`} style={{display: `${monthlyRecapReportRemove}`}}>
            <div className="card-header">
              <h5 className="card-title">Monthly Recap Report</h5>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" onClick={doMonthlyRecapReportMinus}>
                  {monthlyRecapReportMinus == "" ?  <FontAwesomeIcon icon={(fas, faMinus)} /> :  <FontAwesomeIcon icon={(fas, faPlus)} /> }
                </button>
                <div className={`btn-group ${monthlyRecapReportActions}`}>
                  <button type="button" className="btn btn-tool dropdown-toggle" onClick={shwoMonthlyRecapReportDropDown}>
                    <FontAwesomeIcon icon={(fas, faWrench)} />
                  </button>
                  <div className={`dropdown-menu dropdown-menu-right ${monthlyRecapReportActions}`} role="menu">
                    <a href="javascript:;" className="dropdown-item">Action</a>
                    <a href="javascript:;" className="dropdown-item">Another action</a>
                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                    <a className="dropdown-divider" />
                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                  </div>
                </div>
                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={()=> setMonthlyRecapReportRemove("none")}>
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                  </p>
                  <div className="chart">
                    {/* Sales Chart Canvas */}
                    <Line data={data} />
                  </div>
                  {/* /.chart-responsive */}
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>
                  <div className="progress-group">
                    Add Products to Cart
                    <span className="float-right"><b>160</b>/200</span>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" style={{width: '80%'}} />
                    </div>
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    Complete Purchase
                    <span className="float-right"><b>310</b>/400</span>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-danger" style={{width: '75%'}} />
                    </div>
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <span className="progress-text">Visit Premium Page</span>
                    <span className="float-right"><b>480</b>/800</span>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success" style={{width: '60%'}} />
                    </div>
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    Send Inquiries
                    <span className="float-right"><b>250</b>/500</span>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-warning" style={{width: '50%'}} />
                    </div>
                  </div>
                  {/* /.progress-group */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* ./card-body */}
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-success">
                    <FontAwesomeIcon icon={(fas, faCaretUp)} /> 17%
                    </span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-warning">
                    <FontAwesomeIcon icon={(fas, faCaretLeft)} /> 0%
                    </span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-success">
                    <FontAwesomeIcon icon={(fas, faCaretUp)} />
                     20%
                     </span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block">
                    <span className="description-percentage text-danger">
                    <FontAwesomeIcon icon={(fas, faCaretDown)} /> 18%
                    </span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                  {/* /.description-block */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <div className="col-md-8">
          {/* MAP & BOX PANE */}
          <div className={`card ${mapBoxMinus}`} style={{display: `${mapBoxRemove}`}}>
            <div className="card-header">
              <h3 className="card-title">IRAN-Visitors Report</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" onClick={doMapBoxMinus}>
                  {mapBoxMinus == "" ? <FontAwesomeIcon icon={(fas, faMinus)} /> : <FontAwesomeIcon icon={(fas, faPlus)} />}
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={() => setMapBoxRemove("none")}>
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="d-md-flex"> 
                <div className="p-1 flex-fill" style={{overflow: 'hidden'}}>
                  {/* Map will be created here TODO: NEED TO WORK  https://masoudnemati.github.io/iran-map/?%D8%B2%D8%A7%D9%88%D9%87=%D8%B2%D8%A7%D9%88%D9%87  <IranMap />*/}
                  <div className="hero">
                    <IranMap />
                  </div>
                  <style jsx="true">{`
                    .hero {
                      display: flex;
                      flex-direction: row-reverse;
                      justify-content: flex-start;
                      align-items: flex-start;
                    }
                    @media only screen and (max-width: 1200px) {
                      .hero {
                        display: flex;
                        flex-direction: column-reverse;
                      }
                    }
                  `}</style>
                  
                </div>
                <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                  <div className="description-block mb-4">
                    <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                    <h5 className="description-header">8390</h5>
                    <span className="description-text">Visits</span>
                  </div>
                  {/* /.description-block */}
                  <div className="description-block mb-4">
                    <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                    <h5 className="description-header">30%</h5>
                    <span className="description-text">Referrals</span>
                  </div>
                  {/* /.description-block */}
                  <div className="description-block">
                    <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                    <h5 className="description-header">70%</h5>
                    <span className="description-text">Organic</span>
                  </div>
                  {/* /.description-block */}
                </div>{/* /.card-pane-right */}
              </div>{/* /.d-md-flex */}
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          <div className="row">
            <div className="col-md-6">
              {/* DIRECT CHAT */}
              <div className={`card direct-chat direct-chat-warning ${directChatMinus} ${showListAccount}`} style={{display: directChatRemove}}>
                <div className="card-header">
                  <h3 className="card-title">Direct Chat</h3>
                  <div className="card-tools">
                    <span title="3 New Messages" className="badge badge-warning">3</span>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" onClick={doDirectChatMinus}>
                      {directChatMinus == "" ? <FontAwesomeIcon icon={(fas, faMinus)} /> : <FontAwesomeIcon icon={(fas, faPlus)} />}
                      
                    </button>
                    <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle"
                    onClick={doListAccount}>
                      <FontAwesomeIcon icon={(fas, faComments)} />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove"
                    onClick={()=>setDirectChatRemove("none")}>
                      <FontAwesomeIcon icon={(fas, faTimes)} />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  {/* Conversations are loaded here */}
                  <div className="direct-chat-messages">
                    {/* Message. Default to the left */}
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                      </div>
                      {/* /.direct-chat-infos */}
                      <img className="direct-chat-img" src={user1} alt="message user image" />
                      {/* /.direct-chat-img */}
                      <div className="direct-chat-text">
                        Is this template really for free? That's unbelievable!
                      </div>
                      {/* /.direct-chat-text */}
                    </div>
                    {/* /.direct-chat-msg */}
                    {/* Message to the right */}
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                      </div>
                      {/* /.direct-chat-infos */}
                      <img className="direct-chat-img" src={user3} alt="message user image" />
                      {/* /.direct-chat-img */}
                      <div className="direct-chat-text">
                        You better believe it!
                      </div>
                      {/* /.direct-chat-text */}
                    </div>
                    {/* /.direct-chat-msg */}
                    {/* Message. Default to the left */}
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                      </div>
                      {/* /.direct-chat-infos */}
                      <img className="direct-chat-img" src={user1} alt="message user image" />
                      {/* /.direct-chat-img */}
                      <div className="direct-chat-text">
                        Working with AdminLTE on a great new app! Wanna join?
                      </div>
                      {/* /.direct-chat-text */}
                    </div>
                    {/* /.direct-chat-msg */}
                    {/* Message to the right */}
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                      </div>
                      {/* /.direct-chat-infos */}
                      <img className="direct-chat-img" src={user3} alt="message user image" />
                      {/* /.direct-chat-img */}
                      <div className="direct-chat-text">
                        I would love to.
                      </div>
                      {/* /.direct-chat-text */}
                    </div>
                    {/* /.direct-chat-msg */}
                  </div>
                  {/*/.direct-chat-messages*/}
                  {/* Contacts are loaded here */}
                  <div className="direct-chat-contacts">
                    <ul className="contacts-list">
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user1} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date float-right">2/28/2015</small>
                            </span>
                            <span className="contacts-list-msg">How have you been? I was...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user7} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Sarah Doe
                              <small className="contacts-list-date float-right">2/23/2015</small>
                            </span>
                            <span className="contacts-list-msg">I will be waiting for...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user3} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Nadia Jolie
                              <small className="contacts-list-date float-right">2/20/2015</small>
                            </span>
                            <span className="contacts-list-msg">I'll call you back at...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user5} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Nora S. Vans
                              <small className="contacts-list-date float-right">2/10/2015</small>
                            </span>
                            <span className="contacts-list-msg">Where is your new...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user6} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              John K.
                              <small className="contacts-list-date float-right">1/27/2015</small>
                            </span>
                            <span className="contacts-list-msg">Can I take a look at...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                      <li>
                        <a href="javascript:;">
                          <img className="contacts-list-img" src={user8} alt="User Avatar" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Kenneth M.
                              <small className="contacts-list-date float-right">1/4/2015</small>
                            </span>
                            <span className="contacts-list-msg">Never mind I found...</span>
                          </div>
                          {/* /.contacts-list-info */}
                        </a>
                      </li>
                      {/* End Contact Item */}
                    </ul>
                    {/* /.contacts-list */}
                  </div>
                  {/* /.direct-chat-pane */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <form action="#" method="post">
                    <div className="input-group">
                      <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                      <span className="input-group-append">
                        <button type="button" className="btn btn-warning">Send</button>
                      </span>
                    </div>
                  </form>
                </div>
                {/* /.card-footer*/}
              </div>
              {/*/.direct-chat */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              {/* USERS LIST */}
              <div className={`card ${userlistMinus}`} style={{display: userListRemove}}>
                <div className="card-header">
                  <h3 className="card-title">Latest Members</h3>
                  <div className="card-tools">
                    <span className="badge badge-danger">8 New Members</span>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"
                    onClick={doUserListMinus}>
                      {userlistMinus == "" ? <FontAwesomeIcon icon={(fas, faMinus)} /> : <FontAwesomeIcon icon={(fas, faPlus)} />}
                      
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove"
                    onClick={() => setUserListRemove("none")}>
                      <FontAwesomeIcon icon={(fas, faTimes)} />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <ul className="users-list clearfix">
                    <li>
                      <img src={user1} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Alexander Pierce</a>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <img src={user8} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Norman</a>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <img src={user7} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Jane</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src={user6} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">John</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src={user2} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Alexander</a>
                      <span className="users-list-date">13 Jan</span>
                    </li>
                    <li>
                      <img src={user5} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Sarah</a>
                      <span className="users-list-date">14 Jan</span>
                    </li>
                    <li>
                      <img src={user4} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Nora</a>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                    <li>
                      <img src={user3} alt="User Image" />
                      <a className="users-list-name" href="javascript:;">Nadia</a>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                  </ul>
                  {/* /.users-list */}
                </div>
                {/* /.card-body */}
                <div className="card-footer text-center">
                  <a href="javascript:">View All Users</a>
                </div>
                {/* /.card-footer */}
              </div>
              {/*/.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* TABLE: LATEST ORDERS */}
          <div className={`card ${lastOrderMinus}`} style={{display: lastOrderRemove}}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Latest Orders</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                onClick={doLastOrderMinus}>
                  {lastOrderMinus == "" ? <FontAwesomeIcon icon={(fas, faMinus)} /> : <FontAwesomeIcon icon={(fas, faPlus)} />}
                  
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"
                onClick={() => setLastOrderRemove("none")}>
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Status</th>
                      <th>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="javascript:;">OR9842</a></td>
                      <td>Call of Duty IV</td>
                      <td><span className="badge badge-success">Shipped</span></td>
                      <td>
                        <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR1848</a></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td><span className="badge badge-danger">Delivered</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR7429</a></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-info">Processing</span></td>
                      <td>
                        <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR1848</a></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td><span className="badge badge-danger">Delivered</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="javascript:;">OR9842</a></td>
                      <td>Call of Duty IV</td>
                      <td><span className="badge badge-success">Shipped</span></td>
                      <td>
                        <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.table-responsive */}
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <a href="javascript:;" className="btn btn-sm btn-info float-left">Place New Order</a>
              <a href="javascript:;" className="btn btn-sm btn-secondary float-right">View All Orders</a>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Info Boxes Style 2 */}
          <div className="info-box mb-3 bg-warning">
            <span className="info-box-icon">
            <FontAwesomeIcon icon={(fas, faTag)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Inventory</span>
              <span className="info-box-number">5,200</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-success">
            <span className="info-box-icon">

            <FontAwesomeIcon icon={(fas, faHeart)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Mentions</span>
              <span className="info-box-number">92,050</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-danger">
            <span className="info-box-icon">
            
            <FontAwesomeIcon icon={(fas, faCloudDownloadAlt)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Downloads</span>
              <span className="info-box-number">114,381</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-info">
            <span className="info-box-icon">
            <FontAwesomeIcon icon={(fas, faComment)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Direct Messages</span>
              <span className="info-box-number">163,921</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className={`card ${browserUsage}`} style={{display: browserUsage}}>
            <div className="card-header">
              <h3 className="card-title">Browser Usage</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                onClick={doBrowserUsageMinus}>
                  {browserUsage == "" ? <FontAwesomeIcon icon={(fas, faMinus)} /> : <FontAwesomeIcon icon={(fas, faPlus)} />}
                  
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"
                onClick={() => setBrowserUsage("none")}>
                  
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="chart-responsive">
                    <Pie data={dataPie} />
                  </div>
                  {/* ./chart-responsive */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.card-body */}
            <div className="card-footer p-0">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    United States of America
                    <span className="float-right text-danger">
                      
                      <FontAwesomeIcon icon={(fas, faArrowDown)} />
                       12%</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    India
                    <span className="float-right text-success">
                      
                      <FontAwesomeIcon icon={(fas, faArrowUp)} /> 4%
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    China
                    <span className="float-right text-warning">
                     
                      <FontAwesomeIcon icon={(fas, faArrowLeft)} /> 0%
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.footer */}
          </div>
          {/* /.card */}
          {/* PRODUCT LIST */}
          <div className={`card ${productListMinus}`} style={{display: productListRemove}}>
            <div className="card-header">
              <h3 className="card-title">Recently Added Products</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                onClick={doProductLIstMinus}>
                  {productListMinus == ""? <FontAwesomeIcon icon={(fas, faMinus)} />: <FontAwesomeIcon icon={(fas, faPlus)} />}
                  
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"
                onClick={()=> setProductListRemove('none')}>
                  <FontAwesomeIcon icon={(fas, faTimes)} />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <ul className="products-list product-list-in-card pl-2 pr-2">
                <li className="item">
                  <div className="product-img">
                    <img src={defualt_image} alt="Product Image" className="img-size-50" />
                  </div>
                  <div className="product-info">
                    <a href="javascript:;" className="product-title">Samsung TV
                      <span className="badge badge-warning float-right">$1800</span></a>
                    <span className="product-description">
                      Samsung 32" 1080p 60Hz LED Smart HDTV.
                    </span>
                  </div>
                </li>
                {/* /.item */}
                <li className="item">
                  <div className="product-img">
                    <img src={defualt_image} alt="Product Image" className="img-size-50" />
                  </div>
                  <div className="product-info">
                    <a href="javascript:;" className="product-title">Bicycle
                      <span className="badge badge-info float-right">$700</span></a>
                    <span className="product-description">
                      26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                    </span>
                  </div>
                </li>
                {/* /.item */}
                <li className="item">
                  <div className="product-img">
                    <img src={defualt_image} alt="Product Image" className="img-size-50" />
                  </div>
                  <div className="product-info">
                    <a href="javascript:;" className="product-title">
                      Xbox One <span className="badge badge-danger float-right">
                        $350
                      </span>
                    </a>
                    <span className="product-description">
                      Xbox One Console Bundle with Halo Master Chief Collection.
                    </span>
                  </div>
                </li>
                {/* /.item */}
                <li className="item">
                  <div className="product-img">
                    <img src={defualt_image} alt="Product Image" className="img-size-50" />
                  </div>
                  <div className="product-info">
                    <a href="javascript:;" className="product-title">PlayStation 4
                      <span className="badge badge-success float-right">$399</span></a>
                    <span className="product-description">
                      PlayStation 4 500GB Console (PS4)
                    </span>
                  </div>
                </li>
                {/* /.item */}
              </ul>
            </div>
            {/* /.card-body */}
            <div className="card-footer text-center">
              <a href="javascript:;" className="uppercase">View All Products</a>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
    </div>
  );
};

export default Dashboard;
