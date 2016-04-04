"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GemstoneMine extends Card {
  constructor(game) {
    super(game, "Gemstone Mine", "Judge Gift Program", "pJGP");
  }
}

module.exports = GemstoneMine;
