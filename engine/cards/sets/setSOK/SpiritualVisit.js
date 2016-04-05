"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualVisit extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiritual Visit", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SpiritualVisit;
