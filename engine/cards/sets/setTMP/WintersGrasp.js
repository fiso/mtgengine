"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WintersGraspBase = require("../setPOR/WintersGrasp.js");

class WintersGrasp extends WintersGraspBase {
  constructor(game) {
    super(game, "Winter's Grasp", "Tempest", "TMP");
  }
}

module.exports = WintersGrasp;
