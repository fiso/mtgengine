"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofThune extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Thune", "Magic 2013", "M13");
  }
}

module.exports = RingofThune;
