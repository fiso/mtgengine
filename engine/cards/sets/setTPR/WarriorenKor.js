"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarriorenKorBase = require("../setSTH/WarriorenKor.js");

class WarriorenKor extends WarriorenKorBase {
  constructor(game) {
    super(game, "Warrior en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = WarriorenKor;
