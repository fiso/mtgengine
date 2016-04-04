"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarmonizeBase = require("../setARC/Harmonize.js");

class Harmonize extends HarmonizeBase {
  constructor(game) {
    super(game, "Harmonize", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Harmonize;
