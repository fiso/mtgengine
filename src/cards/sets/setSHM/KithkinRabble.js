"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinRabble extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Rabble", "Shadowmoor", "SHM");
  }
}

module.exports = KithkinRabble;
