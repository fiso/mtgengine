"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hobble extends UnimplementedCard {
  constructor (game) {
    super(game, "Hobble", "Planeshift", "PLS");
  }
}

module.exports = Hobble;
