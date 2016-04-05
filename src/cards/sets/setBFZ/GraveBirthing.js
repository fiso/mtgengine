"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveBirthing extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave Birthing", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GraveBirthing;
