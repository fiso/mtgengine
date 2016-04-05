"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomWings extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Wings", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PhantomWings;
