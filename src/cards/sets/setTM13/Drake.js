"use strict";
const Constants = require ("../../../Constants");
const DrakeBase = require("../setTCMA/Drake");

class Drake extends DrakeBase {
  constructor (game) {
    super(game, "Drake", "Magic 2013 Tokens", "TM13");
  }
}

module.exports = Drake;
