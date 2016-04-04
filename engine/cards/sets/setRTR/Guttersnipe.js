"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuttersnipeBase = require("../setC13/Guttersnipe.js");

class Guttersnipe extends GuttersnipeBase {
  constructor(game) {
    super(game, "Guttersnipe", "Return to Ravnica", "RTR");
  }
}

module.exports = Guttersnipe;
