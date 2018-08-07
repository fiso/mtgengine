"use strict";
const Constants = require ("../../../Constants");
const RestorationAngelBase = require("../setIMA/RestorationAngel");

class RestorationAngel extends RestorationAngelBase {
  constructor (game) {
    super(game, "Restoration Angel", "Avacyn Restored", "AVR");
  }
}

module.exports = RestorationAngel;
