"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setMPS/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "Magic 2011", "M11");
  }
}

module.exports = PlatinumAngel;
