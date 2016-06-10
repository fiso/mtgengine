"use strict";
const Constants = require ("../../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor (game) {
    super(game, "Mahamoti Djinn", "Collector's Edition", "CED");
  }
}

module.exports = MahamotiDjinn;
