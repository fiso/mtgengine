"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogbrewWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Bogbrew Witch", "Iconic Masters", "IMA");
  }
}

module.exports = BogbrewWitch;
