"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Blighted Agent", "New Phyrexia", "NPH");
  }
}

module.exports = BlightedAgent;
