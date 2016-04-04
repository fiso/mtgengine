"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofImmortals extends UnimplementedCard {
  constructor(game) {
    super(game, "Ring of Immortals", "Legends", "LEG");
  }
}

module.exports = RingofImmortals;
