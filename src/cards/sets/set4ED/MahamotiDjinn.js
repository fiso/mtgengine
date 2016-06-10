"use strict";
const Constants = require ("../../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor (game) {
    super(game, "Mahamoti Djinn", "Fourth Edition", "4ED");
  }
}

module.exports = MahamotiDjinn;
