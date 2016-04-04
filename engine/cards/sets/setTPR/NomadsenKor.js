"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NomadsenKorBase = require("../setSTH/NomadsenKor.js");

class NomadsenKor extends NomadsenKorBase {
  constructor(game) {
    super(game, "Nomads en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = NomadsenKor;
