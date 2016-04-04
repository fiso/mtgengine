"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodfrayGiant extends Card {
  constructor(game) {
    super(game, "Bloodfray Giant", "Return to Ravnica", "RTR");
  }
}

module.exports = BloodfrayGiant;
