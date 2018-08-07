"use strict";
const Constants = require ("../../../Constants");
const DeathGraspBase = require("../setC15/DeathGrasp");

class DeathGrasp extends DeathGraspBase {
  constructor (game) {
    super(game, "Death Grasp", "Commander 2013", "C13");
  }
}

module.exports = DeathGrasp;
