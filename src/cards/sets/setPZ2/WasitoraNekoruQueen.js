"use strict";
const Constants = require ("../../../Constants");
const WasitoraNekoruQueenBase = require("../setC17/WasitoraNekoruQueen");

class WasitoraNekoruQueen extends WasitoraNekoruQueenBase {
  constructor (game) {
    super(game, "Wasitora, Nekoru Queen", "You Make the Cube", "PZ2");
  }
}

module.exports = WasitoraNekoruQueen;
