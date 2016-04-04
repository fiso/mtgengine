"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZhangFeiFierceWarriorBase = require("../setME3/ZhangFeiFierceWarrior.js");

class ZhangFeiFierceWarrior extends ZhangFeiFierceWarriorBase {
  constructor(game) {
    super(game, "Zhang Fei, Fierce Warrior", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhangFeiFierceWarrior;
