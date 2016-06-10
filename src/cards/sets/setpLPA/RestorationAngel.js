"use strict";
const Constants = require ("../../../Constants");
const RestorationAngelBase = require("../setAVR/RestorationAngel");

class RestorationAngel extends RestorationAngelBase {
  constructor (game) {
    super(game, "Restoration Angel", "Launch Parties", "pLPA");
  }
}

module.exports = RestorationAngel;
