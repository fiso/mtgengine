"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setMPS/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "Magic 2010", "M10");
  }
}

module.exports = PlatinumAngel;
