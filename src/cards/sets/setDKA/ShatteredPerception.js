"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteredPerception extends UnimplementedCard {
  constructor (game) {
    super(game, "Shattered Perception", "Dark Ascension", "DKA");
  }
}

module.exports = ShatteredPerception;
