"use strict";
const Constants = require ("../../../Constants");
const BatterskullBase = require("../setpGPX/Batterskull");

class Batterskull extends BatterskullBase {
  constructor(game) {
    super(game, "Batterskull", "New Phyrexia", "NPH");
  }
}

module.exports = Batterskull;
