"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelshaperApprentice extends UnimplementedCard {
  constructor(game) {
    super(game, "Steelshaper Apprentice", "Darksteel", "DST");
  }
}

module.exports = SteelshaperApprentice;
