"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RocketPoweredTurboSlug extends UnimplementedCard {
  constructor (game) {
    super(game, "Rocket-Powered Turbo Slug", "Unhinged", "UNH");
  }
}

module.exports = RocketPoweredTurboSlug;
