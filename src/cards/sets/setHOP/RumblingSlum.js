"use strict";
const Constants = require ("../../../Constants");
const RumblingSlumBase = require("../setGPT/RumblingSlum");

class RumblingSlum extends RumblingSlumBase {
  constructor (game) {
    super(game, "Rumbling Slum", "Planechase", "HOP");
  }
}

module.exports = RumblingSlum;
