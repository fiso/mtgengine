"use strict";
const Constants = require ("../../../Constants");
const CripplingChillBase = require("../setMM3/CripplingChill");

class CripplingChill extends CripplingChillBase {
  constructor (game) {
    super(game, "Crippling Chill", "Avacyn Restored", "AVR");
  }
}

module.exports = CripplingChill;
