"use strict";
const Constants = require ("../../../Constants");
const ShrivelBase = require("../setMM2/Shrivel");

class Shrivel extends ShrivelBase {
  constructor (game) {
    super(game, "Shrivel", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Shrivel;
