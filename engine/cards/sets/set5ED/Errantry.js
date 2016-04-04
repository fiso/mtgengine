"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Errantry extends Card {
  constructor(game) {
    super(game, "Errantry", "Fifth Edition", "5ED");
  }
}

module.exports = Errantry;
