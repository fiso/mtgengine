"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeliumSquirter extends UnimplementedCard {
  constructor (game) {
    super(game, "Helium Squirter", "Dissension", "DIS");
  }
}

module.exports = HeliumSquirter;
