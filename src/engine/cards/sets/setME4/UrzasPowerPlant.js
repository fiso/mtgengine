"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasPowerPlant extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Power Plant", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasPowerPlant;
