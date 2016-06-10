"use strict";
const Constants = require ("../../../Constants");
const FumikotheLowbloodBase = require("../setBOK/FumikotheLowblood");

class FumikotheLowblood extends FumikotheLowbloodBase {
  constructor (game) {
    super(game, "Fumiko the Lowblood", "Commander 2015", "C15");
  }
}

module.exports = FumikotheLowblood;
