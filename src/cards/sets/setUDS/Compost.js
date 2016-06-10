"use strict";
const Constants = require ("../../../Constants");
const CompostBase = require("../set7ED/Compost");

class Compost extends CompostBase {
  constructor (game) {
    super(game, "Compost", "Urza's Destiny", "UDS");
  }
}

module.exports = Compost;
