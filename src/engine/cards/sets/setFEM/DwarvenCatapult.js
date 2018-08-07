"use strict";
const Constants = require ("../../../Constants");
const DwarvenCatapultBase = require("../setMED/DwarvenCatapult");

class DwarvenCatapult extends DwarvenCatapultBase {
  constructor (game) {
    super(game, "Dwarven Catapult", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenCatapult;
