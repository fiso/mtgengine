"use strict";
const Constants = require ("../../../Constants");
const FumikotheLowbloodBase = require("../setCM2/FumikotheLowblood");

class FumikotheLowblood extends FumikotheLowbloodBase {
  constructor (game) {
    super(game, "Fumiko the Lowblood", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FumikotheLowblood;
