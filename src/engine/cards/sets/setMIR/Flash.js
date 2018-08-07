"use strict";
const Constants = require ("../../../Constants");
const FlashBase = require("../setA25/Flash");

class Flash extends FlashBase {
  constructor (game) {
    super(game, "Flash", "Mirage", "MIR");
  }
}

module.exports = Flash;
