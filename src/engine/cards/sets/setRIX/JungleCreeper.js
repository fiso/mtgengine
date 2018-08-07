"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Creeper", "Rivals of Ixalan", "RIX");
  }
}

module.exports = JungleCreeper;
