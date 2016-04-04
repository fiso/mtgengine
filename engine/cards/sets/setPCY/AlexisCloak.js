"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlexisCloak extends Card {
  constructor(game) {
    super(game, "Alexi's Cloak", "Prophecy", "PCY");
  }
}

module.exports = AlexisCloak;
