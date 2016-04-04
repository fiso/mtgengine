"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedTrauma extends UnimplementedCard {
  constructor(game) {
    super(game, "Shared Trauma", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SharedTrauma;
