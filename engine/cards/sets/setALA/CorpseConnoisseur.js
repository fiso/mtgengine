"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpseConnoisseurBase = require("../setARC/CorpseConnoisseur.js");

class CorpseConnoisseur extends CorpseConnoisseurBase {
  constructor(game) {
    super(game, "Corpse Connoisseur", "Shards of Alara", "ALA");
  }
}

module.exports = CorpseConnoisseur;
