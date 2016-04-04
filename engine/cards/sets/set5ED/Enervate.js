"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Enervate extends Card {
  constructor(game) {
    super(game, "Enervate", "Fifth Edition", "5ED");
  }
}

module.exports = Enervate;
