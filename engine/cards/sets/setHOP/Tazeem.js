"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tazeem extends Card {
  constructor(game) {
    super(game, "Tazeem", "Planechase", "HOP");
  }
}

module.exports = Tazeem;
