"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgottenCaveBase = require("../setC13/ForgottenCave.js");

class ForgottenCave extends ForgottenCaveBase {
  constructor(game) {
    super(game, "Forgotten Cave", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ForgottenCave;
