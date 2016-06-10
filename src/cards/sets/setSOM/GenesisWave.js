"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenesisWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Genesis Wave", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GenesisWave;
