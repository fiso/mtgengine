"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyRector extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Rector", "Urza's Destiny", "UDS");
  }
}

module.exports = AcademyRector;
