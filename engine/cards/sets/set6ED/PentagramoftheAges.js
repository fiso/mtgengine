"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PentagramoftheAges extends Card {
  constructor(game) {
    super(game, "Pentagram of the Ages", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PentagramoftheAges;
