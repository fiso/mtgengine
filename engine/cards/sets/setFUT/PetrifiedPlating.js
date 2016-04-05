"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PetrifiedPlating extends UnimplementedCard {
  constructor(game) {
    super(game, "Petrified Plating", "Future Sight", "FUT");
  }
}

module.exports = PetrifiedPlating;
