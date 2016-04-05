"use strict";
const Constants = require ("../../../Constants");
const DwarvenCatapultBase = require("../setFEM/DwarvenCatapult");

class DwarvenCatapult extends DwarvenCatapultBase {
  constructor(game) {
    super(game, "Dwarven Catapult", "Fifth Edition", "5ED");
  }
}

module.exports = DwarvenCatapult;
