"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Storm", "Masters Edition III", "ME3");
  }
}

module.exports = CinderStorm;
