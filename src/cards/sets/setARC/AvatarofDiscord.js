"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofDiscord extends UnimplementedCard {
  constructor (game) {
    super(game, "Avatar of Discord", "Archenemy", "ARC");
  }
}

module.exports = AvatarofDiscord;
