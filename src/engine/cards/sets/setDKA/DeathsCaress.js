"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsCaress extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Caress", "Dark Ascension", "DKA");
  }
}

module.exports = DeathsCaress;
