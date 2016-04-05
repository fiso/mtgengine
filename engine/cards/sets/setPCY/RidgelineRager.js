"use strict";
const Constants = require ("../../../Constants");
const RidgelineRagerBase = require("../set8ED/RidgelineRager");

class RidgelineRager extends RidgelineRagerBase {
  constructor(game) {
    super(game, "Ridgeline Rager", "Prophecy", "PCY");
  }
}

module.exports = RidgelineRager;
