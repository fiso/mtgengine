"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NicolBolastheDeceiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Nicol Bolas, the Deceiver", "Hour of Devastation", "HOU");
  }
}

module.exports = NicolBolastheDeceiver;
