"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreetSavvy extends UnimplementedCard {
  constructor(game) {
    super(game, "Street Savvy", "Dissension", "DIS");
  }
}

module.exports = StreetSavvy;
