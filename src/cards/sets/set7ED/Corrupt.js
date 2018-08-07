"use strict";
const Constants = require ("../../../Constants");
const CorruptBase = require("../setDVD/Corrupt");

class Corrupt extends CorruptBase {
  constructor (game) {
    super(game, "Corrupt", "Seventh Edition", "7ED");
  }
}

module.exports = Corrupt;
