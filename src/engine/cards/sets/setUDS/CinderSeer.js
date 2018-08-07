"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = CinderSeer;
