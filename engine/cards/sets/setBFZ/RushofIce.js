"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushofIce extends UnimplementedCard {
  constructor(game) {
    super(game, "Rush of Ice", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RushofIce;
