"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Wall", "Conspiracy", "CNS");
  }
}

module.exports = CinderWall;
