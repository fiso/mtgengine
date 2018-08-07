"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruSanctifier extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Sanctifier", "Legions", "LGN");
  }
}

module.exports = DaruSanctifier;
