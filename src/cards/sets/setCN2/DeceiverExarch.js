"use strict";
const Constants = require ("../../../Constants");
const DeceiverExarchBase = require("../setCMA/DeceiverExarch");

class DeceiverExarch extends DeceiverExarchBase {
  constructor (game) {
    super(game, "Deceiver Exarch", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DeceiverExarch;
