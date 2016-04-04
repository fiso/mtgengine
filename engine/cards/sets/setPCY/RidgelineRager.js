"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RidgelineRagerBase = require("../set8ED/RidgelineRager.js");

class RidgelineRager extends RidgelineRagerBase {
  constructor(game) {
    super(game, "Ridgeline Rager", "Prophecy", "PCY");
  }
}

module.exports = RidgelineRager;
