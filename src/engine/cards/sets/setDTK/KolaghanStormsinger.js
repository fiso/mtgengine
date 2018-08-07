"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KolaghanStormsinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Kolaghan Stormsinger", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanStormsinger;
