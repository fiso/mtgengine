"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ricochet extends UnimplementedCard {
  constructor(game) {
    super(game, "Ricochet", "Unglued", "UGL");
  }
}

module.exports = Ricochet;
