function distanceFromHqInBlocks(pickupLocation){
 const hqLocation=42
 return Math.abs(pickupLocation-hqLocation)
}
function distanceFromHqInFeet(pickupLocation){
    const blocks=distanceFromHqInBlocks(pickupLocation)
    const feetPerBlock=264
    return blocks*feetPerBlock
}
function distanceTravelledInFeet(startBlock,destinationBlock){
    const blocksTravelled=Math.abs(startBlock-destinationBlock)
    const feetPerBlock=264
    return blocksTravelled*feetPerBlock
}
function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock)
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
      return 25
    } else {
      return 'cannot travel that far'
    }
  }



