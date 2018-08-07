"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormchaserChimera extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormchaser Chimera", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = StormchaserChimera;
