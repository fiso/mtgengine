"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathGraspBase = require("../setAPC/DeathGrasp.js");

class DeathGrasp extends DeathGraspBase {
  constructor(game) {
    super(game, "Death Grasp", "Vintage Masters", "VMA");
  }
}

module.exports = DeathGrasp;
