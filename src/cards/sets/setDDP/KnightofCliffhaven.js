"use strict";
const Constants = require ("../../../Constants");
const KnightofCliffhavenBase = require("../setDDG/KnightofCliffhaven");

class KnightofCliffhaven extends KnightofCliffhavenBase {
  constructor (game) {
    super(game, "Knight of Cliffhaven", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KnightofCliffhaven;
