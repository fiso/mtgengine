"use strict";
const Constants = require ("../../../Constants");
const LotlethTrollBase = require("../setCMA/LotlethTroll");

class LotlethTroll extends LotlethTrollBase {
  constructor (game) {
    super(game, "Lotleth Troll", "Commander 2015", "C15");
  }
}

module.exports = LotlethTroll;
