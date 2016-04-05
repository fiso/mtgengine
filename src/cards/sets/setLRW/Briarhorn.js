"use strict";
const Constants = require ("../../../Constants");
const BriarhornBase = require("../setDDH/Briarhorn");

class Briarhorn extends BriarhornBase {
  constructor(game) {
    super(game, "Briarhorn", "Lorwyn", "LRW");
  }
}

module.exports = Briarhorn;
