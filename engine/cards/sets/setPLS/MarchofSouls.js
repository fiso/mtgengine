"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchofSouls extends UnimplementedCard {
  constructor(game) {
    super(game, "March of Souls", "Planeshift", "PLS");
  }
}

module.exports = MarchofSouls;
