"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightmareHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightmare Horror", "Dominaria Tokens", "TDOM");
  }
}

module.exports = NightmareHorror;
