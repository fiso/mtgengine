"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveRevelation extends UnimplementedCard {
  constructor (game) {
    super(game, "Explosive Revelation", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ExplosiveRevelation;
