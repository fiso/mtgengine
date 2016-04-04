"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Redeem extends Card {
  constructor(game) {
    super(game, "Redeem", "Eighth Edition", "8ED");
  }
}

module.exports = Redeem;
