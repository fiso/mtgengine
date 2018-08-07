"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormbloodBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormblood Berserker", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = StormbloodBerserker;
