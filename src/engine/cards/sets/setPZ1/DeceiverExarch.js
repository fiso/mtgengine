"use strict";
const Constants = require ("../../../Constants");
const DeceiverExarchBase = require("../setCMA/DeceiverExarch");

class DeceiverExarch extends DeceiverExarchBase {
  constructor (game) {
    super(game, "Deceiver Exarch", "Legendary Cube", "PZ1");
  }
}

module.exports = DeceiverExarch;
