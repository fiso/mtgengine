"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CondescendBase = require("../setDD3_JVC/Condescend.js");

class Condescend extends CondescendBase {
  constructor(game) {
    super(game, "Condescend", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Condescend;
