"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setC15/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Guildpact", "GPT");
  }
}

module.exports = Repeal;
