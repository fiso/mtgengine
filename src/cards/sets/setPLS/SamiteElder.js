"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Samite Elder", "Planeshift", "PLS");
  }
}

module.exports = SamiteElder;
