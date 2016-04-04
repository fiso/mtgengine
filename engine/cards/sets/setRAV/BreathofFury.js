"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreathofFury extends Card {
  constructor(game) {
    super(game, "Breath of Fury", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BreathofFury;
