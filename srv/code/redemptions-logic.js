/**
 * 
 * @On(event = { "CREATE" }, entity = "demo__projectSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { data } = request;
    const tx = cds.transaction(request);

    // Get the customer's current total reward points and total redeemed reward points
    const [customer] = await SELECT.from('demo__projectSrv.Customers')
        .where({ ID: data.customer_ID })
        .columns('totalRewardPoints', 'totalRedeemedRewardPoints');

    // Check if the customer has enough reward points to redeem
    if (customer.totalRewardPoints < data.redeemedAmount) {
        request.error(400, 'Not enough reward points to redeem');
        return;
    }

    // Deduct the redeemed amount from the customer's total reward points
    customer.totalRewardPoints -= data.redeemedAmount;

    // Add the redeemed amount to the customer's total redeemed reward points
    customer.totalRedeemedRewardPoints += data.redeemedAmount;

    // Update the customer's total reward points and total redeemed reward points
    await UPDATE('demo__projectSrv.Customers')
        .set({
            totalRewardPoints: customer.totalRewardPoints,
            totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints
        })
        .where({ ID: data.customer_ID });
}