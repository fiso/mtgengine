"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvyDancer extends Card {
  constructor(game) {
    super(game, "Ivy Dancer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = IvyDancer;
