"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeliumSquirter extends UnimplementedCard {
  constructor (game) {
    super(game, "Helium Squirter", "Modern Masters 2015", "MM2");
  }
}

module.exports = HeliumSquirter;
