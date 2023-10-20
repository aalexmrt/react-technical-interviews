const APIURL = import.meta.env.VITE_API_URL
const ENDPOINT = '/api/merchants/'

/**
 * Retrieves merchants data from the API and returns an array of unique merchants sorted by live status.
 * @returns {Promise<Array>} An array of unique merchants with selected properties.
 * @throws {Error} If there is an error fetching the data.
 */
export async function retrieveMerchantsData() {
  try {
    const response = await fetch(`${APIURL}${ENDPOINT}`)
    const json = await response.json()

    // Map merchants to selected properties
    const mappedMerchants = json.map((merchant) => ({
      id: merchant.id,
      name: merchant.name,
      liveStatus: merchant.live_status,
      rewardsRate: merchant.rewards_rate.toFixed(2),
      url: merchant.url,
      shopBackgroundImgBase64: merchant.shop_background_img_base64,
    }))

    // Sort merchants by live status and filter out duplicates
    const uniqueMerchants = mappedMerchants
      .sort((a, b) => b.liveStatus.localeCompare(a.liveStatus))
      .filter(
        (merchant, index, self) =>
          index === self.findIndex((m) => m.id === merchant.id)
      )
    return uniqueMerchants
  } catch (error) {
    throw new Error('Error fetching merchants', error)
  }
}
