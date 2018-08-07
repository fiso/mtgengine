"use strict";
const Constants = require ("../../../Constants");
const KnightofCliffhavenBase = require("../setDDP/KnightofCliffhaven");

class KnightofCliffhaven extends KnightofCliffhavenBase {
  constructor (game) {
    super(game, "Knight of Cliffhaven", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightofCliffhaven;
