"use strict";
const Constants = require ("../../../Constants");
const ConsecrateLandBase = require("../setCED/ConsecrateLand");

class ConsecrateLand extends ConsecrateLandBase {
  constructor(game) {
    super(game, "Consecrate Land", "International Collector's Edition", "CEI");
  }
}

module.exports = ConsecrateLand;
