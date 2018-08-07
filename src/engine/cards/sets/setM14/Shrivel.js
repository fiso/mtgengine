"use strict";
const Constants = require ("../../../Constants");
const ShrivelBase = require("../setMM2/Shrivel");

class Shrivel extends ShrivelBase {
  constructor (game) {
    super(game, "Shrivel", "Magic 2014", "M14");
  }
}

module.exports = Shrivel;
