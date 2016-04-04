"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CankerousThirst extends UnimplementedCard {
  constructor(game) {
    super(game, "Cankerous Thirst", "Eventide", "EVE");
  }
}

module.exports = CankerousThirst;
