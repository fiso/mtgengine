"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RancidEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Rancid Earth", "Torment", "TOR");
  }
}

module.exports = RancidEarth;
