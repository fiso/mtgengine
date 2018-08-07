"use strict";
const Constants = require ("../../../Constants");
const MudbuttonTorchrunnerBase = require("../setMM3/MudbuttonTorchrunner");

class MudbuttonTorchrunner extends MudbuttonTorchrunnerBase {
  constructor (game) {
    super(game, "Mudbutton Torchrunner", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = MudbuttonTorchrunner;
