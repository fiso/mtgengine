"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodDivination extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Divination", "Core Set 2019", "M19");
  }
}

module.exports = BloodDivination;
