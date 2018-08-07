"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Magic Player Rewards 2003", "P03");
  }
}

module.exports = Demon;
