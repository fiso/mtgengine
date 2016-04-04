"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackLotus extends Card {
  constructor(game) {
    super(game, "Black Lotus", "Collector's Edition", "CED");
  }
}

module.exports = BlackLotus;
