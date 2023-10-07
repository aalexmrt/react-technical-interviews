import './styles.css'

function MerchantsList({ merchants }) {
  return (
    <main>
      <ul className="merchants-list">
        {merchants.map((merchant, key) => {
          const {
            name,
            liveStatus,
            rewardsRate,
            url,
            shopBackgroundImgBase64,
          } = merchant

          const status = liveStatus === 'coming_soon' ? 'Coming soon' : null

          return (
            <li key={key} className="merchant-details">
              <a href={url}>
                {status && <span className="live-status">{status}</span>}
                <img
                  className="img-merchant"
                  src={shopBackgroundImgBase64}
                  alt={`Image of ${name}`}
                />
                <div>
                  <span>{name}</span>
                  <span className="rewards-rate">{rewardsRate} %</span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
function ResultsNotFound() {
  return (
    <main>
      <div className="merchants-empty">
        <p className="p-info">No results found 😢</p>
      </div>
    </main>
  )
}
export function Merchants({ merchantsFiltered }) {
  const hasMerchants = merchantsFiltered?.length > 0
  return hasMerchants ? (
    <MerchantsList merchants={merchantsFiltered} />
  ) : (
    <ResultsNotFound />
  )
}
