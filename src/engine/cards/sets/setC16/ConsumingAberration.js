"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingAberration extends UnimplementedCard {
  constructor (game) {
    super(game, "Consuming Aberration", "Commander 2016", "C16");
  }
}

module.exports = ConsumingAberration;
