"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Conspiracy Tokens", "TCNS");
  }
}

module.exports = Demon;
