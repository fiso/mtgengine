"use strict";
const Constants = require ("../../../Constants");
const FalseDefeatBase = require("../setME3/FalseDefeat");

class FalseDefeat extends FalseDefeatBase {
  constructor (game) {
    super(game, "False Defeat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FalseDefeat;
