"use strict";
const Constants = require ("../../../Constants");
const BrainwashBase = require("../set5ED/Brainwash");

class Brainwash extends BrainwashBase {
  constructor(game) {
    super(game, "Brainwash", "The Dark", "DRK");
  }
}

module.exports = Brainwash;
