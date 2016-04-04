"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LotlethTrollBase = require("../setC15/LotlethTroll.js");

class LotlethTroll extends LotlethTrollBase {
  constructor(game) {
    super(game, "Lotleth Troll", "Return to Ravnica", "RTR");
  }
}

module.exports = LotlethTroll;
