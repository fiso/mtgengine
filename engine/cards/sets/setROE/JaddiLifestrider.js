"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaddiLifestrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Jaddi Lifestrider", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = JaddiLifestrider;
