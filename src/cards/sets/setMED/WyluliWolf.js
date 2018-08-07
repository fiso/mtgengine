"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WyluliWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Wyluli Wolf", "Masters Edition", "MED");
  }
}

module.exports = WyluliWolf;
