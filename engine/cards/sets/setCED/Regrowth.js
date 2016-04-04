"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Regrowth extends Card {
  constructor(game) {
    super(game, "Regrowth", "Collector's Edition", "CED");
  }
}

module.exports = Regrowth;
