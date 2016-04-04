"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brightflame extends Card {
  constructor(game) {
    super(game, "Brightflame", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Brightflame;
