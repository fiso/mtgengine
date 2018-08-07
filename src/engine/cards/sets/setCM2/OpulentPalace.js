"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpulentPalace extends UnimplementedCard {
  constructor (game) {
    super(game, "Opulent Palace", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = OpulentPalace;
