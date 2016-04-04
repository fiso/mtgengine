"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshFlitterBase = require("../setLRW/MarshFlitter.js");

class MarshFlitter extends MarshFlitterBase {
  constructor(game) {
    super(game, "Marsh Flitter", "Modern Masters", "MMA");
  }
}

module.exports = MarshFlitter;
