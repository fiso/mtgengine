"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Encrust extends UnimplementedCard {
  constructor (game) {
    super(game, "Encrust", "Magic 2015", "M15");
  }
}

module.exports = Encrust;
