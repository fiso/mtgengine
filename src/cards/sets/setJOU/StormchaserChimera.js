"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormchaserChimera extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormchaser Chimera", "Journey into Nyx", "JOU");
  }
}

module.exports = StormchaserChimera;
