"use strict";
const Constants = require ("../../../Constants");
const DeceiverExarchBase = require("../setC13/DeceiverExarch");

class DeceiverExarch extends DeceiverExarchBase {
  constructor (game) {
    super(game, "Deceiver Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = DeceiverExarch;
