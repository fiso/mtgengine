"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoulderSalvo extends UnimplementedCard {
  constructor (game) {
    super(game, "Boulder Salvo", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BoulderSalvo;
