"use strict";
const Constants = require ("../../../Constants");
const RakeclawGargantuanBase = require("../setC13/RakeclawGargantuan");

class RakeclawGargantuan extends RakeclawGargantuanBase {
  constructor (game) {
    super(game, "Rakeclaw Gargantuan", "Shards of Alara", "ALA");
  }
}

module.exports = RakeclawGargantuan;
