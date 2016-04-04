"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Maro extends Card {
  constructor(game) {
    super(game, "Maro", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Maro;
