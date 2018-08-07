"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Grasp", "Commander 2015", "C15");
  }
}

module.exports = DeathGrasp;
