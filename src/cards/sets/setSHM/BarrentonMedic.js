"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrentonMedic extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrenton Medic", "Shadowmoor", "SHM");
  }
}

module.exports = BarrentonMedic;
