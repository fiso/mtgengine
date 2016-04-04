"use strict";
const Constants = require ("../../../Constants");
const CraftyPathmageBase = require("../set9ED/CraftyPathmage");

class CraftyPathmage extends CraftyPathmageBase {
  constructor(game) {
    super(game, "Crafty Pathmage", "Onslaught", "ONS");
  }
}

module.exports = CraftyPathmage;
