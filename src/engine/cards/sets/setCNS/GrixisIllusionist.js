"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrixisIllusionist extends UnimplementedCard {
  constructor (game) {
    super(game, "Grixis Illusionist", "Conspiracy", "CNS");
  }
}

module.exports = GrixisIllusionist;
