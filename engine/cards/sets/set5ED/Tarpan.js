"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tarpan extends Card {
  constructor(game) {
    super(game, "Tarpan", "Fifth Edition", "5ED");
  }
}

module.exports = Tarpan;
