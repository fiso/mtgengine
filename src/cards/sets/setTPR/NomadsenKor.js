"use strict";
const Constants = require ("../../../Constants");
const NomadsenKorBase = require("../setSTH/NomadsenKor");

class NomadsenKor extends NomadsenKorBase {
  constructor (game) {
    super(game, "Nomads en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = NomadsenKor;
