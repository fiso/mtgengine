"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Headstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Headstone", "Homelands", "HML");
  }
}

module.exports = Headstone;
