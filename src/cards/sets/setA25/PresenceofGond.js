"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresenceofGond extends UnimplementedCard {
  constructor (game) {
    super(game, "Presence of Gond", "Masters 25", "A25");
  }
}

module.exports = PresenceofGond;
