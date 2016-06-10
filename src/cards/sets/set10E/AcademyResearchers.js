"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyResearchers extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Researchers", "Tenth Edition", "10E");
  }
}

module.exports = AcademyResearchers;
