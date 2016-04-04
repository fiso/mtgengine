"use strict";
const Constants = require ("../../../Constants");
const CraftyPathmageBase = require("../set9ED/CraftyPathmage");

class CraftyPathmage extends CraftyPathmageBase {
  constructor(game) {
    super(game, "Crafty Pathmage", "Tenth Edition", "10E");
  }
}

module.exports = CraftyPathmage;
