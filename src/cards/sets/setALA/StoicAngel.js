"use strict";
const Constants = require ("../../../Constants");
const StoicAngelBase = require("../setMM3/StoicAngel");

class StoicAngel extends StoicAngelBase {
  constructor (game) {
    super(game, "Stoic Angel", "Shards of Alara", "ALA");
  }
}

module.exports = StoicAngel;
