"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tariff extends Card {
  constructor(game) {
    super(game, "Tariff", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tariff;
