"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomFlock extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Flock", "Judgment", "JUD");
  }
}

module.exports = PhantomFlock;
