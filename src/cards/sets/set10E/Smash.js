"use strict";
const Constants = require ("../../../Constants");
const SmashBase = require("../setAPC/Smash");

class Smash extends SmashBase {
  constructor (game) {
    super(game, "Smash", "Tenth Edition", "10E");
  }
}

module.exports = Smash;
