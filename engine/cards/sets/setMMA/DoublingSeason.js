"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoublingSeasonBase = require("../setpJGP/DoublingSeason.js");

class DoublingSeason extends DoublingSeasonBase {
  constructor(game) {
    super(game, "Doubling Season", "Modern Masters", "MMA");
  }
}

module.exports = DoublingSeason;
