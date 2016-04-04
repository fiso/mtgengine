"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritenKorBase = require("../setSTH/SpiritenKor.js");

class SpiritenKor extends SpiritenKorBase {
  constructor(game) {
    super(game, "Spirit en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = SpiritenKor;
