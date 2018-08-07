"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcadesSabboth extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcades Sabboth", "Masters Edition III", "ME3");
  }
}

module.exports = ArcadesSabboth;
