"use strict";
const Constants = require ("../../../Constants");
const ManaClashBase = require("../set8ED/ManaClash");

class ManaClash extends ManaClashBase {
  constructor (game) {
    super(game, "Mana Clash", "Ninth Edition", "9ED");
  }
}

module.exports = ManaClash;
