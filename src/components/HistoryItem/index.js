import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {logoUrl, timeAccessed, domainUrl, title} = historyDetails

  const deleteOn = () => {
    deleteHistory(historyDetails.id)
  }

  return (
    <li className="destination-item">
      <div className="details-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="destination-image" />
        <p className="name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          className="delete"
          type="button"
          onClick={deleteOn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
