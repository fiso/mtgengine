"use strict";
const Constants = require ("../../../Constants");
const DeathGraspBase = require("../setAPC/DeathGrasp");

class DeathGrasp extends DeathGraspBase {
  constructor (game) {
    super(game, "Death Grasp", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DeathGrasp;
