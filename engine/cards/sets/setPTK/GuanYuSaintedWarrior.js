"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuanYuSaintedWarriorBase = require("../setME3/GuanYuSaintedWarrior.js");

class GuanYuSaintedWarrior extends GuanYuSaintedWarriorBase {
  constructor(game) {
    super(game, "Guan Yu, Sainted Warrior", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = GuanYuSaintedWarrior;
