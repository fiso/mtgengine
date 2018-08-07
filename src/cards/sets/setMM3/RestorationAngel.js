"use strict";
const Constants = require ("../../../Constants");
const RestorationAngelBase = require("../setIMA/RestorationAngel");

class RestorationAngel extends RestorationAngelBase {
  constructor (game) {
    super(game, "Restoration Angel", "Modern Masters 2017", "MM3");
  }
}

module.exports = RestorationAngel;
