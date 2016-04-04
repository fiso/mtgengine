"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepealBase = require("../setC15/Repeal.js");

class Repeal extends RepealBase {
  constructor(game) {
    super(game, "Repeal", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Repeal;
