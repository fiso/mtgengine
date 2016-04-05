"use strict";
const Constants = require ("../../../Constants");
const BeeStingBase = require("../setME4/BeeSting");

class BeeSting extends BeeStingBase {
  constructor(game) {
    super(game, "Bee Sting", "Portal", "POR");
  }
}

module.exports = BeeSting;
