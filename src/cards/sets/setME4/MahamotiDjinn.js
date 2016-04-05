"use strict";
const Constants = require ("../../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor(game) {
    super(game, "Mahamoti Djinn", "Masters Edition IV", "ME4");
  }
}

module.exports = MahamotiDjinn;
