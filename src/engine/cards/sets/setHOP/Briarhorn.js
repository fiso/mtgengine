"use strict";
const Constants = require ("../../../Constants");
const BriarhornBase = require("../setDDR/Briarhorn");

class Briarhorn extends BriarhornBase {
  constructor (game) {
    super(game, "Briarhorn", "Planechase", "HOP");
  }
}

module.exports = Briarhorn;
