"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setIMA/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Guildpact", "GPT");
  }
}

module.exports = Repeal;
