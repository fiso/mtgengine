"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedSeastrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Seastrider", "Conspiracy", "CNS");
  }
}

module.exports = PlatedSeastrider;
