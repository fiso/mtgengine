"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Servo extends UnimplementedCard {
  constructor (game) {
    super(game, "Servo", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Servo;
