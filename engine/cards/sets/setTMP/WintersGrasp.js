"use strict";
const Constants = require ("../../../Constants");
const WintersGraspBase = require("../setPOR/WintersGrasp");

class WintersGrasp extends WintersGraspBase {
  constructor(game) {
    super(game, "Winter's Grasp", "Tempest", "TMP");
  }
}

module.exports = WintersGrasp;
