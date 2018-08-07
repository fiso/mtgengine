"use strict";
const Constants = require ("../../../Constants");
const LotlethTrollBase = require("../setCMA/LotlethTroll");

class LotlethTroll extends LotlethTrollBase {
  constructor (game) {
    super(game, "Lotleth Troll", "Return to Ravnica", "RTR");
  }
}

module.exports = LotlethTroll;
