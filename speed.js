function calculateDemeritPoints(speed) {
    if (speed <= 70) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }

