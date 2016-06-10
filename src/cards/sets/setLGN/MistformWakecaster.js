"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformWakecaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistform Wakecaster", "Legions", "LGN");
  }
}

module.exports = MistformWakecaster;
