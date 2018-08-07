"use strict";
const Constants = require ("../../../Constants");
const LadyZhurongWarriorQueenBase = require("../setPZ2/LadyZhurongWarriorQueen");

class LadyZhurongWarriorQueen extends LadyZhurongWarriorQueenBase {
  constructor (game) {
    super(game, "Lady Zhurong, Warrior Queen", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LadyZhurongWarriorQueen;
