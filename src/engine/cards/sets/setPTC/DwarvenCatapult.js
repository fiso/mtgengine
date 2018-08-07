"use strict";
const Constants = require ("../../../Constants");
const DwarvenCatapultBase = require("../setMED/DwarvenCatapult");

class DwarvenCatapult extends DwarvenCatapultBase {
  constructor (game) {
    super(game, "Dwarven Catapult", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = DwarvenCatapult;
