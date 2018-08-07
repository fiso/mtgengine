"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IdentityThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Identity Thief", "Eldritch Moon", "EMN");
  }
}

module.exports = IdentityThief;
