"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KolaghanAspirant extends UnimplementedCard {
  constructor (game) {
    super(game, "Kolaghan Aspirant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanAspirant;
