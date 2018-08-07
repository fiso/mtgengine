"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Avacyn Restored Tokens", "TAVR");
  }
}

module.exports = Angel;
