"use strict";
const Constants = require ("../../../Constants");
const ImpatienceBase = require("../set7ED/Impatience");

class Impatience extends ImpatienceBase {
  constructor(game) {
    super(game, "Impatience", "Urza's Destiny", "UDS");
  }
}

module.exports = Impatience;
