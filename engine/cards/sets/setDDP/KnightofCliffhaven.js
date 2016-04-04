"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightofCliffhavenBase = require("../setDDG/KnightofCliffhaven.js");

class KnightofCliffhaven extends KnightofCliffhavenBase {
  constructor(game) {
    super(game, "Knight of Cliffhaven", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KnightofCliffhaven;
