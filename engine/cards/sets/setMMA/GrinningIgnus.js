"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrinningIgnusBase = require("../setFUT/GrinningIgnus.js");

class GrinningIgnus extends GrinningIgnusBase {
  constructor(game) {
    super(game, "Grinning Ignus", "Modern Masters", "MMA");
  }
}

module.exports = GrinningIgnus;
