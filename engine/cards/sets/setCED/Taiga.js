"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Taiga extends Card {
  constructor(game) {
    super(game, "Taiga", "Collector's Edition", "CED");
  }
}

module.exports = Taiga;
