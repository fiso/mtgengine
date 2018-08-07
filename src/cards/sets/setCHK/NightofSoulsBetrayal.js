"use strict";
const Constants = require ("../../../Constants");
const NightofSoulsBetrayalBase = require("../setIMA/NightofSoulsBetrayal");

class NightofSoulsBetrayal extends NightofSoulsBetrayalBase {
  constructor (game) {
    super(game, "Night of Souls' Betrayal", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NightofSoulsBetrayal;
