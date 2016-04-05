"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingOnes extends UnimplementedCard {
  constructor(game) {
    super(game, "Wandering Ones", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WanderingOnes;
