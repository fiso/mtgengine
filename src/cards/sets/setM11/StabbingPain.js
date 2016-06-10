"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StabbingPain extends UnimplementedCard {
  constructor (game) {
    super(game, "Stabbing Pain", "Magic 2011", "M11");
  }
}

module.exports = StabbingPain;
