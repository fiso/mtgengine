"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalState extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural State", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NaturalState;
