"use strict";
const Constants = require ("../../../Constants");
const CorruptBase = require("../setDVD/Corrupt");

class Corrupt extends CorruptBase {
  constructor (game) {
    super(game, "Corrupt", "Magic 2014", "M14");
  }
}

module.exports = Corrupt;
