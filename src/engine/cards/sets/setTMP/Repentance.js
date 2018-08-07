"use strict";
const Constants = require ("../../../Constants");
const RepentanceBase = require("../setTPR/Repentance");

class Repentance extends RepentanceBase {
  constructor (game) {
    super(game, "Repentance", "Tempest", "TMP");
  }
}

module.exports = Repentance;
