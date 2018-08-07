"use strict";
const Constants = require ("../../../Constants");
const AethertideWhaleBase = require("../setAER/AethertideWhale");

class AethertideWhale extends AethertideWhaleBase {
  constructor (game) {
    super(game, "Aethertide Whale", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AethertideWhale;
