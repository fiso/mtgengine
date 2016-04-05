"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WastelandStrangler extends UnimplementedCard {
  constructor(game) {
    super(game, "Wasteland Strangler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WastelandStrangler;
