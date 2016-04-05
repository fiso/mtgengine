"use strict";
const Constants = require ("../../../Constants");
const MudbuttonTorchrunnerBase = require("../setDD3_EVG/MudbuttonTorchrunner");

class MudbuttonTorchrunner extends MudbuttonTorchrunnerBase {
  constructor(game) {
    super(game, "Mudbutton Torchrunner", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = MudbuttonTorchrunner;
