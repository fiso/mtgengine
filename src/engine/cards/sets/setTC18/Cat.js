"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cat extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Cat;
