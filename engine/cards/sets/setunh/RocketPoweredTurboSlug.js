"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RocketPoweredTurboSlug extends Card {
  constructor(game) {
    super(game, "Rocket-Powered Turbo Slug", "Unhinged", "UNH");
  }
}

module.exports = RocketPoweredTurboSlug;
