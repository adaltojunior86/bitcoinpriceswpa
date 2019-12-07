import React from 'react'

export interface Props {
  value: number
}

const BitCoinPriceCard: React.FC<Props> = ({ value }) => (
  <div>
    <h3>Last Bitcoin price</h3>
    <div>
      <span>Price:</span>
      <span>{value}</span>
    </div>
  </div>
)

export default BitCoinPriceCard;
