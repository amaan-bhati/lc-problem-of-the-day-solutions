//average waiting time
//9th-july-2024
//array
var averageWaitingTime = function (customers) {
  let total = 0;
  let startTime = customers[0][0];
  for (let customer of customers) {
    const arriveTime = customer[0]; // the time customer arrive
    const waitingTime = customer[1]; // the customer waiting time

    if (startTime < arriveTime) {
      // no customer until new customer finally came
      startTime = arriveTime;
    }

    // add total waiting time
    total += startTime + waitingTime - arriveTime;

    // update the start time
    startTime += waitingTime;
  }

  return total / customers.length;
};
