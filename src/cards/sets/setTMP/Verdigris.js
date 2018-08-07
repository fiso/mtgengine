"use strict";
const Constants = require ("../../../Constants");
const VerdigrisBase = require("../setTPR/Verdigris");

class Verdigris extends VerdigrisBase {
  constructor (game) {
    super(game, "Verdigris", "Tempest", "TMP");
  }
}

module.exports = Verdigris;
