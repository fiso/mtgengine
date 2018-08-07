"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setMPS/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PlatinumAngel;
