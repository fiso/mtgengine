"use strict";
const Constants = require ("../../../Constants");
const PanicBase = require("../set5ED/Panic");

class Panic extends PanicBase {
  constructor (game) {
    super(game, "Panic", "Ice Age", "ICE");
  }
}

module.exports = Panic;
