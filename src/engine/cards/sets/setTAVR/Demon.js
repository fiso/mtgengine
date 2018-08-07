"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Avacyn Restored Tokens", "TAVR");
  }
}

module.exports = Demon;
