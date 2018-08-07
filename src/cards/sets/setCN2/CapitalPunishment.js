"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapitalPunishment extends UnimplementedCard {
  constructor (game) {
    super(game, "Capital Punishment", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CapitalPunishment;
