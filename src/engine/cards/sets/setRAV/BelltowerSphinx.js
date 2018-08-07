"use strict";
const Constants = require ("../../../Constants");
const BelltowerSphinxBase = require("../setM12/BelltowerSphinx");

class BelltowerSphinx extends BelltowerSphinxBase {
  constructor (game) {
    super(game, "Belltower Sphinx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BelltowerSphinx;
