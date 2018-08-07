"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockBadger extends UnimplementedCard {
  constructor (game) {
    super(game, "Rock Badger", "Tenth Edition", "10E");
  }
}

module.exports = RockBadger;
