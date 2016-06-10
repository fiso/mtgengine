"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GethsGrimoire extends UnimplementedCard {
  constructor (game) {
    super(game, "Geth's Grimoire", "Darksteel", "DST");
  }
}

module.exports = GethsGrimoire;
