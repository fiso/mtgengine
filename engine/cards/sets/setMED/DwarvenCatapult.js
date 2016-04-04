"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenCatapultBase = require("../setFEM/DwarvenCatapult.js");

class DwarvenCatapult extends DwarvenCatapultBase {
  constructor(game) {
    super(game, "Dwarven Catapult", "Masters Edition", "MED");
  }
}

module.exports = DwarvenCatapult;
