"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Human extends UnimplementedCard {
  constructor (game) {
    super(game, "Human", "Eldritch Moon Tokens", "TEMN");
  }
}

module.exports = Human;
