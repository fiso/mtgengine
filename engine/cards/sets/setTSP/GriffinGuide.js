"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GriffinGuideBase = require("../setDDH/GriffinGuide.js");

class GriffinGuide extends GriffinGuideBase {
  constructor(game) {
    super(game, "Griffin Guide", "Time Spiral", "TSP");
  }
}

module.exports = GriffinGuide;
