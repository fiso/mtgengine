"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Angel;
