"use strict";
const Constants = require ("../../../Constants");
const DrakeBase = require("../setTCMA/Drake");

class Drake extends DrakeBase {
  constructor (game) {
    super(game, "Drake", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = Drake;
