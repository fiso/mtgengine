"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallenAskariBase = require("../setVMA/FallenAskari.js");

class FallenAskari extends FallenAskariBase {
  constructor(game) {
    super(game, "Fallen Askari", "Visions", "VIS");
  }
}

module.exports = FallenAskari;
