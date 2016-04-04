"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathGraspBase = require("../setAPC/DeathGrasp.js");

class DeathGrasp extends DeathGraspBase {
  constructor(game) {
    super(game, "Death Grasp", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeathGrasp;
