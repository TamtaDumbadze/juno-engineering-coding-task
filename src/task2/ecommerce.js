////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////
const twoWeeksInMilliseconds = 14 * 24 * 3600 * 1000

const fetchAllOrders = async () => {
    const ids = allIds
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.

    const orderList = await Promise.all(
        ids.map(async (id) => fetchOrderById(id))
    )

    return orderList
}

const bucketOrdersByUsers = async () => {
    let ordersByUsers = {}
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
    const allOrders = await fetchAllOrders()

    allOrders.forEach((order) => {
        const id = order.userId
        ordersByUsers[id] ? ordersByUsers[id].push(order) : ordersByUsers[id] = [order]
    });

    return ordersByUsers
  }

const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
    const orders = await fetchAllOrders()
    const lastTwoWeeks = new Date(Date.now() - twoWeeksInMilliseconds)

    const lastOrders = orders.filter(order => {
        if (order.timestamp >= lastTwoWeeks) return order
    })

    return lastOrders
}

const bucketOrdersByDate = async () => {
    let ordersByDate = {}
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.

    const last2WeeksOrders = await getLast2WeeksOrders()
    ordersByDate.orders = last2WeeksOrders.sort((a, b) => new Date(b.date) - new Date(a.date))

    return ordersByDate
}

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
