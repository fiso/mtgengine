"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Boil extends Card {
  constructor(game) {
    super(game, "Boil", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Boil;
