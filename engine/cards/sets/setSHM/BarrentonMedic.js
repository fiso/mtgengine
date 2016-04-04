"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrentonMedic extends Card {
  constructor(game) {
    super(game, "Barrenton Medic", "Shadowmoor", "SHM");
  }
}

module.exports = BarrentonMedic;
