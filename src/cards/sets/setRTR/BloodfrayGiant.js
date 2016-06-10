"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfrayGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfray Giant", "Return to Ravnica", "RTR");
  }
}

module.exports = BloodfrayGiant;
