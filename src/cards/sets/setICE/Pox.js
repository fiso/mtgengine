"use strict";
const Constants = require ("../../../Constants");
const PoxBase = require("../set5ED/Pox");

class Pox extends PoxBase {
  constructor (game) {
    super(game, "Pox", "Ice Age", "ICE");
  }
}

module.exports = Pox;
