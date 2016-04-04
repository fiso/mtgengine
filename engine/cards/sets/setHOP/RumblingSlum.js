"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RumblingSlumBase = require("../setGPT/RumblingSlum.js");

class RumblingSlum extends RumblingSlumBase {
  constructor(game) {
    super(game, "Rumbling Slum", "Planechase", "HOP");
  }
}

module.exports = RumblingSlum;
