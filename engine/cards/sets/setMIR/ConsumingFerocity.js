"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingFerocity extends UnimplementedCard {
  constructor(game) {
    super(game, "Consuming Ferocity", "Mirage", "MIR");
  }
}

module.exports = ConsumingFerocity;
