"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessScholar extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Scholar", "Battlebond", "BBD");
  }
}

module.exports = RecklessScholar;
