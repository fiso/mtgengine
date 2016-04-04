"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathGraspBase = require("../setAPC/DeathGrasp.js");

class DeathGrasp extends DeathGraspBase {
  constructor(game) {
    super(game, "Death Grasp", "Commander 2015", "C15");
  }
}

module.exports = DeathGrasp;
