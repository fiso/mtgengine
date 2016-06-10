"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndiscoveredParadise extends UnimplementedCard {
  constructor (game) {
    super(game, "Undiscovered Paradise", "Visions", "VIS");
  }
}

module.exports = UndiscoveredParadise;
