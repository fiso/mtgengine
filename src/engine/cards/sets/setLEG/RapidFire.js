"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapidFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Rapid Fire", "Legends", "LEG");
  }
}

module.exports = RapidFire;
