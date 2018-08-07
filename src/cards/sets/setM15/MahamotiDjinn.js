"use strict";
const Constants = require ("../../../Constants");
const MahamotiDjinnBase = require("../setIMA/MahamotiDjinn");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor (game) {
    super(game, "Mahamoti Djinn", "Magic 2015", "M15");
  }
}

module.exports = MahamotiDjinn;
