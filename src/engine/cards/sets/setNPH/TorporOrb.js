"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorporOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Torpor Orb", "New Phyrexia", "NPH");
  }
}

module.exports = TorporOrb;
