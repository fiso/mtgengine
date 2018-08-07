"use strict";
const Constants = require ("../../../Constants");
const FoxfireBase = require("../set5ED/Foxfire");

class Foxfire extends FoxfireBase {
  constructor (game) {
    super(game, "Foxfire", "Ice Age", "ICE");
  }
}

module.exports = Foxfire;
