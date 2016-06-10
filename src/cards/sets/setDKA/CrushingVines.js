"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrushingVines extends UnimplementedCard {
  constructor (game) {
    super(game, "Crushing Vines", "Dark Ascension", "DKA");
  }
}

module.exports = CrushingVines;
