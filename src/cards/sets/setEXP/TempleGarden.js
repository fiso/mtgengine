"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Garden", "Zendikar Expeditions", "EXP");
  }
}

module.exports = TempleGarden;
