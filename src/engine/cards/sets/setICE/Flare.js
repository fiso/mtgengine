"use strict";
const Constants = require ("../../../Constants");
const FlareBase = require("../set5ED/Flare");

class Flare extends FlareBase {
  constructor (game) {
    super(game, "Flare", "Ice Age", "ICE");
  }
}

module.exports = Flare;
