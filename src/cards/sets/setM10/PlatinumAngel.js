"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setV15/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "Magic 2010", "M10");
  }
}

module.exports = PlatinumAngel;
