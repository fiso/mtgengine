"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRebirthBase = require("../setC18/PhyrexianRebirth");

class PhyrexianRebirth extends PhyrexianRebirthBase {
  constructor (game) {
    super(game, "Phyrexian Rebirth", "Commander 2016", "C16");
  }
}

module.exports = PhyrexianRebirth;
