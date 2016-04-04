"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathGrasp extends Card {
  constructor(game) {
    super(game, "Death Grasp", "Apocalypse", "APC");
  }
}

module.exports = DeathGrasp;
