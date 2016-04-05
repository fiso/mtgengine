"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeapingMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Leaping Master", "Khans of Tarkir", "KTK");
  }
}

module.exports = LeapingMaster;
