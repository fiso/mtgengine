"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormcallersBoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Stormcaller's Boon", "Alara Reborn", "ARB");
  }
}

module.exports = StormcallersBoon;
