"use strict";
const Constants = require ("../../../Constants");
const WintersGraspBase = require("../setTMP/WintersGrasp");

class WintersGrasp extends WintersGraspBase {
  constructor (game) {
    super(game, "Winter's Grasp", "Portal", "POR");
  }
}

module.exports = WintersGrasp;
