"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Didgeridoo extends UnimplementedCard {
  constructor (game) {
    super(game, "Didgeridoo", "Masters Edition III", "ME3");
  }
}

module.exports = Didgeridoo;
