"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Grasp", "Apocalypse", "APC");
  }
}

module.exports = DeathGrasp;
