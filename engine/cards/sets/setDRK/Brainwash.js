"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainwashBase = require("../set5ED/Brainwash.js");

class Brainwash extends BrainwashBase {
  constructor(game) {
    super(game, "Brainwash", "The Dark", "DRK");
  }
}

module.exports = Brainwash;
