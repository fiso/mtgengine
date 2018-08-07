"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Gempalm Sorcerer", "Legions", "LGN");
  }
}

module.exports = GempalmSorcerer;
