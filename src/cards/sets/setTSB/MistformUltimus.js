"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformUltimus extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistform Ultimus", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = MistformUltimus;
