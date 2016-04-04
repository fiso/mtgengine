"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Karakas extends Card {
  constructor(game) {
    super(game, "Karakas", "Judge Gift Program", "pJGP");
  }
}

module.exports = Karakas;
