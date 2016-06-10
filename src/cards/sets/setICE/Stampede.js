"use strict";
const Constants = require ("../../../Constants");
const StampedeBase = require("../set5ED/Stampede");

class Stampede extends StampedeBase {
  constructor (game) {
    super(game, "Stampede", "Ice Age", "ICE");
  }
}

module.exports = Stampede;
