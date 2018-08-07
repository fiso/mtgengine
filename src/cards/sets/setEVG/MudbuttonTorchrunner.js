"use strict";
const Constants = require ("../../../Constants");
const MudbuttonTorchrunnerBase = require("../setMM3/MudbuttonTorchrunner");

class MudbuttonTorchrunner extends MudbuttonTorchrunnerBase {
  constructor (game) {
    super(game, "Mudbutton Torchrunner", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = MudbuttonTorchrunner;
