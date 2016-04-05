"use strict";
const Constants = require ("../../../Constants");
const ShamanenKorBase = require("../setSTH/ShamanenKor");

class ShamanenKor extends ShamanenKorBase {
  constructor(game) {
    super(game, "Shaman en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = ShamanenKor;
