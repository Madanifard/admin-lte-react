import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faR,
  faEnvelope,
  faFlag,
  faCopy,
  faStar,
  faBook,
  faBookmark,
  faThumbsUp,
  faCalendarAlt,
  faComments,
  faShoppingCart,
  faArrowAltCircleRight,
  fas,
  faUserPlus,
  faChartPie,
  faSyncAlt,
  faPlus,
  faMinus,
  faTimes,
  faExpand,
  faCircle,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Widget = () => {
  return (
    <div className="container-fluid">
      <h5 className="mb-2">Info Box</h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-info">
              <FontAwesomeIcon icon={(far, faEnvelope)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Messages</span>
              <span className="info-box-number">1,410</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-success">
              <FontAwesomeIcon icon={(far, faFlag)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">410</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-warning">
              <FontAwesomeIcon icon={(far, faCopy)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Uploads</span>
              <span className="info-box-number">13,648</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-danger">
              <FontAwesomeIcon icon={(far, faStar)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">93,139</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mb-2">
        Info Box With Custom Shadows{" "}
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-none">
            <span className="info-box-icon bg-info">
              <FontAwesomeIcon icon={(far, faEnvelope)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">None</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-sm">
            <span className="info-box-icon bg-success">
              <FontAwesomeIcon icon={(far, faFlag)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Small</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow">
            <span className="info-box-icon bg-warning">
              <FontAwesomeIcon icon={(far, faCopy)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Regular</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-lg">
            <span className="info-box-icon bg-danger">
              <FontAwesomeIcon icon={(far, faStar)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Large</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mt-4 mb-2">
        Info Box With <code>bg-*</code>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-info">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faBookmark)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-success">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faThumbsUp)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-warning">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faCalendarAlt)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-danger">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faComments)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mt-4 mb-2">
        Info Box With <code>bg-gradient-*</code>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-info">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faBookmark)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-success">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faThumbsUp)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-warning">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faCalendarAlt)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-danger">
            <span className="info-box-icon">
              <FontAwesomeIcon icon={(far, faComments)} />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      {/* Small Box (Stat card) */}
      <h5 className="mb-2 mt-4">Small Box</h5>
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={(far, faShoppingCart)} />
            </div>
            <a href="#" className="small-box-footer">
              More info
              <FontAwesomeIcon icon={(far, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">
              More info
              <FontAwesomeIcon icon={(fas, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={(far, faUserPlus)} />
            </div>
            <a href="#" className="small-box-footer">
              More info
              <FontAwesomeIcon icon={(far, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={(far, faChartPie)} />
            </div>
            <a href="#" className="small-box-footer">
              More info
              <FontAwesomeIcon icon={(far, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
      </div>
      {/* /.row */}
      {/* Small Box (Stat card) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-info">
            {/* Loading (remove the following to stop the loading)*/}
            <div className="overlay">
              <FontAwesomeIcon icon={(fas, faSyncAlt)} />
            </div>
            {/* end loading */}
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={(far, faShoppingCart)} />
            </div>
            <a href="#" className="small-box-footer">
              More info <FontAwesomeIcon icon={(far, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-success">
            {/* Loading (remove the following to stop the loading)*/}
            <div className="overlay dark">
              <FontAwesomeIcon icon={(fas, faSyncAlt)} />
            </div>
            {/* end loading */}
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">
              More info <FontAwesomeIcon icon={(far, faArrowAltCircleRight)} />
            </a>
          </div>
        </div>
        {/* ./col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h4 className="mb-2 mt-4">Cards</h4>
      <h5 className="mb-2">Abilities</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-primary collapsed-card">
            <div className="card-header">
              <h3 className="card-title">Expandable</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faPlus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Collapsable</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Removable</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Maximizable</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <FontAwesomeIcon icon={(far, faExpand)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-3">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Card Refresh</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="card-refresh"
                  data-source="widgets.html"
                  data-source-selector="#card-refresh-content"
                >
                  <FontAwesomeIcon icon={(far, faSyncAlt)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          <div className="d-none" id="card-refresh-content">
            The body of the card after card refresh
          </div>
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">All together</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="card-refresh"
                  data-source="widgets.html"
                  data-source-selector="#card-refresh-content"
                  data-load-on-init="false"
                >
                  <FontAwesomeIcon icon={(far, faSyncAlt)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <FontAwesomeIcon icon={(far, faExpand)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Loading state</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
            {/* Loading (remove the following to stop the loading)*/}
            <div className="overlay">
              <FontAwesomeIcon icon={(far, faSyncAlt)} />
            </div>
            {/* end loading */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Loading state (dark)</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
            {/* Loading (remove the following to stop the loading)*/}
            <div className="overlay dark">
              <FontAwesomeIcon icon={(far, faSyncAlt)} />
            </div>
            {/* end loading */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mb-2">
        Custom Shadows Variations{" "}
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-primary shadow-none">
            <div className="card-header">
              <h3 className="card-title">Shadow - None</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-success shadow-sm">
            <div className="card-header">
              <h3 className="card-title">Shadow - Small</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-warning shadow">
            <div className="card-header">
              <h3 className="card-title">Shadow - Regular</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-danger shadow-lg">
            <div className="card-header">
              <h3 className="card-title">Shadow - Large</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <FontAwesomeIcon icon={(far, faExpand)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mb-2">Colors Variations</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Primary</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Success</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Warning</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Danger</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-3">
          <div className="card card-outline card-primary">
            <div className="card-header">
              <h3 className="card-title">Primary Outline</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-outline card-success">
            <div className="card-header">
              <h3 className="card-title">Success Outline</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-outline card-warning">
            <div className="card-header">
              <h3 className="card-title">Warning Outline</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card card-outline card-danger">
            <div className="card-header">
              <h3 className="card-title">Danger Outline</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-primary">
            <div className="card-header">
              <h3 className="card-title">Primary</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-success">
            <div className="card-header">
              <h3 className="card-title">Success</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-warning">
            <div className="card-header">
              <h3 className="card-title">Warning</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-danger">
            <div className="card-header">
              <h3 className="card-title">Danger</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-gradient-primary">
            <div className="card-header">
              <h3 className="card-title">Primary Gradient</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-gradient-success">
            <div className="card-header">
              <h3 className="card-title">Success Gradient</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-gradient-warning">
            <div className="card-header">
              <h3 className="card-title">Warning Gradient</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          <div className="card bg-gradient-danger">
            <div className="card-header">
              <h3 className="card-title">Danger Gradient</h3>
            </div>
            <div className="card-body">The body of the card</div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      {/* Direct Chat */}
      <h4 className="mt-4 mb-2">Direct Chat</h4>
      <div className="row">
        <div className="col-md-3">
          {/* DIRECT CHAT PRIMARY */}
          <div className="card card-primary card-outline direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-primary">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT SUCCESS */}
          <div className="card card-success card-outline direct-chat direct-chat-success">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-success">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-success">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT WARNING */}
          <div className="card card-warning direct-chat direct-chat-warning">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-danger">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-warning">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT DANGER */}
          <div className="card card-danger direct-chat direct-chat-danger">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-danger">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mb-2">
        Custom Shadows Variations{" "}
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <div className="row">
        <div className="col-md-3">
          {/* DIRECT CHAT PRIMARY */}
          <div className="card card-primary card-outline direct-chat direct-chat-primary shadow-none">
            <div className="card-header">
              <h3 className="card-title">Shadow - None</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-primary">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT SUCCESS */}
          <div className="card card-success card-outline direct-chat direct-chat-success shadow-sm">
            <div className="card-header">
              <h3 className="card-title">Shadow - Small</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-success">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-success">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT WARNING */}
          <div className="card card-warning direct-chat direct-chat-warning shadow">
            <div className="card-header">
              <h3 className="card-title">Shadow - Regular</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge bg-danger">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-warning">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
        <div className="col-md-3">
          {/* DIRECT CHAT DANGER */}
          <div className="card card-danger direct-chat direct-chat-danger shadow-lg">
            <div className="card-header">
              <h3 className="card-title">Shadow - Large</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
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
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
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
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="../dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-danger">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <h3 className="mt-4 mb-4">Social Widgets</h3>
      <div className="row">
        <div className="col-md-4">
          {/* Widget: user widget style 2 */}
          <div className="card card-widget widget-user-2">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-warning">
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src="../dist/img/user7-128x128.jpg"
                  alt="User Avatar"
                />
              </div>
              {/* /.widget-user-image */}
              <h3 className="widget-user-username">Nadia Carmichael</h3>
              <h5 className="widget-user-desc">Lead Developer</h5>
            </div>
            <div className="card-footer p-0">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Projects{" "}
                    <span className="float-right badge bg-primary">31</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Tasks <span className="float-right badge bg-info">5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Completed Projects{" "}
                    <span className="float-right badge bg-success">12</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Followers{" "}
                    <span className="float-right badge bg-danger">842</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder &amp; CEO</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div
              className="widget-user-header text-white"
              style={{
                background: 'url("../dist/img/photo1.png") center center',
              }}
            >
              <h3 className="widget-user-username text-right">
                Elizabeth Pierce
              </h3>
              <h5 className="widget-user-desc text-right">Web Designer</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle"
                src="../dist/img/user3-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-6">
          {/* Box Comment */}
          <div className="card card-widget">
            <div className="card-header">
              <div className="user-block">
                <img
                  className="img-circle"
                  src="../dist/img/user1-128x128.jpg"
                  alt="User Image"
                />
                <span className="username">
                  <a href="#">Jonathan Burke Jr.</a>
                </span>
                <span className="description">
                  Shared publicly - 7:30 PM Today
                </span>
              </div>
              {/* /.user-block */}
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Mark as read"
                >
                  <FontAwesomeIcon icon={(far, faCircle)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <img
                className="img-fluid pad"
                src="../dist/img/photo2.png"
                alt="Photo"
              />
              <p>I took this photo this morning. What do you guys think?</p>
              <button type="button" className="btn btn-default btn-sm">
                <FontAwesomeIcon icon={(fas, faShare)} />
                Share
              </button>
              <button type="button" className="btn btn-default btn-sm">
                <FontAwesomeIcon icon={(far, faThumbsUp)} />
                Like
              </button>
              <span className="float-right text-muted">
                127 likes - 3 comments
              </span>
            </div>
            {/* /.card-body */}
            <div className="card-footer card-comments">
              <div className="card-comment">
                {/* User image */}
                <img
                  className="img-circle img-sm"
                  src="../dist/img/user3-128x128.jpg"
                  alt="User Image"
                />
                <div className="comment-text">
                  <span className="username">
                    Maria Gonzales
                    <span className="text-muted float-right">
                      8:03 PM Today
                    </span>
                  </span>
                  {/* /.username */}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                {/* /.comment-text */}
              </div>
              {/* /.card-comment */}
              <div className="card-comment">
                {/* User image */}
                <img
                  className="img-circle img-sm"
                  src="../dist/img/user4-128x128.jpg"
                  alt="User Image"
                />
                <div className="comment-text">
                  <span className="username">
                    Luna Stark
                    <span className="text-muted float-right">
                      8:03 PM Today
                    </span>
                  </span>
                  {/* /.username */}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                {/* /.comment-text */}
              </div>
              {/* /.card-comment */}
            </div>
            {/* /.card-footer */}
            <div className="card-footer">
              <form action="#" method="post">
                <img
                  className="img-fluid img-circle img-sm"
                  src="../dist/img/user4-128x128.jpg"
                  alt="Alt Text"
                />
                {/* .img-push is used to add margin to elements next to floating images */}
                <div className="img-push">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Press enter to post comment"
                  />
                </div>
              </form>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-6">
          {/* Box Comment */}
          <div className="card card-widget">
            <div className="card-header">
              <div className="user-block">
                <img
                  className="img-circle"
                  src="../dist/img/user1-128x128.jpg"
                  alt="User Image"
                />
                <span className="username">
                  <a href="#">Jonathan Burke Jr.</a>
                </span>
                <span className="description">
                  Shared publicly - 7:30 PM Today
                </span>
              </div>
              {/* /.user-block */}
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Mark as read"
                >
                  <FontAwesomeIcon icon={(far, faComments)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <FontAwesomeIcon icon={(far, faMinus)} />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <FontAwesomeIcon icon={(far, faTimes)} />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {/* post text */}
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at
              </p>
              <p>
                the coast of the Semantics, a large language ocean. A small
                river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which
                roasted parts of sentences fly into your mouth.
              </p>
              {/* Attachment */}
              <div className="attachment-block clearfix">
                <img
                  className="attachment-img"
                  src="../dist/img/photo1.png"
                  alt="Attachment Image"
                />
                <div className="attachment-pushed">
                  <h4 className="attachment-heading">
                    <a href="https://www.lipsum.com/">
                      Lorem ipsum text generator
                    </a>
                  </h4>
                  <div className="attachment-text">
                    Description about the attachment can be placed here. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry... <a href="#">more</a>
                  </div>
                  {/* /.attachment-text */}
                </div>
                {/* /.attachment-pushed */}
              </div>
              {/* /.attachment-block */}
              {/* Social sharing buttons */}
              <button type="button" className="btn btn-default btn-sm">
                <FontAwesomeIcon icon={(fas, faShare)} /> Share
              </button>
              <button type="button" className="btn btn-default btn-sm">
                <FontAwesomeIcon icon={(far, faThumbsUp)} /> Like
              </button>
              <span className="float-right text-muted">
                45 likes - 2 comments
              </span>
            </div>
            {/* /.card-body */}
            <div className="card-footer card-comments">
              <div className="card-comment">
                {/* User image */}
                <img
                  className="img-circle img-sm"
                  src="../dist/img/user3-128x128.jpg"
                  alt="User Image"
                />
                <div className="comment-text">
                  <span className="username">
                    Maria Gonzales
                    <span className="text-muted float-right">
                      8:03 PM Today
                    </span>
                  </span>
                  {/* /.username */}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                {/* /.comment-text */}
              </div>
              {/* /.card-comment */}
              <div className="card-comment">
                {/* User image */}
                <img
                  className="img-circle img-sm"
                  src="../dist/img/user5-128x128.jpg"
                  alt="User Image"
                />
                <div className="comment-text">
                  <span className="username">
                    Nora Havisham
                    <span className="text-muted float-right">
                      8:03 PM Today
                    </span>
                  </span>
                  {/* /.username */}
                  The point of using Lorem Ipsum is that it hrs a morer-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </div>
                {/* /.comment-text */}
              </div>
              {/* /.card-comment */}
            </div>
            {/* /.card-footer */}
            <div className="card-footer">
              <form action="#" method="post">
                <img
                  className="img-fluid img-circle img-sm"
                  src="../dist/img/user4-128x128.jpg"
                  alt="Alt Text"
                />
                {/* .img-push is used to add margin to elements next to floating images */}
                <div className="img-push">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Press enter to post comment"
                  />
                </div>
              </form>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* =========================================================== */}
      <h5 className="mb-2">
        Custom Shadows Variations{" "}
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <div className="row">
        <div className="col-md-4">
          {/* Widget: user widget style 2 */}
          <div className="card card-widget widget-user-2 shadow-sm">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-warning">
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src="../dist/img/user7-128x128.jpg"
                  alt="User Avatar"
                />
              </div>
              {/* /.widget-user-image */}
              <h3 className="widget-user-username">Nadia Carmichael</h3>
              <h5 className="widget-user-desc">Lead Developer</h5>
            </div>
            <div className="card-footer p-0">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Projects{" "}
                    <span className="float-right badge bg-primary">31</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Tasks <span className="float-right badge bg-info">5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Completed Projects{" "}
                    <span className="float-right badge bg-success">12</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Followers{" "}
                    <span className="float-right badge bg-danger">842</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user shadow">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder &amp; CEO</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user shadow-lg">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div
              className="widget-user-header text-white"
              style={{
                background: 'url("../dist/img/photo1.png") center center',
              }}
            >
              <h3 className="widget-user-username text-right">
                Elizabeth Pierce
              </h3>
              <h5 className="widget-user-desc text-right">Web Designer</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle"
                src="../dist/img/user3-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <h5 className="mb-2">Card with Image Overlay</h5>
      <div className="card card-success">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="../dist/img/photo1.png"
                  alt="Dist Photo 1"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-primary text-white">
                    Card Title
                  </h5>
                  <p className="card-text text-white pb-2 pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 2 mins ago
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo2.png"
                  alt="Dist Photo 2"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h5 className="card-title text-white mt-5 pt-2">
                    Card Title
                  </h5>
                  <p className="card-text pb-2 pt-1 text-white">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing elit <br />
                    sed do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 15 hours ago
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo3.jpg"
                  alt="Dist Photo 3"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title text-primary">Card Title</h5>
                  <p className="card-text pb-1 pt-1 text-white">
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.{" "}
                  </p>
                  <a href="#" className="text-primary">
                    Last update 3 days ago
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
