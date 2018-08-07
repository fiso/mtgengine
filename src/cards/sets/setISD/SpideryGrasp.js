"use strict";
const Constants = require ("../../../Constants");
const SpideryGraspBase = require("../setAKH/SpideryGrasp");

class SpideryGrasp extends SpideryGraspBase {
  constructor (game) {
    super(game, "Spidery Grasp", "Innistrad", "ISD");
  }
}

module.exports = SpideryGrasp;
