"use strict";
const Constants = require ("../../../Constants");
const RoaroftheWurmBase = require("../setDDS/RoaroftheWurm");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor (game) {
    super(game, "Roar of the Wurm", "World Championship Decks 2003", "WC03");
  }
}

module.exports = RoaroftheWurm;
