"use strict";
const Constants = require ("../../../Constants");
const SmashBase = require("../setAPC/Smash");

class Smash extends SmashBase {
  constructor (game) {
    super(game, "Smash", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Smash;
