"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimLavamancer extends Card {
  constructor(game) {
    super(game, "Grim Lavamancer", "Judge Gift Program", "pJGP");
  }
}

module.exports = GrimLavamancer;
