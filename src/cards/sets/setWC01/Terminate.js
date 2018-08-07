"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setC17/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Terminate;
