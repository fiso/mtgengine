"use strict";
const Constants = require ("../../../Constants");
const TarpanBase = require("../set5ED/Tarpan");

class Tarpan extends TarpanBase {
  constructor (game) {
    super(game, "Tarpan", "Ice Age", "ICE");
  }
}

module.exports = Tarpan;
