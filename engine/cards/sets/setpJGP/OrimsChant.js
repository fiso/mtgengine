"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimsChant extends Card {
  constructor(game) {
    super(game, "Orim's Chant", "Judge Gift Program", "pJGP");
  }
}

module.exports = OrimsChant;
