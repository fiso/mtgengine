"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WyluliWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Wyluli Wolf", "Arabian Nights", "ARN");
  }
}

module.exports = WyluliWolf;
