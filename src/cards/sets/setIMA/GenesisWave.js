"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenesisWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Genesis Wave", "Iconic Masters", "IMA");
  }
}

module.exports = GenesisWave;
