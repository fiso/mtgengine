"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightshadeSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightshade Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = NightshadeSeer;
