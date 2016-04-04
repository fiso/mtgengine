"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Excruciator extends Card {
  constructor(game) {
    super(game, "Excruciator", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Excruciator;
