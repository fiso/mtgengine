"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sacrifice extends Card {
  constructor(game) {
    super(game, "Sacrifice", "Collector's Edition", "CED");
  }
}

module.exports = Sacrifice;
