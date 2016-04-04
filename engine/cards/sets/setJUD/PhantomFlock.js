"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomFlock extends Card {
  constructor(game) {
    super(game, "Phantom Flock", "Judgment", "JUD");
  }
}

module.exports = PhantomFlock;
