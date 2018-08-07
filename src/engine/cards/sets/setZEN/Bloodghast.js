"use strict";
const Constants = require ("../../../Constants");
const BloodghastBase = require("../setIMA/Bloodghast");

class Bloodghast extends BloodghastBase {
  constructor (game) {
    super(game, "Bloodghast", "Zendikar", "ZEN");
  }
}

module.exports = Bloodghast;
