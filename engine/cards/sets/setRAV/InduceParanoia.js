"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InduceParanoia extends Card {
  constructor(game) {
    super(game, "Induce Paranoia", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InduceParanoia;
