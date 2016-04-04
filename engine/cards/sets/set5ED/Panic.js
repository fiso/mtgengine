"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Panic extends Card {
  constructor(game) {
    super(game, "Panic", "Fifth Edition", "5ED");
  }
}

module.exports = Panic;
