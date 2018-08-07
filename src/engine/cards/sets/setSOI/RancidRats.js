"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RancidRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Rancid Rats", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RancidRats;
