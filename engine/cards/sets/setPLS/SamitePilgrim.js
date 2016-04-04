"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamitePilgrim extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Pilgrim", "Planeshift", "PLS");
  }
}

module.exports = SamitePilgrim;
