"use strict";
const Constants = require ("../../../Constants");
const ScionofOonaBase = require("../setLRW/ScionofOona");

class ScionofOona extends ScionofOonaBase {
  constructor (game) {
    super(game, "Scion of Oona", "Modern Masters", "MMA");
  }
}

module.exports = ScionofOona;
