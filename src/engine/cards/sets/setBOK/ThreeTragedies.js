"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeTragedies extends UnimplementedCard {
  constructor (game) {
    super(game, "Three Tragedies", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThreeTragedies;
