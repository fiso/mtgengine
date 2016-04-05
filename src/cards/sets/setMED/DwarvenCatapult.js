"use strict";
const Constants = require ("../../../Constants");
const DwarvenCatapultBase = require("../setFEM/DwarvenCatapult");

class DwarvenCatapult extends DwarvenCatapultBase {
  constructor(game) {
    super(game, "Dwarven Catapult", "Masters Edition", "MED");
  }
}

module.exports = DwarvenCatapult;
