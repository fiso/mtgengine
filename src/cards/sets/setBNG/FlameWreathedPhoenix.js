"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameWreathedPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame-Wreathed Phoenix", "Born of the Gods", "BNG");
  }
}

module.exports = FlameWreathedPhoenix;
