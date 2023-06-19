import './index.css'

const EachHistoryItem = props => {
  const {eachHistory, onDeleting} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    onDeleting(id)
  }

  return (
    <li className="each-history-list-item">
      <div className="time-website-container">
        <p className="accessed-time">{timeAccessed}</p>
        <div className="website-details-container">
          <div className="website-logo-container">
            <img className="website-logo" src={logoUrl} alt="domain logo" />
          </div>
          <div className="website-name-url">
            <p className="website-title">{title}</p>
            <p className="website-domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onDelete}
        className="delete-button"
        data-testid="delete"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachHistoryItem
