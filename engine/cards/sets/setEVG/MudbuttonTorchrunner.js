"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MudbuttonTorchrunnerBase = require("../setDD3_EVG/MudbuttonTorchrunner.js");

class MudbuttonTorchrunner extends MudbuttonTorchrunnerBase {
  constructor(game) {
    super(game, "Mudbutton Torchrunner", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = MudbuttonTorchrunner;
