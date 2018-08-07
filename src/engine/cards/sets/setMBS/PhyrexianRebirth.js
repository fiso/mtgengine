"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRebirthBase = require("../setC18/PhyrexianRebirth");

class PhyrexianRebirth extends PhyrexianRebirthBase {
  constructor (game) {
    super(game, "Phyrexian Rebirth", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRebirth;
