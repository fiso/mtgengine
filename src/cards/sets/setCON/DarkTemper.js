"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkTemper extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Temper", "Conflux", "CON");
  }
}

module.exports = DarkTemper;
