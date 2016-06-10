"use strict";
const Constants = require ("../../../Constants");
const MudbuttonTorchrunnerBase = require("../setDD3_EVG/MudbuttonTorchrunner");

class MudbuttonTorchrunner extends MudbuttonTorchrunnerBase {
  constructor (game) {
    super(game, "Mudbutton Torchrunner", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MudbuttonTorchrunner;
