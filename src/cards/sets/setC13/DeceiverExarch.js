"use strict";
const Constants = require ("../../../Constants");
const DeceiverExarchBase = require("../setCMA/DeceiverExarch");

class DeceiverExarch extends DeceiverExarchBase {
  constructor (game) {
    super(game, "Deceiver Exarch", "Commander 2013", "C13");
  }
}

module.exports = DeceiverExarch;
