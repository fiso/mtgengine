"use strict";
const Constants = require ("../../../Constants");
const MarshFlitterBase = require("../setMMA/MarshFlitter");

class MarshFlitter extends MarshFlitterBase {
  constructor (game) {
    super(game, "Marsh Flitter", "Lorwyn", "LRW");
  }
}

module.exports = MarshFlitter;
