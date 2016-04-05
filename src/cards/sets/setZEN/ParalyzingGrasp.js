"use strict";
const Constants = require ("../../../Constants");
const ParalyzingGraspBase = require("../setRTR/ParalyzingGrasp");

class ParalyzingGrasp extends ParalyzingGraspBase {
  constructor(game) {
    super(game, "Paralyzing Grasp", "Zendikar", "ZEN");
  }
}

module.exports = ParalyzingGrasp;
