"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NivMizzetDracogenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Niv-Mizzet, Dracogenius", "Return to Ravnica", "RTR");
  }
}

module.exports = NivMizzetDracogenius;
