"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnerringSling extends UnimplementedCard {
  constructor(game) {
    super(game, "Unerring Sling", "Mirage", "MIR");
  }
}

module.exports = UnerringSling;
