"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonriseIntruder extends Card {
  constructor(game) {
    super(game, "Moonrise Intruder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoonriseIntruder;
