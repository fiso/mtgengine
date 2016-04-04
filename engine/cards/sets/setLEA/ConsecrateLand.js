"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConsecrateLandBase = require("../setCED/ConsecrateLand.js");

class ConsecrateLand extends ConsecrateLandBase {
  constructor(game) {
    super(game, "Consecrate Land", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ConsecrateLand;
