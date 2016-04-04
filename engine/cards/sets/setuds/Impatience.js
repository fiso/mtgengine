"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImpatienceBase = require("../set7ED/Impatience.js");

class Impatience extends ImpatienceBase {
  constructor(game) {
    super(game, "Impatience", "Urza's Destiny", "UDS");
  }
}

module.exports = Impatience;
