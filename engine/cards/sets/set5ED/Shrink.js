"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shrink extends Card {
  constructor(game) {
    super(game, "Shrink", "Fifth Edition", "5ED");
  }
}

module.exports = Shrink;
