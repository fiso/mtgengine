"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Angel;
