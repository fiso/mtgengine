"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GenjuoftheFensBase = require("../setBOK/GenjuoftheFens.js");

class GenjuoftheFens extends GenjuoftheFensBase {
  constructor(game) {
    super(game, "Genju of the Fens", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = GenjuoftheFens;
