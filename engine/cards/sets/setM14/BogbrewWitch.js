"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogbrewWitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Bogbrew Witch", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BogbrewWitch;
