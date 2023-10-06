import './styles.css'

export function MerchantDetail({ merchant }) {
  const { name, liveStatus, rewardsRate, shopBackgroundImgBase64 } = merchant

  const status = liveStatus === 'coming_soon' ? 'Coming soon' : null

  return (
    <figure>
      {status && <span className="live-status">{status}</span>}
      <img
        className="img-merchant"
        src={shopBackgroundImgBase64}
        alt={`Image of ${name}`}
      />
      <figcaption>
        <span>{name}</span>
        <br></br>
        <span className="rewards-rate">{rewardsRate} %</span>
      </figcaption>
    </figure>
  )
}

export function Merchants({ filteredMerchants }) {
  return (
    <section>
      {filteredMerchants.map((merchant, key) => {
        return <MerchantDetail key={key} merchant={merchant} />
      })}
    </section>
  )
}
