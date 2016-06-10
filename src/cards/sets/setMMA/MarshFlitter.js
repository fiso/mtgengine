"use strict";
const Constants = require ("../../../Constants");
const MarshFlitterBase = require("../setLRW/MarshFlitter");

class MarshFlitter extends MarshFlitterBase {
  constructor (game) {
    super(game, "Marsh Flitter", "Modern Masters", "MMA");
  }
}

module.exports = MarshFlitter;
