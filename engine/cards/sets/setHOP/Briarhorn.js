"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BriarhornBase = require("../setDDH/Briarhorn.js");

class Briarhorn extends BriarhornBase {
  constructor(game) {
    super(game, "Briarhorn", "Planechase", "HOP");
  }
}

module.exports = Briarhorn;
