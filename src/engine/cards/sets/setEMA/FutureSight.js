"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FutureSight extends UnimplementedCard {
  constructor (game) {
    super(game, "Future Sight", "Eternal Masters", "EMA");
  }
}

module.exports = FutureSight;
