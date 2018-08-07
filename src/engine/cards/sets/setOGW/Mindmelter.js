"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindmelter extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindmelter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Mindmelter;
