"use strict";
const Constants = require ("../../../Constants");
const SpiritenKorBase = require("../setSTH/SpiritenKor");

class SpiritenKor extends SpiritenKorBase {
  constructor (game) {
    super(game, "Spirit en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = SpiritenKor;
