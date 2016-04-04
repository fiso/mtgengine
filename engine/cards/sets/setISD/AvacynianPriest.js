"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvacynianPriest extends Card {
  constructor(game) {
    super(game, "Avacynian Priest", "Innistrad", "ISD");
  }
}

module.exports = AvacynianPriest;
