"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomCentaur extends Card {
  constructor(game) {
    super(game, "Phantom Centaur", "Judgment", "JUD");
  }
}

module.exports = PhantomCentaur;
