"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GenjuoftheCedarsBase = require("../setBOK/GenjuoftheCedars.js");

class GenjuoftheCedars extends GenjuoftheCedarsBase {
  constructor(game) {
    super(game, "Genju of the Cedars", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = GenjuoftheCedars;
