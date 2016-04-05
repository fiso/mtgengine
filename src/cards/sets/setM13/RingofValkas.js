"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofValkas extends UnimplementedCard {
  constructor(game) {
    super(game, "Ring of Valkas", "Magic 2013", "M13");
  }
}

module.exports = RingofValkas;
