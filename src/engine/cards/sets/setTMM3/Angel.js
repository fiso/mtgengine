"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Angel;
