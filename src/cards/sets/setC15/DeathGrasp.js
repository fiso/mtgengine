"use strict";
const Constants = require ("../../../Constants");
const DeathGraspBase = require("../setAPC/DeathGrasp");

class DeathGrasp extends DeathGraspBase {
  constructor (game) {
    super(game, "Death Grasp", "Commander 2015", "C15");
  }
}

module.exports = DeathGrasp;
