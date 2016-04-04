"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel.js");

class FallenAngel extends FallenAngelBase {
  constructor(game) {
    super(game, "Fallen Angel", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = FallenAngel;
