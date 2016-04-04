"use strict";
const Constants = require ("../../../Constants");
const ShrivelBase = require("../setM14/Shrivel");

class Shrivel extends ShrivelBase {
  constructor(game) {
    super(game, "Shrivel", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Shrivel;
