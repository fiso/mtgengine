"use strict";
const Constants = require ("../../../Constants");
const CorpseConnoisseurBase = require("../setARC/CorpseConnoisseur");

class CorpseConnoisseur extends CorpseConnoisseurBase {
  constructor (game) {
    super(game, "Corpse Connoisseur", "Shards of Alara", "ALA");
  }
}

module.exports = CorpseConnoisseur;
