"use strict";
const Constants = require ("../../../Constants");
const MirriWeatherlightDuelistBase = require("../setC17/MirriWeatherlightDuelist");

class MirriWeatherlightDuelist extends MirriWeatherlightDuelistBase {
  constructor (game) {
    super(game, "Mirri, Weatherlight Duelist", "You Make the Cube", "PZ2");
  }
}

module.exports = MirriWeatherlightDuelist;
