"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Entomb extends Card {
  constructor(game) {
    super(game, "Entomb", "Judge Gift Program", "pJGP");
  }
}

module.exports = Entomb;
