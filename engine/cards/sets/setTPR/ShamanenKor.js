"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShamanenKorBase = require("../setSTH/ShamanenKor.js");

class ShamanenKor extends ShamanenKorBase {
  constructor(game) {
    super(game, "Shaman en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = ShamanenKor;
