"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightoftheReliquaryBase = require("../setCON/KnightoftheReliquary.js");

class KnightoftheReliquary extends KnightoftheReliquaryBase {
  constructor(game) {
    super(game, "Knight of the Reliquary", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightoftheReliquary;
