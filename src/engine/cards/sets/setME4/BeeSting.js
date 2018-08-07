"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeeSting extends UnimplementedCard {
  constructor (game) {
    super(game, "Bee Sting", "Masters Edition IV", "ME4");
  }
}

module.exports = BeeSting;
