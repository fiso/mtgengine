"use strict";
const Constants = require ("../../../Constants");
const NornsDominionBase = require("../setPCA/NornsDominion");

class NornsDominion extends NornsDominionBase {
  constructor (game) {
    super(game, "Norn's Dominion", "Planechase 2012", "PC2");
  }
}

module.exports = NornsDominion;
