"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZealousStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Zealous Strike", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ZealousStrike;
