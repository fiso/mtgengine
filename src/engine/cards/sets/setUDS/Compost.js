"use strict";
const Constants = require ("../../../Constants");
const CompostBase = require("../setWC02/Compost");

class Compost extends CompostBase {
  constructor (game) {
    super(game, "Compost", "Urza's Destiny", "UDS");
  }
}

module.exports = Compost;
