"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheBrute extends Card {
  constructor(game) {
    super(game, "The Brute", "Fifth Edition", "5ED");
  }
}

module.exports = TheBrute;
