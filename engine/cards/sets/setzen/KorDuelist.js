"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorDuelistBase = require("../setMM2/KorDuelist.js");

class KorDuelist extends KorDuelistBase {
  constructor(game) {
    super(game, "Kor Duelist", "Zendikar", "ZEN");
  }
}

module.exports = KorDuelist;
