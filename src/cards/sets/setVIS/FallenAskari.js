"use strict";
const Constants = require ("../../../Constants");
const FallenAskariBase = require("../setVMA/FallenAskari");

class FallenAskari extends FallenAskariBase {
  constructor (game) {
    super(game, "Fallen Askari", "Visions", "VIS");
  }
}

module.exports = FallenAskari;
