"use strict";
const Constants = require ("../../../Constants");
const MoorlandInquisitorBase = require("../setDDQ/MoorlandInquisitor");

class MoorlandInquisitor extends MoorlandInquisitorBase {
  constructor (game) {
    super(game, "Moorland Inquisitor", "Avacyn Restored", "AVR");
  }
}

module.exports = MoorlandInquisitor;
