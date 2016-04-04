"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealofFireBase = require("../setDIS/SealofFire.js");

class SealofFire extends SealofFireBase {
  constructor(game) {
    super(game, "Seal of Fire", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SealofFire;
