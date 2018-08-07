"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Treasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure", "2018 Lunar New Year", "PLNY");
  }
}

module.exports = Treasure;
