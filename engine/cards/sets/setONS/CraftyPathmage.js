"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CraftyPathmageBase = require("../set9ED/CraftyPathmage.js");

class CraftyPathmage extends CraftyPathmageBase {
  constructor(game) {
    super(game, "Crafty Pathmage", "Onslaught", "ONS");
  }
}

module.exports = CraftyPathmage;
