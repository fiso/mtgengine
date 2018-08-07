"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunarForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunar Force", "Eldritch Moon", "EMN");
  }
}

module.exports = LunarForce;
