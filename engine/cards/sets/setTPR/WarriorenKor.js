"use strict";
const Constants = require ("../../../Constants");
const WarriorenKorBase = require("../setSTH/WarriorenKor");

class WarriorenKor extends WarriorenKorBase {
  constructor(game) {
    super(game, "Warrior en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = WarriorenKor;
