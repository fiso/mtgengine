"use strict";
const Constants = require ("../../../Constants");
const MasticoreBase = require("../setVMA/Masticore");

class Masticore extends MasticoreBase {
  constructor (game) {
    super(game, "Masticore", "From the Vault: Relics", "V10");
  }
}

module.exports = Masticore;
