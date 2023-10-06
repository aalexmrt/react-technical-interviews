import './styles.css'

export function MerchantDetails({ merchant }) {
  const { name, liveStatus, rewardsRate, url, shopBackgroundImgBase64 } =
    merchant

  const status = liveStatus === 'coming_soon' ? 'Coming soon' : null

  return (
    <figure className="merchant-details">
      <a href={url}>
        {status && <span className="live-status">{status}</span>}
        <img
          className="img-merchant"
          src={shopBackgroundImgBase64}
          alt={`Image of ${name}`}
        />
        <figcaption>
          <span>{name}</span>
          <span className="rewards-rate">{rewardsRate} %</span>
        </figcaption>
      </a>
    </figure>
  )
}

export function Merchants({ filteredMerchants }) {
  return (
    <section>
      {filteredMerchants.map((merchant, key) => {
        return <MerchantDetails key={key} merchant={merchant} />
      })}
    </section>
  )
}
