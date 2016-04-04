"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LostOrderofJarkeldBase = require("../setICE/LostOrderofJarkeld.js");

class LostOrderofJarkeld extends LostOrderofJarkeldBase {
  constructor(game) {
    super(game, "Lost Order of Jarkeld", "Masters Edition II", "ME2");
  }
}

module.exports = LostOrderofJarkeld;
