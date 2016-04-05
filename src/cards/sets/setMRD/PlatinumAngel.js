"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setV15/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor(game) {
    super(game, "Platinum Angel", "Mirrodin", "MRD");
  }
}

module.exports = PlatinumAngel;
