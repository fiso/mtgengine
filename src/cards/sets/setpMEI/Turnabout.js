"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Turnabout extends UnimplementedCard {
  constructor (game) {
    super(game, "Turnabout", "Media Inserts", "pMEI");
  }
}

module.exports = Turnabout;
