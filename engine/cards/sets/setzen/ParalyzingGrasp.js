"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ParalyzingGraspBase = require("../setRTR/ParalyzingGrasp.js");

class ParalyzingGrasp extends ParalyzingGraspBase {
  constructor(game) {
    super(game, "Paralyzing Grasp", "Zendikar", "ZEN");
  }
}

module.exports = ParalyzingGrasp;
