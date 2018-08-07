"use strict";
const Constants = require ("../../../Constants");
const DemonsGraspBase = require("../setDDR/DemonsGrasp");

class DemonsGrasp extends DemonsGraspBase {
  constructor (game) {
    super(game, "Demon's Grasp", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DemonsGrasp;
