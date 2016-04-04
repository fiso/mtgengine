"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThroatSlitter extends Card {
  constructor(game) {
    super(game, "Throat Slitter", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThroatSlitter;
