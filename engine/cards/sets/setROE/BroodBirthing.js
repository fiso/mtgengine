"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodBirthing extends UnimplementedCard {
  constructor(game) {
    super(game, "Brood Birthing", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BroodBirthing;
