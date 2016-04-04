"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainBase = require("../setATH/Mountain.js");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Mountain;
