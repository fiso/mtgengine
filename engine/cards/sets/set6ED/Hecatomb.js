"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hecatomb extends Card {
  constructor(game) {
    super(game, "Hecatomb", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Hecatomb;
