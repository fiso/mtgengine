"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteAlchemist extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Alchemist", "Homelands", "HML");
  }
}

module.exports = SamiteAlchemist;
