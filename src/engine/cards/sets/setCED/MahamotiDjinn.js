"use strict";
const Constants = require ("../../../Constants");
const MahamotiDjinnBase = require("../setIMA/MahamotiDjinn");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor (game) {
    super(game, "Mahamoti Djinn", "Collectors’ Edition", "CED");
  }
}

module.exports = MahamotiDjinn;
