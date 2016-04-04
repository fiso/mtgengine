"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terraformer extends Card {
  constructor(game) {
    super(game, "Terraformer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Terraformer;
