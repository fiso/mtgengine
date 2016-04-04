"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmashBase = require("../setAPC/Smash.js");

class Smash extends SmashBase {
  constructor(game) {
    super(game, "Smash", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Smash;
