"use strict";
const Constants = require ("../../../Constants");
const FlashBase = require("../set6ED/Flash");

class Flash extends FlashBase {
  constructor(game) {
    super(game, "Flash", "Mirage", "MIR");
  }
}

module.exports = Flash;
