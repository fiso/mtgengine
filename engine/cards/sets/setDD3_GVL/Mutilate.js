"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MutilateBase = require("../setC14/Mutilate.js");

class Mutilate extends MutilateBase {
  constructor(game) {
    super(game, "Mutilate", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Mutilate;
