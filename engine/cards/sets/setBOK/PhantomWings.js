"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomWings extends Card {
  constructor(game) {
    super(game, "Phantom Wings", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PhantomWings;
