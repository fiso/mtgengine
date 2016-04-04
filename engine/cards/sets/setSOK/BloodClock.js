"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodClock extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Clock", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BloodClock;
