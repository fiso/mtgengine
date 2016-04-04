"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomNishoba extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Nishoba", "Judgment", "JUD");
  }
}

module.exports = PhantomNishoba;
