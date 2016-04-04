"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallowedMoonlight extends Card {
  constructor(game) {
    super(game, "Hallowed Moonlight", "Magic Origins", "ORI");
  }
}

module.exports = HallowedMoonlight;
