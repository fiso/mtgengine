"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedFountain extends UnimplementedCard {
  constructor(game) {
    super(game, "Hallowed Fountain", "Dissension", "DIS");
  }
}

module.exports = HallowedFountain;
