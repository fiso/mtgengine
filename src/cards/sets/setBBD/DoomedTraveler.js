"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomedTraveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomed Traveler", "Battlebond", "BBD");
  }
}

module.exports = DoomedTraveler;
