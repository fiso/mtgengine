"use strict";
const Constants = require ("../../../Constants");
const ConsecrateLandBase = require("../setCED/ConsecrateLand");

class ConsecrateLand extends ConsecrateLandBase {
  constructor (game) {
    super(game, "Consecrate Land", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ConsecrateLand;
