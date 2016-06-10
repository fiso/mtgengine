"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmissaryofDespair extends UnimplementedCard {
  constructor (game) {
    super(game, "Emissary of Despair", "Darksteel", "DST");
  }
}

module.exports = EmissaryofDespair;
