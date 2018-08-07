"use strict";
const Constants = require ("../../../Constants");
const DrakeBase = require("../setTCMA/Drake");

class Drake extends DrakeBase {
  constructor (game) {
    super(game, "Drake", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Drake;
