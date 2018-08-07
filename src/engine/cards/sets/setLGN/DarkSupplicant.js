"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkSupplicant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Supplicant", "Legions", "LGN");
  }
}

module.exports = DarkSupplicant;
