"use strict";
const Constants = require ("../../../Constants");
const ScionofOonaBase = require("../setMMA/ScionofOona");

class ScionofOona extends ScionofOonaBase {
  constructor (game) {
    super(game, "Scion of Oona", "Lorwyn", "LRW");
  }
}

module.exports = ScionofOona;
