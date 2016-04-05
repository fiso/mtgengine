"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthRift extends UnimplementedCard {
  constructor(game) {
    super(game, "Earth Rift", "Odyssey", "ODY");
  }
}

module.exports = EarthRift;
