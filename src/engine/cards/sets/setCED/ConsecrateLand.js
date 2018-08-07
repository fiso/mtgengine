"use strict";
const Constants = require ("../../../Constants");
const ConsecrateLandBase = require("../setTSB/ConsecrateLand");

class ConsecrateLand extends ConsecrateLandBase {
  constructor (game) {
    super(game, "Consecrate Land", "Collectors’ Edition", "CED");
  }
}

module.exports = ConsecrateLand;
