"use strict";
const Constants = require ("../../../Constants");
const BrainwashBase = require("../setPZ2/Brainwash");

class Brainwash extends BrainwashBase {
  constructor (game) {
    super(game, "Brainwash", "The Dark", "DRK");
  }
}

module.exports = Brainwash;
