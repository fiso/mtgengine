"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Respite extends UnimplementedCard {
  constructor (game) {
    super(game, "Respite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Respite;
